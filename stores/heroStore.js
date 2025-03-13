import { defineStore } from 'pinia';

export const useHeroStore = defineStore('hero', {
  state: () => ({
    Heroes: [],
    isFetched: false,
    isLoading: false,
    error: null,
  }),
  actions: {
    async fetchHero() {
      if (this.isFetched || this.isLoading) return;

      this.isLoading = true;
      this.error = null;

      try {
        const cachedData = localStorage.getItem('Heroes');
        if (cachedData) {
          this.Heroes = JSON.parse(cachedData);
          this.isFetched = true;          
          return;
        }

        
        const config = useRuntimeConfig();
        const apiBaseUrl = config.public.apiBaseUrl;        
      

        const response = await fetch(`${apiBaseUrl}/heroes`, {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        if (data.status === 200) {
          this.Heroes = data.heroes;
          this.isFetched = true;
          localStorage.setItem('Heroes', JSON.stringify(data.heroes));          
        } else {
          throw new Error(data.message || "Error fetching data");
        }
      } catch (error) {
        this.error = error.message;
        console.error("Error fetching Heroes:", this.error);
      } finally {
        this.isLoading = false;
      }
    },

    resetHeroes() {
      this.Heroes = [];
      this.isFetched = false;
      this.error = null;
      localStorage.removeItem('Heroes');
    },
  },
});
