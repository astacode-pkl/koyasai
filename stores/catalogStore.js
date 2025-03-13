import { defineStore } from 'pinia';

export const useCatalogStore = defineStore('catalogs', {
  state: () => ({
    catalogs: [],
    isFetched: false,
    isLoading: false,
    error: null,
    searchQuery: '',
  }),
  actions: {
    async fetchCatalogs(search = '') {
      this.isLoading = true;
      this.error = null;
      
      try {
        // Only use cache for non-search requests
        if (!search && !this.searchQuery) {
          const cachedData = localStorage.getItem('catalogs');
          if (cachedData) {
            this.catalogs = JSON.parse(cachedData);
            this.isFetched = true;
            this.isLoading = false;
            return;
          }
        }
        
        // Build the URL with search parameter if provided
        let url = "https://guiding-gentle-yak.ngrok-free.app/api/catalogs";
        if (search || this.searchQuery) {
          const queryParam = search || this.searchQuery;
          url += `?search=${encodeURIComponent(queryParam)}`;
        }
        
        const response = await fetch(url, {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        if (data.status === 200) {
          this.catalogs = data.catalogs;
          this.isFetched = true;
          
          // Only cache non-search results
          if (!search && !this.searchQuery) {
            localStorage.setItem('catalogs', JSON.stringify(data.catalogs));
          }
        } else {
          throw new Error(data.message || "Error fetching data");
        }
      } catch (error) {
        this.error = error.message;
        console.error("Error fetching catalogs:", this.error);
      } finally {
        this.isLoading = false;
      }
    },
    
    setSearchQuery(query) {
      this.searchQuery = query;
      return this.fetchCatalogs(query);
    },
    
    resetCatalogs() {
      this.catalogs = [];
      this.isFetched = false;
      this.error = null;
      this.searchQuery = '';
      localStorage.removeItem('catalogs');
    },
  },
});