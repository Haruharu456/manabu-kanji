// Kanji Components - Reusable UI components

class KanjiCard {
  constructor(kanji, options = {}) {
    this.kanji = kanji;
    this.options = options;
    this.element = null;
  }

  render() {
    this.element = document.createElement('div');
    this.element.className = 'kanji-card';
    this.element.setAttribute('data-kanji-id', this.kanji.id);

    const isLearned = kanjiAPI.progressData?.learned?.includes(this.kanji.id);
    const isReviewed = kanjiAPI.progressData?.reviewed?.includes(this.kanji.id);
    const isMastered = kanjiAPI.progressData?.mastered?.includes(this.kanji.id);

    let statusClass = '';
    if (isMastered) statusClass = 'mastered';
    else if (isReviewed) statusClass = 'reviewed';
    else if (isLearned) statusClass = 'learned';

    this.element.innerHTML = `
      <div class="kanji-card-header ${statusClass}">
        <div class="kanji-display">${this.kanji.kanji}</div>
        <div class="kanji-grade">Grade ${this.kanji.grade}</div>
      </div>
      <div class="kanji-card-body">
        <div class="kanji-info">
          <div class="info-row"><span class="label">Strokes:</span><span class="value">${this.kanji.strokes}</span></div>
          <div class="info-row"><span class="label">Radical:</span><span class="value">${this.kanji.radical}</span></div>
          <div class="info-row"><span class="label">On:</span><span class="value">${this.kanji.onyomi.join('、')}</span></div>
          <div class="info-row"><span class="label">Kun:</span><span class="value">${this.kanji.kunyomi.join('、') || 'N/A'}</span></div>
          <div class="info-row"><span class="label">Meaning:</span><span class="value">${this.kanji.meaning}</span></div>
        </div>
        ${this.renderExamples()}
      </div>
      <div class="kanji-card-footer">${this.renderActions()}</div>
    `;

    return this.element;
  }

  renderExamples() {
    if (!this.kanji.examples || this.kanji.examples.length === 0) return '';
    const examplesHtml = this.kanji.examples.slice(0, 3).map(ex => `
      <div class="example-item">
        <span class="example-word">${ex.word}</span>
        <span class="example-reading">${ex.reading}</span>
        <span class="example-meaning">${ex.meaning}</span>
      </div>
    `).join('');
    return `<div class="examples-section"><h4>Examples:</h4>${examplesHtml}</div>`;
  }

  renderActions() {
    const isLearned = kanjiAPI.progressData?.learned?.includes(this.kanji.id);
    const isReviewed = kanjiAPI.progressData?.reviewed?.includes(this.kanji.id);
    const isMastered = kanjiAPI.progressData?.mastered?.includes(this.kanji.id);

    return `
      <button class="btn-small btn-learn" ${isLearned ? 'disabled' : ''}>✓ Learned</button>
      <button class="btn-small btn-review" ${isReviewed ? 'disabled' : ''}>✓ Reviewed</button>
      <button class="btn-small btn-master" ${isMastered ? 'disabled' : ''}>✓ Mastered</button>
    `;
  }

  addEventListeners() {
    if (!this.element) return;
    this.element.querySelector('.btn-learn')?.addEventListener('click', () => {
      kanjiAPI.markKanjiAsLearned(this.kanji.id);
      this.render();
      this.addEventListeners();
    });
    this.element.querySelector('.btn-review')?.addEventListener('click', () => {
      kanjiAPI.markKanjiAsReviewed(this.kanji.id);
      this.render();
      this.addEventListeners();
    });
    this.element.querySelector('.btn-master')?.addEventListener('click', () => {
      kanjiAPI.markKanjiAsMastered(this.kanji.id);
      this.render();
      this.addEventListeners();
    });
  }

  mount(selector) {
    const container = document.querySelector(selector);
    if (container) {
      container.appendChild(this.render());
      this.addEventListeners();
    }
    return this;
  }
}

class ProgressDashboard {
  constructor() {
    this.element = null;
  }

  render() {
    this.element = document.createElement('div');
    this.element.className = 'progress-dashboard';

    const stats = kanjiAPI.getProgressStats();
    const total = stats.total;
    const learnedPercent = total ? (stats.learned / total * 100).toFixed(1) : 0;
    const reviewedPercent = total ? (stats.reviewed / total * 100).toFixed(1) : 0;
    const masteredPercent = total ? (stats.mastered / total * 100).toFixed(1) : 0;

    this.element.innerHTML = `
      <div class="progress-header"><h2>Your Progress</h2></div>
      <div class="progress-stats">
        <div class="stat-card learned">
          <div class="stat-number">${stats.learned}</div>
          <div class="stat-label">Learned</div>
          <div class="stat-percent">${learnedPercent}%</div>
        </div>
        <div class="stat-card reviewed">
          <div class="stat-number">${stats.reviewed}</div>
          <div class="stat-label">Reviewed</div>
          <div class="stat-percent">${reviewedPercent}%</div>
        </div>
        <div class="stat-card mastered">
          <div class="stat-number">${stats.mastered}</div>
          <div class="stat-label">Mastered</div>
          <div class="stat-percent">${masteredPercent}%</div>
        </div>
      </div>
    `;

    return this.element;
  }

  mount(selector) {
    const container = document.querySelector(selector);
    if (container) {
      container.appendChild(this.render());
    }
    return this;
  }
}