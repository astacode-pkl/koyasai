import { defineStore } from "pinia";

export const useGalleryStore = defineStore("gallery", {
  state: () => ({
    Galleries: [],
    isFetched: false,
    isLoading: false,
    error: null,
  }),
  actions: {
    async fetchGalleries() {
      if (this.isFetched || this.isLoading) return;

      this.isLoading = true;
      this.error = null;

      try {
        const cachedData = localStorage.getItem("Galleries");
        if (cachedData) {
          this.Galleries = JSON.parse(cachedData);
          this.isFetched = true;          
          return;
        }

        const response = await fetch(
          "https://guiding-gentle-yak.ngrok-free.app/api/galleries",
          {
            headers: {
              "ngrok-skip-browser-warning": "true",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        if (data.status === 200) {
          this.Galleries = data.galleries;
          this.isFetched = true;
          localStorage.setItem("Galleries", JSON.stringify(data.galleries));          
        } else {
          throw new Error(data.message || "Error fetching data");
        }
      } catch (error) {
        this.error = error.message;
        console.error("Error fetching Galleries:", this.error);
      } finally {
        this.isLoading = false;
      }
    },

    resetGalleries() {
      this.Galleries = [];
      this.isFetched = false;
      this.error = null;
      localStorage.removeItem("Galleries");
    },
  },
});
