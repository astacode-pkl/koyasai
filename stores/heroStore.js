import { defineStore } from 'pinia';

export const useHeroStore = defineStore('hero', {
  state: () => ({
    Heroes: [],
    isFetched: false,
    isLoading: false,
    error: null,
    timestamp: null,
  }),
  actions: {
    async fetchHero() {
      if (this.isFetched || this.isLoading) return;

      this.isLoading = true;
      this.error = null;

      try {
        const cachedData = localStorage.getItem('Heroes');
        const cachedTimestamp = localStorage.getItem('HeroesTimestamp');
        const cacheDuration = 5 * 60 * 1000; // 5 menit

        if (cachedData && cachedTimestamp && (Date.now() - cachedTimestamp < cacheDuration)) {
          this.Heroes = JSON.parse(cachedData);
          this.isFetched = true;         
          return;
        }
        
        const config = useRuntimeConfig();
        const apiBaseUrl = config.public.apiBaseUrl;
        
        const response = await fetch(`${apiBaseUrl}/heroes`, {
          headers: {
            "ngrok-skip-browser-warning": "true",
            "Cache-Control": "no-cache",
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
          localStorage.setItem('HeroesTimestamp', Date.now());          
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
      localStorage.removeItem('HeroesTimestamp');
    },
  },
});