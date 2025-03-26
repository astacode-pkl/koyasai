<script setup>
useHead({
  title: "Koyasai - About",
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


import { useComprofStore } from "@/stores/comprofStore";
const comprofStore = useComprofStore();

const getDataComprof = async () => {
  await comprofStore.fetchComprof();
};

onMounted(() => {
  getDataComprof();
});

const companyProfile = computed(() => comprofStore.companyProfile);
const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 2000);
});
</script>

<template>
  <!-- Title -->
  <div
    class="h-[30vh] w-full relative mb-5 shadow-md flex items-center justify-center mt-16"
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
          src="assets/img/about.jpg"
          alt="foto-persyaratan1"
          class="w-full h-full object-cover absolute inset-0"
        />
        <div class="absolute inset-0 bg-black opacity-60" />
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2"
        >
          <h1 class="text-white text-4xl font-semibold z-10 text-center">
            About Us
          </h1>
          <h4
            class="text-white text-base sm:text-lg font-semibold z-10 text-center"
          >
            <nuxt-link to="/" class="text-white hover:text-yellow-100"
              >Home</nuxt-link
            >
            >
            <nuxt-link to="/news" class="text-yellow-400">About Us</nuxt-link>
          </h4>
        </div>
      </div>
    </div>
  </div>
  <!-- End Title -->

  <!-- Section -->
  <div class="font-sans">
    <div class="max-w-6xl mx-auto px-4 py-16">
      <h2
        class="text-2xl font-semibold mb-6 text-center sm:text-left"
        data-aos="fade-right"
        data-aos-duration="3000"
      >
        Story of
        <span class="text-orange-500"
          >Fruit and <br />
          Vegetable</span
        >
        Lovers
      </h2>
      <hr
        class="border-t border-orange-500 w-24 mb-6 mx-auto sm:mx-0"
        data-aos="fade-left"
        data-aos-duration="3000"
      />

      <div class="p-2 md:p-4">
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center"
        >
          <!-- Text content -->
          <div
            v-if="companyProfile.length > 0"
            class="space-y-4 md:space-y-6 text-left"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <p class="text-lg text-gray-700 leading-relaxed text-justify">
              {{ companyProfile[0].history }}
            </p>
          </div>

          <!-- Image content -->
          <div
            class="order-first lg:order-last flex justify-center lg:justify-end mt-16 lg:mt-0"
          >
            <div class="relative">
              <img
                src="assets/img/foto1.png"
                alt="A variety of colorful fruits"
                class="w-full sm:w-96 h-auto sm:h-72 object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
              <img
                src="assets/img/foto2.png"
                alt="A variety of colorful vegetables"
                class="w-full sm:w-72 h-auto sm:h-64 object-cover rounded-lg shadow-md absolute bottom-0 right-0 transform sm:translate-x-14 sm:translate-y-10 lg:translate-y-8 transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Section -->
</template>
