import { defineStore } from 'pinia';

export const useHeroStore = defineStore('hero', {
  state: () => ({
    Heroes: [],
  }),
  actions: {
    async fetchHero() {
      try {
        const response = await fetch("https://guiding-gentle-yak.ngrok-free.app/api/heroes", {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        });

        const data = await response.json();

        if (response.ok && data.status === 200) {
          this.Heroes = data.heroes;
          console.log("Data Catalog:", data.heroes);
        } else {
          console.error("Error fetching:", data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
});