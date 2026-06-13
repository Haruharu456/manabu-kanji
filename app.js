// App state
const state = {
  currentGrade: 1,
  currentKanji: null,
  filteredKanji: [],
  isTracing: false,
  quizIndex: 0,
  quizOptions: [],
  quizCorrectAnswer: null,
};

// DOM elements
const gradeTabs = document.getElementById('gradeTabs');
const gradeTitle = document.getElementById('gradeTitle');
const countText = document.getElementById('countText');
const kanjiGrid = document.getElementById('kanjiGrid');
const searchInput = document.getElementById('searchInput');
const selectedKanjiEl = document.getElementById('selectedKanji');
const gradeLabel = document.getElementById('gradeLabel');
const strokeCount = document.getElementById('strokeCount');
const onReadings = document.getElementById('onReadings');
const kunReadings = document.getElementById('kunReadings');
const meanings = document.getElementById('meanings');
const strokeStage = document.getElementById('strokeStage');
const strokeSvg = document.getElementById('strokeSvg');
const traceCanvas = document.getElementById('traceCanvas');
const replayButton = document.getElementById('replayButton');
const traceButton = document.getElementById('traceButton');
const nextQuizButton = document.getElementById('nextQuizButton');
const quizQuestion = document.getElementById('quizQuestion');
const quizOptions = document.getElementById('quizOptions');
const quizFeedback = document.getElementById('quizFeedback');

let canvasCtx = null;
let isDrawing = false;

// Initialize app
function init() {
  createGradeTabs();
  loadGrade(1);
  setupSearchInput();
  setupCanvasTracking();
  registerServiceWorker();
}

// Create grade selection tabs
function createGradeTabs() {
  const grades = getAllGrades();
  gradeTabs.innerHTML = '';

  grades.forEach(grade => {
    const button = document.createElement('button');
    button.textContent = `${grade}年生`;
    button.className = `grade-tab ${grade === 1 ? 'active' : ''}`;
    button.type = 'button';
    button.addEventListener('click', () => {
      loadGrade(grade);
      document.querySelectorAll('.grade-tab').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
    gradeTabs.appendChild(button);
  });
}

// Load grade
function loadGrade(grade) {
  state.currentGrade = grade;
  searchInput.value = '';
  state.filteredKanji = getKanjiByGrade(grade);

  gradeTitle.textContent = `${grade}年生`;
  gradeLabel.textContent = `${grade}年生`;
  countText.textContent = `${state.filteredKanji.length}個`;

  renderKanjiGrid();

  if (state.filteredKanji.length > 0) {
    selectKanji(state.filteredKanji[0]);
  }
}

// Render kanji grid
function renderKanjiGrid() {
  kanjiGrid.innerHTML = '';

  state.filteredKanji.forEach(k => {
    const item = document.createElement('button');
    item.className = `kanji-item ${state.currentKanji?.kanji === k.kanji ? 'selected' : ''}`;
    item.textContent = k.kanji;
    item.type = 'button';
    item.addEventListener('click', () => selectKanji(k));
    kanjiGrid.appendChild(item);
  });
}

// Select kanji
function selectKanji(kanji) {
  state.currentKanji = kanji;

  selectedKanjiEl.textContent = kanji.kanji;
  strokeCount.textContent = `${kanji.strokes}画`;
  onReadings.textContent = kanji.on.join('、');
  kunReadings.textContent = kanji.kun.join('、') || '（訓読みなし）';
  meanings.textContent = kanji.meaning;

  // Clear canvas
  if (canvasCtx) {
    canvasCtx.clearRect(0, 0, traceCanvas.width, traceCanvas.height);
  }

  // Reset stroke visualization
  renderStrokeSvg();

  // Reset tracing mode
  state.isTracing = false;
  traceCanvas.style.display = 'none';

  // Update grid
  renderKanjiGrid();

  // Generate quiz
  generateQuiz();
}

// Render stroke SVG
function renderStrokeSvg() {
  strokeSvg.innerHTML = '';

  // Create background
  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rect.setAttribute('width', '109');
  rect.setAttribute('height', '109');
  rect.setAttribute('fill', 'white');
  rect.setAttribute('stroke', '#e0e0e0');
  rect.setAttribute('stroke-width', '0.5');
  strokeSvg.appendChild(rect);

  // Grid lines
  for (let i = 0; i <= 10; i++) {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', i * 10.9);
    line.setAttribute('y1', '0');
    line.setAttribute('x2', i * 10.9);
    line.setAttribute('y2', '109');
    line.setAttribute('stroke', '#f0f0f0');
    line.setAttribute('stroke-width', '0.3');
    strokeSvg.appendChild(line);

    const hline = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    hline.setAttribute('x1', '0');
    hline.setAttribute('y1', i * 10.9);
    hline.setAttribute('x2', '109');
    hline.setAttribute('y2', i * 10.9);
    hline.setAttribute('stroke', '#f0f0f0');
    hline.setAttribute('stroke-width', '0.3');
    strokeSvg.appendChild(hline);
  }

  // Kanji text
  const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  text.setAttribute('x', '54.5');
  text.setAttribute('y', '80');
  text.setAttribute('text-anchor', 'middle');
  text.setAttribute('font-size', '80');
  text.setAttribute('font-weight', 'bold');
  text.setAttribute('fill', '#2f8068');
  text.setAttribute('font-family', 'serif');
  text.textContent = state.currentKanji.kanji;
  strokeSvg.appendChild(text);
}

// Setup canvas tracking for tracing
function setupCanvasTracking() {
  canvasCtx = traceCanvas.getContext('2d');

  traceCanvas.addEventListener('mousedown', (e) => {
    if (!state.isTracing) return;
    isDrawing = true;
    const rect = traceCanvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    canvasCtx.beginPath();
    canvasCtx.moveTo(x, y);
  });

  traceCanvas.addEventListener('mousemove', (e) => {
    if (!isDrawing || !state.isTracing) return;
    const rect = traceCanvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    canvasCtx.lineTo(x, y);
    canvasCtx.stroke();
  });

  traceCanvas.addEventListener('mouseup', () => {
    isDrawing = false;
  });

  traceCanvas.addEventListener('mouseleave', () => {
    isDrawing = false;
  });

  // Touch support
  traceCanvas.addEventListener('touchstart', (e) => {
    if (!state.isTracing) return;
    isDrawing = true;
    const rect = traceCanvas.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    canvasCtx.beginPath();
    canvasCtx.moveTo(x, y);
  });

  traceCanvas.addEventListener('touchmove', (e) => {
    if (!isDrawing || !state.isTracing) return;
    e.preventDefault();
    const rect = traceCanvas.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    canvasCtx.lineTo(x, y);
    canvasCtx.stroke();
  });

  traceCanvas.addEventListener('touchend', () => {
    isDrawing = false;
  });
}

// Replay button
replayButton.addEventListener('click', () => {
  renderStrokeSvg();
  traceCanvas.style.display = 'none';
  state.isTracing = false;
  traceButton.textContent = 'なぞる';
});

// Trace button
traceButton.addEventListener('click', () => {
  if (!state.isTracing) {
    state.isTracing = true;
    traceCanvas.style.display = 'block';
    traceButton.textContent = 'クリア';

    // Setup canvas
    traceCanvas.width = traceCanvas.offsetWidth * 2;
    traceCanvas.height = traceCanvas.offsetHeight * 2;
    canvasCtx.clearRect(0, 0, traceCanvas.width, traceCanvas.height);
    canvasCtx.strokeStyle = '#2f8068';
    canvasCtx.lineWidth = 3;
    canvasCtx.lineCap = 'round';
    canvasCtx.lineJoin = 'round';
  } else {
    // Clear canvas
    canvasCtx.clearRect(0, 0, traceCanvas.width, traceCanvas.height);
  }
});

// Search input
function setupSearchInput() {
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim();

    if (query === '') {
      state.filteredKanji = getKanjiByGrade(state.currentGrade);
    } else {
      state.filteredKanji = searchKanji(query, state.currentGrade);
    }

    countText.textContent = `${state.filteredKanji.length}個`;
    renderKanjiGrid();

    if (state.filteredKanji.length > 0) {
      selectKanji(state.filteredKanji[0]);
    }
  });
}

