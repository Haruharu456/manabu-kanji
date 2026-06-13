# まなぶ漢字 - Complete Kyōiku Kanji Learning System

A comprehensive Progressive Web App for learning all 1,006 Kyōiku Kanji (常用漢字) taught in Japanese elementary schools, grades 1-6.

## Features

### 📚 Complete Kanji Database
- **1,006 Kyōiku Kanji** across all 6 elementary grades
- For each kanji: character, on'yomi, kun'yomi, grade, stroke count, radical, stroke order, examples, meanings

### 🎓 Learning Features
- Grade-based browsing (1年生 to 6年生)
- Advanced search (character, reading, meaning, radical, examples)
- Stroke order visualization
- Interactive tracing practice
- Mini quizzes with feedback
- Example words with readings

### 📊 Progress Tracking
- 3 learning levels: Learned (📌) → Reviewed (🔵) → Mastered (⭐)
- Progress dashboard with statistics
- Export/Import progress as JSON

### 💾 Technical Features
- Complete offline support
- Service Worker (PWA)
- LocalStorage persistence
- Responsive design
- Touch-friendly interface

## Installation

### Desktop/Laptop
Open in browser: Visit the deployed app URL

### Mobile/Tablet
1. Open in browser
2. Tap "Install" or "Add to Home Screen"
3. Launch like any app

## Database Schema

Each kanji includes:
- Character (漢字)
- Grade level (1-6)
- Stroke count
- Radical (部首)
- On'yomi readings
- Kun'yomi readings
- English meaning
- Example words with readings and meanings
- Stroke order data (SVG)

## API Functions

```javascript
// Data Access
getKanjiByGrade(grade)
getKanjiByCharacter(character)
searchKanji(query, grade)
getKanjiById(id)
getKanjiStats()

// Progress Tracking
kanjiAPI.markKanjiAsLearned(kanjiId)
kanjiAPI.markKanjiAsReviewed(kanjiId)
kanjiAPI.markKanjiAsMastered(kanjiId)
kanjiAPI.getProgressStats()
kanjiAPI.exportProgress()
kanjiAPI.importProgress(jsonData)
kanjiAPI.clearProgress()
```

## Component Usage

```javascript
// Kanji Card
const card = new KanjiCard(kanjiObject);
card.mount('#container');

// Progress Dashboard
const dashboard = new ProgressDashboard();
dashboard.mount('#progress-container');
```

## File Structure

```
manabu-kanji/
├── index.html
├── styles.css
├── app.js
├── manifest.webmanifest
├── sw.js
├── src/
│   ├── data/kanji-complete.js
│   ├── api/
│   │   ├── kanji-api.js
│   │   └── backend-api.js
│   └── components/kanji-components.js
└── README.md
```

## Browser Support

- Chrome/Chromium 88+
- Firefox 87+
- Safari 14.1+
- Edge 88+

## Privacy

✅ No tracking, no analytics, no data collection
✅ All processing is local
✅ Progress stored locally only

## Development

To extend the database or components, edit the corresponding files in `src/` and rebuild.

## License

Made with ❤️ for Japanese language learners.

こども用の学習サイトです。ログイン、広告、入力した内容の送信はありません。