import { defineStore } from 'pinia';

export const useCatalogStore = defineStore('catalogs', {
  state: () => ({
    catalogs: [],
    isFetched: false,
    isLoading: false,
    error: null,
  }),
  actions: {
    async fetchCatalogs() {
      if (this.isFetched || this.isLoading) return;

      this.isLoading = true;
      this.error = null;

      try {
        const cachedData = localStorage.getItem('catalogs');
        if (cachedData) {
          this.catalogs = JSON.parse(cachedData);
          this.isFetched = true;         
          return;
        }

        const response = await fetch("https://guiding-gentle-yak.ngrok-free.app/api/catalogs", {
          headers: {
            "ngrok-skip-browser-warning": "true",
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
    },
  },
});
