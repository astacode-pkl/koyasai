import { defineStore } from 'pinia';

export const useCatalogStore = defineStore('catalogs', {
  state: () => ({
    catalogs: [],
    isFetched: false,
    isLoading: false,
    error: null,
    timestamp: null,
  }),
  actions: {
    async fetchCatalogs() {
      if (this.isFetched || this.isLoading) return;

      this.isLoading = true;
      this.error = null;

      try {
        const cachedData = localStorage.getItem('catalogs');
        const cachedTimestamp = localStorage.getItem('catalogsTimestamp');
        const cacheDuration = 1 * 60 * 1000; // 1 menit

        if (cachedData && cachedTimestamp && (Date.now() - cachedTimestamp < cacheDuration)) {
          this.catalogs = JSON.parse(cachedData);
          this.isFetched = true;         
          return;
        }

        const config = useRuntimeConfig();
        const apiBaseUrl = config.public.apiBaseUrl;
        
        const response = await fetch(`${apiBaseUrl}/catalogs`, {
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
          this.catalogs = data.catalogs;
          this.isFetched = true;
          localStorage.setItem('catalogs', JSON.stringify(data.catalogs));
          localStorage.setItem('catalogsTimestamp', Date.now());          
        } else {
          throw new Error(data.message || "Error fetching data");
        }
      } catch (error) {
        this.error = error.message;
        console.error("Error fetching catalogs:", this.error);
      } finally {
        this.isLoading = false;
      }
    },

    resetcatalogs() {
      this.catalogs = [];
      this.isFetched = false;
      this.error = null;
      localStorage.removeItem('catalogs');
      localStorage.removeItem('catalogsTimestamp');
    },
  },
});