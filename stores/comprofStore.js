import { defineStore } from "pinia";

export const useComprofStore = defineStore("companyprofile", {
  state: () => ({
    companyProfile: [], 
  }),
  actions: {
    async fetchComprof() {
      try {
        const response = await fetch(
          "https://guiding-gentle-yak.ngrok-free.app/api/companyprofile",
          {
            headers: {
              "ngrok-skip-browser-warning": "true",
            },
          }
        );

        const data = await response.json();

        if (response.ok && data.status === 200) {
          this.companyProfile = data.companyprofile; 
          console.log("Data Galleries:", data.companyprofile);
        } else {
          console.error("Error fetching:", data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
});