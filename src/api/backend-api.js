// Backend API integration

class KanjiAPIClient {
  constructor(baseUrl = '/api/kanji') {
    this.baseUrl = baseUrl;
    this.cache = new Map();
  }

  async fetchWithCache(url) {
    if (this.cache.has(url)) {
      return this.cache.get(url);
    }
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      this.cache.set(url, data);
      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  async getGrade(grade) {
    return this.fetchWithCache(`${this.baseUrl}/grade/${grade}`);
  }

  async search(query, grade = null) {
    let url = `${this.baseUrl}/search?q=${encodeURIComponent(query)}`;
    if (grade) url += `&grade=${grade}`;
    return this.fetchWithCache(url);
  }

  async get(id) {
    return this.fetchWithCache(`${this.baseUrl}/${id}`);
  }

  async getStats() {
    return this.fetchWithCache(`${this.baseUrl}/../stats`);
  }

  clearCache() {
    this.cache.clear();
  }
}

const apiClient = new KanjiAPIClient();