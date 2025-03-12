import { defineStore } from 'pinia';

export const useClientStore = defineStore('client', {
  state: () => ({
    Clients: [],
  }),
  actions: {
    async fetchClient() {
      try {
        const response = await fetch("https://guiding-gentle-yak.ngrok-free.app/api/clients", {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        });

        const data = await response.json();

        if (response.ok && data.status === 200) {
          this.Clients = data.clients;
          console.log("Data Catalog:", data.clients);
        } else {
          console.error("Error fetching:", data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
});