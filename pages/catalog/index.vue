<script setup>
import { ref, onMounted } from 'vue';
import { useCatalogStore } from '@/stores/catalogStore';

useHead({
    title: "Catalog",
    meta: [
        {
            name: "description",
            content: "Catalog Page",
        },
    ],
});

const loading = ref(true);
const searchQuery = ref('');
const catalogStore = useCatalogStore();
const skeletonCount = 6;

onMounted(() => {
    setTimeout(() => {
        loading.value = false;
    }, 2000);
});

const handleSearch = () => {
    catalogStore.setSearchQuery(searchQuery.value);
};

// Debounce function for search input
let debounceTimeout;
const debounceSearch = (e) => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
        searchQuery.value = e.target.value;
        handleSearch();
    }, 500); // 500ms delay
};
</script>

<template>
    <!-- Title -->
    <div class="h-[30vh] w-full relative mb-10 shadow-md flex items-center justify-center mt-16">
        <div>
            <div v-if="loading">
                
            </div>

            <div v-else>
                <img src="assets/img/catalog-bg.jpg" alt="foto-persyaratan1"
                    class="w-full h-full object-cover absolute inset-0" />
                <div class="absolute inset-0 bg-black opacity-60" />
                <div
                    class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
                    <h1 class="text-white text-4xl font-semibold z-10 text-center">
                        Catalog
                    </h1>
                    <h4 class="text-white text-base sm:text-lg font-sans z-10 text-center">
                        <nuxt-link to="/" class="text-white hover:text-yellow-100">Home</nuxt-link>
                        >
                        <nuxt-link to="/catalog" class="text-orange-400">Catalog</nuxt-link>
                    </h4>
                </div>
            </div>
        </div>
    </div>
    <!-- End Title -->
    <div class="flex flex-col md:flex-row justify-between items-center px-4 md:px-14 gap-4">
        <div class="text-orange-400 text-2xl md:text-3xl font-sans">
            Fresh Fruits and Vegetables
            <div class="mt-5">
                <hr class="border-t border-orange-500 w-24 mx-auto sm:mx-0" />
            </div>
        </div>
        <div class="w-full md:w-96 relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-5 h-5 text-gray-600">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>
            <input v-model="searchQuery" @input="debounceSearch" @keyup.enter="handleSearch" type="search"
                id="input-label-with-helper-text"
                class="py-3 ps-10 pe-4 block w-full border border-orange-300 rounded-lg text-sm focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none outline-none"
                placeholder="what you need?" aria-describedby="hs-input-helper-text">
        </div>
    </div>

    <Catalog :preview-mode="false" />
</template>