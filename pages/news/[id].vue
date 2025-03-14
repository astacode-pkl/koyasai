<!-- <template>
  <div class="font-sans">
    
    <div
      class="max-w-lg md:max-w-2xl lg:max-w-3xl px-6 pb-12 sm:px-6 lg:px-8 mx-auto mt-24 md:mt-28 lg:mt-32"
    >
      <div class="max-w-2xl">
    
        <div class="space-y-5 md:space-y-8">
          <div class="space-y-3">
            <h2 class="text-2xl font-bold md:text-3xl">Title</h2>

            <p class="text-lg text-gray-800">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque eos, incidunt assumenda sit eaque illum neque debitis
              perferendis magnam molestiae.
            </p>
          </div>

          <figure>
            <img
              class="w-full object-cover rounded-xl border"
              src="/assets/img/sayur.png"
              alt="Blog Image"
            />
          </figure>

          <p class="text-lg text-gray-800">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequuntur doloremque reiciendis ex nobis ullam sint quaerat modi
            aut natus debitis quas, aperiam rerum quidem expedita neque fugiat
            temporibus laudantium repellendus, eum beatae? Numquam
            necessitatibus a blanditiis, ea perspiciatis obcaecati voluptatem.
            Cumque laboriosam unde eveniet natus doloribus illo error asperiores
            labore minus soluta dolorum ipsam eaque est, dolor quisquam possimus
            eum fugit sed modi ut hic, dicta a veniam doloremque. <br />
            <br />
            Accusamus ducimus corrupti illo numquam aut itaque quos et voluptate
            hic neque assumenda repellendus suscipit, voluptatum ex consequatur
            at. Nulla minima sed est, fugit esse optio doloremque dolores enim
            ut, aliquid nisi porro pariatur, facilis explicabo quasi ducimus
            labore soluta consequatur! Corporis delectus ea autem ipsa hic quas,
            atque ipsum dolorem vel debitis esse vitae veniam eos fugiat
            eligendi culpa, praesentium tenetur incidunt doloremque possimus
            mollitia? Mollitia voluptatum est tempora reprehenderit possimus
            odit itaque neque? Illum mollitia cumque perferendis ullam deleniti
            nesciunt repudiandae. <br />
            <br />
            In beatae incidunt quod consequuntur asperiores corrupti commodi
            sequi ab repellendus itaque aperiam eveniet veritatis atque sint
            inventore libero debitis, accusantium dolore vero? Possimus
            laboriosam obcaecati quidem, sapiente ut nihil. Voluptatibus
            repellendus distinctio, incidunt eveniet fugit dolores saepe ipsum
            officia reprehenderit. Voluptatem nam reiciendis quisquam sapiente
            debitis? Fuga.
          </p>
        </div>
        
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

  </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
import { useNewsStore } from "@/stores/newsStore";
import { ref, computed, onMounted } from "vue";

const route = useRoute();
const newsStore = useNewsStore();
const loading = ref(true);

const getDataNews = async () => {
    await newsStore.fetchNews();
    loading.value = false;
};

onMounted(() => {
  getDataNews();
});

const article = computed(() => {
    return newsStore.News.find(n => n.id === parseInt(route.params.id));
});
</script> -->
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
              {{ article.description || "No description available." }}
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
            {{ article.content }}
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
