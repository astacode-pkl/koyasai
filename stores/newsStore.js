import { defineStore } from 'pinia';

export const useNewsStore = defineStore('news', {
  state: () => ({
    News: [],
    isFetched: false,
    isLoading: false,
    error: null,
  }),
  actions: {
    async fetchNews() {
      if (this.isFetched || this.isLoading) return;

      this.isLoading = true;
      this.error = null;

      try {
        const cachedData = localStorage.getItem('News');
        if (cachedData) {
          this.News = JSON.parse(cachedData);
          this.isFetched = true;          
          return;
        }

        const response = await fetch("https://guiding-gentle-yak.ngrok-free.app/api/news", {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        if (data.status === 200) {
          this.News = data.news;
          this.isFetched = true;
          localStorage.setItem('News', JSON.stringify(data.news));          
        } else {
          throw new Error(data.message || "Error fetching data");
        }
      } catch (error) {
        this.error = error.message;
        console.error("Error fetching News:", this.error);
      } finally {
        this.isLoading = false;
      }
    },

    resetNews() {
      this.News = [];
      this.isFetched = false;
      this.error = null;
      localStorage.removeItem('News');
    },
  },
});
