import { defineStore } from 'pinia';

export const useCatalogStore = defineStore('catalog', {
  state: () => ({
    catalogs: [],
  }),
  actions: {
    async fetchCatalogs() {
      try {
        const response = await fetch("https://guiding-gentle-yak.ngrok-free.app/api/catalogs", {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        });

        const data = await response.json();

        if (response.ok && data.status === 200) {
          this.catalogs = data.catalogs;
          console.log("Data Catalog:", data.catalogs);
        } else {
          console.error("Error fetching:", data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
});