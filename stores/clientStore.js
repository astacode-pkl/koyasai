import { defineStore } from 'pinia';

export const useClientStore = defineStore('client', {
  state: () => ({
    Clients: [],
    isFetched: false,
    isLoading: false,
    error: null,
  }),
  actions: {
    async fetchClient() {
      if (this.isFetched || this.isLoading) return;

      this.isLoading = true;
      this.error = null;

      try {
        const cachedData = localStorage.getItem('Clients');
        if (cachedData) {
          this.Clients = JSON.parse(cachedData);
          this.isFetched = true;          
          return;
        }
        
        const config = useRuntimeConfig();
        const apiBaseUrl = config.public.apiBaseUrl;
        
        const response = await fetch(`${apiBaseUrl}/clients`, {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        if (data.status === 200) {
          this.Clients = data.clients;
          this.isFetched = true;
          localStorage.setItem('Clients', JSON.stringify(data.clients));          
        } else {
          throw new Error(data.message || "Error fetching data");
        }
      } catch (error) {
        this.error = error.message;
        console.error("Error fetching Clients:", this.error);
      } finally {
        this.isLoading = false;
      }
    },

    resetClients() {
      this.Clients = [];
      this.isFetched = false;
      this.error = null;
      localStorage.removeItem('Clients');
    },
  },
});
