import { defineStore } from "pinia";

export const useGalleryStore = defineStore("gallery", {
  state: () => ({
    Galleries: [], // Pastikan penamaan konsisten
  }),
  actions: {
    async fetchGalleries() {
      try {
        const response = await fetch(
          "https://guiding-gentle-yak.ngrok-free.app/api/galleries",
          {
            headers: {
              "ngrok-skip-browser-warning": "true",
            },
          }
        );

        const data = await response.json();

        if (response.ok && data.status === 200) {
          this.Galleries = data.galleries; // Gunakan this.Galleries
          console.log("Data Galleries:", data.galleries);
        } else {
          console.error("Error fetching:", data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
});