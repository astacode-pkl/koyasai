import { defineStore } from "pinia";

export const useComprofStore = defineStore("companyprofile", {
  state: () => ({
    companyProfile: [],
    isFetched: false,
    isLoading: false,
    error: null,
    timestamp: null,
  }),
  actions: {
    async fetchComprof() {
      if (this.isFetched || this.isLoading) return;

      this.isLoading = true;
      this.error = null;

      try {
        const cachedData = localStorage.getItem("companyProfile");
        const cachedTimestamp = localStorage.getItem("companyProfileTimestamp");
        const cacheDuration = 1 * 60 * 1000; 

        if (cachedData && cachedTimestamp && (Date.now() - cachedTimestamp < cacheDuration)) {
          this.companyProfile = JSON.parse(cachedData);
          this.isFetched = true;         
          return;
        }

        const config = useRuntimeConfig();
        const apiBaseUrl = config.public.apiBaseUrl;
        
        const response = await fetch(`${apiBaseUrl}/companyprofile`, {
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
          this.companyProfile = data.companyprofile;
          this.isFetched = true;
          localStorage.setItem("companyProfile", JSON.stringify(data.companyprofile));
          localStorage.setItem("companyProfileTimestamp", Date.now());          
        } else {
          throw new Error(data.message || "Error fetching data");
        }
      } catch (error) {
        this.error = error.message;
        console.error("Error fetching Company Profile:", this.error);
      } finally {
        this.isLoading = false;
      }
    },

    resetComprof() {
      this.companyProfile = [];
      this.isFetched = false;
      this.error = null;
      localStorage.removeItem("companyProfile");
      localStorage.removeItem("companyProfileTimestamp");
    },
  },
});