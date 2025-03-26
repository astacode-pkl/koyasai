<template>
  <!-- Title -->
  <div
    class="h-[30vh] w-full relative mb-10 shadow-md flex items-center justify-center mt-16"
  >
    <div>
      <div v-if="loading">
        <div
          v-for="n in skeletonCount"
          :key="n"
          class="bg-gray-500 border-2 border-gray-100 rounded-md mb-4 p-4 flex items-center"
        >
          <div class="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
          <div class="flex-1">
            <div class="w-3/4 h-4 bg-gray-300 rounded-md mb-2"></div>
            <div class="w-1/2 h-3 bg-gray-300 rounded-md"></div>
          </div>
        </div>
      </div>

      <div v-else>
        <img
          src="assets/img/catalog-bg.jpg"
          alt="foto-persyaratan1"
          class="w-full h-full object-cover absolute inset-0"
        />
        <div class="absolute inset-0 bg-black opacity-60" />
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2"
        >
          <h1 class="text-white text-4xl font-semibold z-10 text-center">
            Catalog
          </h1>
          <h4
            class="text-white text-base sm:text-lg font-sans z-10 text-center"
          >
            <nuxt-link to="/" class="text-white hover:text-yellow-100"
              >Home</nuxt-link
            >
            >
            <nuxt-link to="/catalog" class="text-orange-400">Catalog</nuxt-link>
          </h4>
        </div>
      </div>
    </div>
  </div>
  <!-- End Title -->
  <div class="flex justify-between items-center px-4 md:px-14">
    <div class="text-orange-400 text-2xl md:text-3xl font-sans">
      Fresh Fruits and Vegetables
      <div class="mt-5">
        <hr class="border-t border-orange-500 w-24 mx-auto sm:mx-0" />
      </div>
    </div>
    <div class="w-96 relative">
      <div
        class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5 text-gray-600"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
      <input
        v-model="searchQuery"
        type="search"
        id="input-label-with-helper-text"
        class="py-3 ps-10 pe-4 block w-full border border-orange-300 rounded-lg text-sm focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none outline-none"
        placeholder="what you need?"
        aria-describedby="hs-input-helper-text"
      />
    </div>
  </div>

  <Catalog :preview-mode="false" :filtered-data="filteredCatalogs" />
  
</template>
<script setup>
useHead({
  title: "Koyasai - Catalog",
  meta: [
    {
      name: "description",
      content:
        "Koyasai menyediakan berbagai sayur dan buah segar berkualitas tinggi. Temukan pilihan terbaik dari produk lokal dan organik, serta berbagai kebutuhan sehari-hari lainnya.",
    },
    {
      name: "keywords",
      content:
        "sayur segar, buah segar, belanja online sayur, belanja online buah, produk organik, toko sayur online, Koyasai, sayuran lokal, buah-buahan, kebutuhan sehari-hari, pengiriman sayur, pengiriman buah",
    },
  ],
});

import { ref, computed, onMounted } from "vue";
import { useCatalogStore } from "@/stores/catalogStore";

const catalogStore = useCatalogStore();

const searchQuery = ref("");
const loading = ref(true);

onMounted(async () => {
  await catalogStore.fetchCatalogs();
  loading.value = false;
});

const filteredCatalogs = computed(() => {
  return catalogStore.catalogs.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
</script>
