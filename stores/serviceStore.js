import { defineStore } from "pinia";

export const useServiceStore = defineStore("service", {
  state: () => ({
    Services: [],
    isFetched: false,
    isLoading: false,
    error: null,
  }),
  actions: {
    async fetchService() {
      if (this.isFetched || this.isLoading) return;

      this.isLoading = true;
      this.error = null;

      try {
        const cachedData = localStorage.getItem("Services");
        if (cachedData) {
          this.Services = JSON.parse(cachedData);
          this.isFetched = true;          
          return;
        }

        const response = await fetch(
          "https://guiding-gentle-yak.ngrok-free.app/api/services",
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
          this.Services = data.services;
          this.isFetched = true;
          localStorage.setItem("Services", JSON.stringify(data.services));          
        } else {
          throw new Error(data.message || "Error fetching data");
        }
      } catch (error) {
        this.error = error.message;
        console.error("Error fetching Services:", this.error);
      } finally {
        this.isLoading = false;
      }
    },

    resetServices() {
      this.Services = [];
      this.isFetched = false;
      this.error = null;
      localStorage.removeItem("Services");
    },
  },
});
