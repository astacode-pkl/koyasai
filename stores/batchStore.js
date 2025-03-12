// stores/batchStore.js
import { defineStore } from 'pinia';

export const useBatchStore = defineStore('batch', {
  state: () => ({
    catalogs: [],
    clients: [],
    companyProfile: [],
    galleries: [],
    heroes: [],
    news: [],
    services: [],
  }),
  actions: {
    async fetchAllData() {
      try {
        // Cek cache untuk setiap data
        const cachedCatalogs = localStorage.getItem('catalogs');
        const cachedClients = localStorage.getItem('clients');
        const cachedCompanyProfile = localStorage.getItem('companyProfile');
        const cachedGalleries = localStorage.getItem('galleries');
        const cachedHeroes = localStorage.getItem('heroes');
        const cachedNews = localStorage.getItem('news');
        const cachedServices = localStorage.getItem('services');

        // Jika data ada di cache, gunakan data tersebut
        if (cachedCatalogs) {
          this.catalogs = JSON.parse(cachedCatalogs);
          console.log("Loaded catalogs from cache:", this.catalogs);
        }
        if (cachedClients) {
          this.clients = JSON.parse(cachedClients);
          console.log("Loaded clients from cache:", this.clients);
        }
        if (cachedCompanyProfile) {
          this.companyProfile = JSON.parse(cachedCompanyProfile);
          console.log("Loaded company profile from cache:", this.companyProfile);
        }
        if (cachedGalleries) {
          this.galleries = JSON.parse(cachedGalleries);
          console.log("Loaded galleries from cache:", this.galleries);
        }
        if (cachedHeroes) {
          this.heroes = JSON.parse(cachedHeroes);
          console.log("Loaded heroes from cache:", this.heroes);
        }
        if (cachedNews) {
          this.news = JSON.parse(cachedNews);
          console.log("Loaded news from cache:", this.news);
        }
        if (cachedServices) {
          this.services = JSON.parse(cachedServices);
          console.log("Loaded services from cache:", this.services);
        }

        // Lakukan permintaan API untuk data yang tidak ada di cache
        const [catalogsResponse, clientsResponse, companyProfileResponse, galleriesResponse, heroesResponse, newsResponse, servicesResponse] = await Promise.all([
          fetch("https://guiding-gentle-yak.ngrok-free.app/api/catalogs", {
            headers: {
              "ngrok-skip-browser-warning": "true",
            },
          }),
          fetch("https://guiding-gentle-yak.ngrok-free.app/api/clients", {
            headers: {
              "ngrok-skip-browser-warning": "true",
            },
          }),
          fetch("https://guiding-gentle-yak.ngrok-free.app/api/companyprofile", {
            headers: {
              "ngrok-skip-browser-warning": "true",
            },
          }),
          fetch("https://guiding-gentle-yak.ngrok-free.app/api/galleries", {
            headers: {
              "ngrok-skip-browser-warning": "true",
            },
          }),
          fetch("https://guiding-gentle-yak.ngrok-free.app/api/heroes", {
            headers: {
              "ngrok-skip-browser-warning": "true",
            },
          }),
          fetch("https://guiding-gentle-yak.ngrok-free.app/api/news", {
            headers: {
              "ngrok-skip-browser-warning": "true",
            },
          }),
          fetch("https://guiding-gentle-yak.ngrok-free.app/api/services", {
            headers: {
              "ngrok-skip-browser-warning": "true",
            },
          }),
        ]);

        const [catalogsData, clientsData, companyProfileData, galleriesData, heroesData, newsData, servicesData] = await Promise.all([
          catalogsResponse.json(),
          clientsResponse.json(),
          companyProfileResponse.json(),
          galleriesResponse.json(),
          heroesResponse.json(),
          newsResponse.json(),
          servicesResponse.json(),
        ]);

        // Simpan data ke state dan cache
        if (catalogsResponse.ok && catalogsData.status === 200) {
          this.catalogs = catalogsData.catalogs;
          localStorage.setItem('catalogs', JSON.stringify(catalogsData.catalogs));
        }
        if (clientsResponse.ok && clientsData.status === 200) {
          this.clients = clientsData.clients;
          localStorage.setItem('clients', JSON.stringify(clientsData.clients));
        }
        if (companyProfileResponse.ok && companyProfileData.status === 200) {
          this.companyProfile = companyProfileData.companyprofile;
          localStorage.setItem('companyProfile', JSON.stringify(companyProfileData.companyprofile));
        }
        if (galleriesResponse.ok && galleriesData.status === 200) {
          this.galleries = galleriesData.galleries;
          localStorage.setItem('galleries', JSON.stringify(galleriesData.galleries));
        }
        if (heroesResponse.ok && heroesData.status === 200) {
          this.heroes = heroesData.heroes;
          localStorage.setItem('heroes', JSON.stringify(heroesData.heroes));
        }
        if (newsResponse.ok && newsData.status === 200) {
          this.news = newsData.news;
          localStorage.setItem('news', JSON.stringify(newsData.news));
        }
        if (servicesResponse.ok && servicesData.status === 200) {
          this.services = servicesData.services;
          localStorage.setItem('services', JSON.stringify(servicesData.services));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
});