import { defineStore } from "pinia";

export const useServiceStore = defineStore("service", {
  state: () => ({
    Services: [], 
  }),
  actions: {
    async fetchService() {
      try {
        const response = await fetch(
          "https://guiding-gentle-yak.ngrok-free.app/api/services",
          {
            headers: {
              "ngrok-skip-browser-warning": "true",
            },
          }
        );

        const data = await response.json();

        if (response.ok && data.status === 200) {
          this.Services = data.services; 
          console.log("Data Galleries:", data.services);
        } else {
          console.error("Error fetching:", data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
});