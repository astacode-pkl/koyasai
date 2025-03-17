import { defineStore } from 'pinia';

export const useClientStore = defineStore('client', {
  state: () => ({
    Clients: [],
    isFetched: false,
    isLoading: false,
    error: null,
    timestamp: null,
  }),
  actions: {
    async fetchClient() {
      if (this.isFetched || this.isLoading) return;

      this.isLoading = true;
      this.error = null;

      try {
        const cachedData = localStorage.getItem('Clients');
        const cachedTimestamp = localStorage.getItem('ClientsTimestamp');
        const cacheDuration = 1 * 60 * 1000;

        if (cachedData && cachedTimestamp && (Date.now() - cachedTimestamp < cacheDuration)) {
          this.Clients = JSON.parse(cachedData);
          this.isFetched = true;         
          return;
        }

        const config = useRuntimeConfig();
        const apiBaseUrl = config.public.apiBaseUrl;
        
        const response = await fetch(`${apiBaseUrl}/clients`, {
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
          this.Clients = data.clients;
          this.isFetched = true;
          localStorage.setItem('Clients', JSON.stringify(data.clients));
          localStorage.setItem('ClientsTimestamp', Date.now());          
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
      localStorage.removeItem('ClientsTimestamp');
    },
  },
});