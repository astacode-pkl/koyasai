<template>
  <div class="font-sans">
    <!-- Blog Article -->
    <div
      class="max-w-lg md:max-w-2xl lg:max-w-3xl px-6 pb-12 sm:px-6 lg:px-8 mx-auto mt-24 md:mt-28 lg:mt-32"
    >
      <div class="max-w-2xl">
        <!-- Loading State -->
        <div v-if="loading" class="text-center text-gray-500">
          Loading...
        </div>
        
        <!-- Artikel Tidak Ditemukan -->
        <div v-else-if="!article" class="text-center text-red-500">
          Artikel tidak ditemukan!
        </div>

        <!-- Content -->
        <div v-else class="space-y-5 md:space-y-8">
          <div class="space-y-3">
            <h2 class="text-2xl font-bold md:text-3xl">
              {{ article.title }}
            </h2>
            <p class="text-lg text-gray-800">
              {{ article.subheadline || "No description available." }}
            </p>
            
          </div>

          <figure>
            <img
              class="w-full object-cover rounded-xl border"
              :src="article.image"
              alt="Blog Image"
            />
          </figure>

          <p class="text-lg text-gray-800">
            {{ article.body }}
          </p>
        </div>
        <!-- End Content -->

        <!-- Back Button -->
        <Nuxt-link to="/news" class="flex font-semibold gap-3 mt-5 text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          <p class="mb-10">Back</p>
        </Nuxt-link>
      </div>
    </div>
    <!-- End Blog Article -->
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useNewsStore } from "@/stores/newsStore";
import { ref, computed, onMounted, watchEffect } from "vue";

const route = useRoute();
const newsStore = useNewsStore();
const loading = ref(true);

// Fetch data saat halaman dimuat
const getDataNews = async () => {
  await newsStore.fetchNews();
  loading.value = false;
};

onMounted(() => {
  getDataNews();
});

// Ambil artikel sesuai ID dari URL
const article = computed(() => {
    if (newsStore.News.length === 0) return null; 
    return newsStore.News.find(n => n.id === parseInt(route.params.id)) || null;
});


// Update data jika ID di URL berubah
watchEffect(() => {
  if (!article.value) {
    loading.value = true;
    getDataNews();
  }

  watch(article, (newArticle) => {
    console.log("Article Data:", newArticle);
});

});
</script>