// Generate quiz
function generateQuiz() {
  if (!state.currentKanji) return;

  const gradeKanji = getKanjiByGrade(state.currentGrade);
  const correct = state.currentKanji;

  // Get random wrong answers
  const wrongAnswers = gradeKanji
    .filter(k => k.kanji !== correct.kanji)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
    .map(k => k.kanji);

  state.quizOptions = [correct.kanji, ...wrongAnswers].sort(() => Math.random() - 0.5);
  state.quizCorrectAnswer = correct.kanji;

  // Get random reading
  const allReadings = [...correct.on, ...correct.kun.filter(k => k)];
  const randomReading = allReadings[Math.floor(Math.random() * allReadings.length)];

  quizQuestion.textContent = `「${randomReading}」と読む漢字は？`;

  // Render options
  quizOptions.innerHTML = '';
  state.quizOptions.forEach(kanji => {
    const button = document.createElement('button');
    button.className = 'quiz-option';
    button.textContent = kanji;
    button.type = 'button';
    button.addEventListener('click', () => checkQuizAnswer(kanji, button));
    quizOptions.appendChild(button);
  });

  // Reset feedback
  quizFeedback.classList.remove('show', 'correct', 'incorrect');
  quizFeedback.textContent = '';
}

// Check quiz answer
function checkQuizAnswer(selected, button) {
  const isCorrect = selected === state.quizCorrectAnswer;

  // Show feedback
  quizFeedback.classList.add('show');
  if (isCorrect) {
    quizFeedback.classList.add('correct');
    quizFeedback.textContent = '正解！';
    button.classList.add('correct');
  } else {
    quizFeedback.classList.add('incorrect');
    quizFeedback.textContent = `不正解。正解は「${state.quizCorrectAnswer}」です。`;
    button.classList.add('incorrect');

    // Find and highlight correct answer
    Array.from(quizOptions.children).forEach(btn => {
      if (btn.textContent === state.quizCorrectAnswer) {
        btn.classList.add('correct');
      }
    });
  }

  // Disable all buttons
  Array.from(quizOptions.children).forEach(btn => {
    btn.style.pointerEvents = 'none';
  });
}

// Next quiz button
nextQuizButton.addEventListener('click', () => {
  generateQuiz();
});

// Register service worker for offline support
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {
      // SW registration failed, but app still works
    });
  }
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}