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
          src="assets/img/galeri-bg.webp"
          alt="foto-persyaratan1"
          class="w-full h-full object-cover absolute inset-0"
        />
        <div class="absolute inset-0 bg-black opacity-60" />
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2"
        >
          <h1 class="text-white text-4xl font-semibold z-10 text-center">
            Gallery
          </h1>
          <h4
            class="text-white text-base sm:text-lg font-semibold z-10 text-center"
          >
            <nuxt-link to="/" class="text-white hover:text-yellow-100"
              >Home</nuxt-link
            >
            >
            <nuxt-link to="/gallery" class="text-orange-400">Gallery</nuxt-link>
          </h4>
        </div>
      </div>
    </div>
  </div>
  <!-- End Title -->
  <div class="flex justify-between items-center px-4 md:px-14">
    <div class="text-orange-400 text-2xl md:text-3xl font-sans">
      Foto Kegiatan Koyasai
      <div class="mt-5">
        <hr class="border-t border-orange-500 w-24 mx-auto sm:mx-0" />
      </div>
    </div>
  </div>

  <Gallery :preview-mode="false" />
</template>

<script setup>
useHead({
  title: "Koyasai - Gallery",
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

const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 2000);
});
</script>