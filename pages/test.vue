<!-- <template>
  <div class="max-w-7xl mx-auto px-4 py-16">
    <h2 class="text-orange-500 text-2xl font-semibold mb-6 text-center">
      Company Profile
    </h2>
    <div v-if="companyProfile.length > 0" class="border rounded-lg p-4 shadow-lg">
      <img :src="companyProfile[0].logo_mark" alt="Company Logo" class="w-32 h-32 object-cover mb-4" />
      <img :src="companyProfile[0].logo_type" alt="Company Logo" class="w-32 h-32 object-cover mb-4" />
      <h3 class="text-lg font-semibold">{{ companyProfile[0].name }}</h3>
      <p class="text-sm">{{ companyProfile[0].address }}</p>
      <p class="mt-2">{{ companyProfile[0].history }}</p>
      <div class="mt-4">
        <a :href="companyProfile[0].instagram" target="_blank" class="text-blue-500">Instagram</a>
        <a :href="companyProfile[0].facebook" target="_blank" class="text-blue-500 ml-4">Facebook</a>
        <a :href="companyProfile[0].youtube" target="_blank" class="text-blue-500 ml-4">YouTube</a>
        <a :href="companyProfile[0].whatsapp" target="_blank" class="text-blue-500 ml-4">WhatsApp</a>
      </div>
      <iframe
        :src="companyProfile[0].map"
        width="600"
        height="450"
        class="mt-4"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  </div>
    <Service />
  <div class="max-w-7xl mx-auto px-4 py-16">
    <h2 class="text-orange-500 text-2xl font-semibold mb-6 text-center">
      Galleries
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div
        v-for="(gallery, index) in Galleries"
        :key="gallery.id"
        class="border rounded-lg overflow-hidden shadow-lg"
      >
        <img :src="gallery.image" alt="Gallery Image" class="w-full h-48 object-cover" />
        <div class="p-4">
          <h3 class="text-lg font-semibold">{{ gallery.title }}</h3>
        </div>
      </div>
    </div>
  </div>
  <div class="max-w-7xl mx-auto px-4 py-16">
    <h2 class="text-orange-500 text-2xl font-semibold mb-6 text-center">
      Catalogs
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div
        v-for="(catalog, index) in Catalogs"
        :key="catalog.id"
        class="border rounded-lg overflow-hidden shadow-lg"
      >
        <img :src="catalog.image" alt="Catalog Image" class="w-full h-48 object-cover" />
        <div class="p-4">
          <h3 class="text-lg font-semibold">{{ catalog.name }}</h3>
          <p class="text-sm">{{ catalog.description }}</p>
          <p class="text-lg font-bold">Price: {{ catalog.price }} IDR</p>
        </div>
      </div>
    </div>
  </div>
  <div class="max-w-7xl mx-auto px-4 py-16">
    <h2 class="text-orange-500 text-2xl font-semibold mb-6 text-center">
      Clients
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div
        v-for="(client, index) in Clients"
        :key="client.id"
        class="border rounded-lg overflow-hidden shadow-lg"
      >
        <img :src="client.image" alt="Client Image" class="w-full h-48 object-cover" />
      </div>
    </div>
  </div>
  <div class="max-w-7xl mx-auto px-4 py-16">
    <h2 class="text-orange-500 text-2xl font-semibold mb-6 text-center">
      News
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div
        v-for="(newsItem, index) in News"
        :key="newsItem.id"
        class="border rounded-lg overflow-hidden shadow-lg"
      >
        <img :src="newsItem.image" alt="News Image" class="w-full h-48 object-cover" />
        <div class="p-4">
          <h3 class="text-lg font-semibold">{{ newsItem.title }}</h3>
          <p class="text-sm">{{ newsItem.description }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="max-w-7xl mx-auto px-4 py-16">
    <h2 class="text-orange-500 text-2xl font-semibold mb-6 text-center">
      Heroes
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div
        v-for="(hero, index) in Heroes"
        :key="hero.id"
        class="border rounded-lg overflow-hidden shadow-lg"
      >
        <img :src="hero.image" alt="Hero Image" class="w-full h-48 object-cover" />
      </div>
    </div>
  </div>
<h1>test api</h1>
</template>

<script setup>
const companyProfile = ref([]);

const getDataComprof = async () => {
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
      companyProfile.value = data.companyprofile; 
      console.log("Data Company Profile:", data.companyprofile);
    } else {
      console.error("Error fetching:", data);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

onMounted(() => {
  getDataComprof();
});

const Galleries = ref([]);

const getDataGallerie = async () => {
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
      Galleries.value = data.galleries; 
      console.log("Data Galleries:", data.galleries);
    } else {
      console.error("Error fetching:", data);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

onMounted(() => {
  getDataGallerie();
});

const Catalogs = ref([]);

const getDataCatalog = async () => {
  try {
    const response = await fetch(
      "https://guiding-gentle-yak.ngrok-free.app/api/catalogs",
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    );

    const data = await response.json();

    if (response.ok && data.status === 200) { 
      Catalogs.value = data.catalogs;
      console.log("Data Catalog:", data.catalogs);
    } else {
      console.error("Error fetching:", data);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

onMounted(() => {
  getDataCatalog();
});

const Clients = ref([]);

const getDataClients = async () => {
  try {
    const response = await fetch(
      "https://guiding-gentle-yak.ngrok-free.app/api/clients",
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    );

    const data = await response.json();

    if (response.ok && data.status === 200) { 
      Clients.value = data.clients; 
      console.log("Data Clients:", data.clients);
    } else {
      console.error("Error fetching:", data);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

onMounted(() => {
  getDataClients();
});


const News = ref([]);

const getDataNews = async () => {
  try {
    const response = await fetch(
      "https://guiding-gentle-yak.ngrok-free.app/api/news",
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    );

    const data = await response.json();

    if (response.ok && data.status === 200) { 
      News.value = data.news; 
      console.log("Data News:", data.news);
    } else {
      console.error("Error fetching:", data);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

onMounted(() => {
  getDataNews();
});


const Heroes = ref([]);

const getDataHeroes = async () => {
  try {
    const response = await fetch(
      "https://guiding-gentle-yak.ngrok-free.app/api/heroes",
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    );

    const data = await response.json();

    if (response.ok && data.status === 200) { 
      Heroes.value = data.heroes;
      console.log("Data Heroes:", data.heroes);
    } else {
      console.error("Error fetching:", data);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

onMounted(() => {
  getDataHeroes();
});
</script> -->
<template>
  <div class="mt-80 pt-40">
    <h1>Data Overview</h1>
    
    <h2>Catalogs</h2>
    <ul>
      <li v-for="(catalog, index) in catalogs" :key="index">{{ catalog.name }}</li>
    </ul>

    <h2>Clients</h2>
    <ul>
      <li v-for="(client, index) in clients" :key="index">{{ client.image }}</li>
    </ul>

    <h2>Company Profile</h2>
    <div v-if="companyProfile.length">
      <h3>{{ companyProfile[0].name }}</h3>      
    </div>

    <h2>Galleries</h2>
    <ul>
      <li v-for="(gallery, index) in galleries" :key="index">{{ gallery.title }}</li>
    </ul>

    <h2>Heroes</h2>
    <ul>
      <li v-for="(hero, index) in heroes" :key="index">{{ hero.image }}</li>
    </ul>

    <h2>News</h2>
    <ul>
      <li v-for="(newsItem, index) in news" :key="index">{{ newsItem.title }}</li>
    </ul>

    <h2>Services</h2>
    <ul>
      <li v-for="(service, index) in services" :key="index">{{ service.title }}</li>
    </ul>
  </div>
</template>

<script setup>
import { useBatchStore } from '@/stores/batchStore';

const batchStore = useBatchStore();

onMounted(() => {
  batchStore.fetchAllData();
});

const catalogs = computed(() => batchStore.catalogs);
const clients = computed(() => batchStore.clients);
const companyProfile = computed(() => batchStore.companyProfile);
const galleries = computed(() => batchStore.galleries);
const heroes = computed(() => batchStore.heroes);
const news = computed(() => batchStore.news);
const services = computed(() => batchStore.services);
</script>

<style scoped>
/* Tambahkan gaya CSS sesuai kebutuhan */
</style>