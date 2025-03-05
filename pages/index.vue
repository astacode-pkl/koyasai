<script setup>
import { useCompanyProfile } from "~/composables/useCompanyProfile";

const { companyProfile } = useCompanyProfile();
</script>

<template>
  <div class="font-sans">
    <Hero />
    <About />
    <Services />
    <div class="max-w-7xl mx-auto px-4">
      <h2
        class="text-orange-500 text-2xl font-semibold mb-6 text-center sm:text-left"
        data-aos="fade-right"
        data-aos-duration="500"
      >
        Catalog
      </h2>
      <hr
        class="border-t border-orange-500 w-24 mb-6 mx-auto sm:mx-0"
        data-aos="fade-left"
        data-aos-duration="500"
      />
    </div>
    <Catalog :preview-mode="true" />
    <div class="max-w-7xl mx-auto px-4">
      <h2
        class="text-orange-500 text-2xl font-semibold mb-6 text-center sm:text-left"
        data-aos="fade-right"
        data-aos-duration="500"
      >
        Gallery
      </h2>
      <hr
        class="border-t border-orange-500 w-24 mb-6 mx-auto sm:mx-0"
        data-aos="fade-left"
        data-aos-duration="500"
      />
    </div>
    <Gallery :preview-mode="true" />
    <div class="max-w-7xl mx-auto px-4">
      <h2
        class="text-orange-500 text-2xl font-semibold mb-6 text-center sm:text-left"
        data-aos="fade-right"
        data-aos-duration="500"
      >
        Our Client
      </h2>
      <hr
        class="border-t border-orange-500 w-24 mb-6 mx-auto sm:mx-0"
        data-aos="fade-left"
        data-aos-duration="500"
      />
    </div>
    <Client />
    <div
      v-if="companyProfile.length > 0"
      class="h-full flex justify-center items-center text-black text-4xl"
    >
      <p>Website {{ companyProfile[0].name }}</p>
    </div>
  </div>
</template>

<!-- <script setup>
const companyProfile = ref([]);

const getDataComprof = async () => {
  try {
    const response = await fetch(
      "https://guiding-gentle-yak.ngrok-free.app/api/companyprofile",
      {
        method: "GET",
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    );

    const data = await response.json();

    if (response.ok && data.status === 200) {
      companyProfile.value = data.companyprofile;
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
</script> -->
