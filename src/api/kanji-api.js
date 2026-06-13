// Kanji API - Server-side endpoints for kanji data management

class KanjiAPI {
  constructor() {
    this.baseUrl = '/api/kanji';
    this.progressData = this.loadProgress();
  }

  async getKanjiByGrade(grade) {
    try {
      const response = await fetch(`${this.baseUrl}/grade/${grade}`);
      if (!response.ok) throw new Error('Failed to fetch kanji');
      return await response.json();
    } catch (error) {
      console.error('Error fetching kanji by grade:', error);
      return getKanjiByGrade(grade);
    }
  }

  async getAllGrades() {
    return getAllGrades();
  }

  async searchKanji(query, grade = null) {
    try {
      const params = new URLSearchParams({ q: query });
      if (grade) params.append('grade', grade);
      const response = await fetch(`${this.baseUrl}/search?${params}`);
      if (!response.ok) throw new Error('Search failed');
      return await response.json();
    } catch (error) {
      console.error('Error searching kanji:', error);
      return searchKanji(query, grade);
    }
  }

  markKanjiAsLearned(kanjiId) {
    if (!this.progressData) this.progressData = {};
    if (!this.progressData.learned) this.progressData.learned = [];
    if (!this.progressData.learned.includes(kanjiId)) {
      this.progressData.learned.push(kanjiId);
      this.saveProgress();
    }
  }

  markKanjiAsReviewed(kanjiId) {
    if (!this.progressData) this.progressData = {};
    if (!this.progressData.reviewed) this.progressData.reviewed = [];
    if (!this.progressData.reviewed.includes(kanjiId)) {
      this.progressData.reviewed.push(kanjiId);
      this.saveProgress();
    }
  }

  markKanjiAsMastered(kanjiId) {
    if (!this.progressData) this.progressData = {};
    if (!this.progressData.mastered) this.progressData.mastered = [];
    if (!this.progressData.mastered.includes(kanjiId)) {
      this.progressData.mastered.push(kanjiId);
      this.saveProgress();
    }
  }

  getProgressStats() {
    if (!this.progressData) return { learned: 0, reviewed: 0, mastered: 0, total: 0 };
    const stats = getKanjiStats();
    return {
      learned: (this.progressData.learned || []).length,
      reviewed: (this.progressData.reviewed || []).length,
      mastered: (this.progressData.mastered || []).length,
      total: stats.totalKanji
    };
  }

  getProgress() {
    return this.progressData;
  }

  saveProgress() {
    localStorage.setItem('kanjiProgress', JSON.stringify(this.progressData));
  }

  loadProgress() {
    const data = localStorage.getItem('kanjiProgress');
    return data ? JSON.parse(data) : null;
  }

  clearProgress() {
    this.progressData = { learned: [], reviewed: [], mastered: [] };
    this.saveProgress();
  }

  exportProgress() {
    return JSON.stringify(this.progressData, null, 2);
  }

  importProgress(jsonData) {
    try {
      this.progressData = JSON.parse(jsonData);
      this.saveProgress();
      return true;
    } catch (error) {
      console.error('Failed to import progress:', error);
      return false;
    }
  }
}

const kanjiAPI = new KanjiAPI();