import { defineStore } from 'pinia';

export const useNewsStore = defineStore('news', {
  state: () => ({
    News: [],
  }),
  actions: {
    async fetchNews() {
      try {
        const response = await fetch("https://guiding-gentle-yak.ngrok-free.app/api/news", {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        });

        const data = await response.json();

        if (response.ok && data.status === 200) {
          this.News = data.news;
          console.log("Data Catalog:", data.news);
        } else {
          console.error("Error fetching:", data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
});