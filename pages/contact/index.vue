<template>
  <!-- Title -->
  <div class="h-[30vh] w-full relative mb-5 shadow-md flex items-center justify-center mt-16">
    <div>
      <div v-if="loading">
        <div v-for="n in skeletonCount" :key="n"
          class="bg-gray-500 border-2 border-gray-100 rounded-md mb-4 p-4 flex items-center">
          <div class="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
          <div class="flex-1">
            <div class="w-3/4 h-4 bg-gray-300 rounded-md mb-2"></div>
            <div class="w-1/2 h-3 bg-gray-300 rounded-md"></div>
          </div>
        </div>
      </div>

      <div v-else>
        <img src="assets/img/contact.jpg" alt="Contact Us" class="w-full h-full object-cover absolute inset-0" />
        <div class="absolute inset-0 bg-black opacity-60" />
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
          <h1 class="text-white text-4xl font-semibold z-10 text-center">Contact Us</h1>
          <h4 class="text-white text-base sm:text-lg font-semibold z-10 text-center">
            <nuxt-link to="/" class="text-white hover:text-yellow-100">Home</nuxt-link>
            >
            <nuxt-link to="/news" class="text-yellow-400">Contact Us</nuxt-link>
          </h4>
        </div>
      </div>
    </div>
  </div>
  <!-- End Title -->

  <!-- section -->
  <div class="max-w-6xl mx-auto px-4 py-16">
    <div v-if="companyProfile.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Get In Touch Section -->
      <div class="mt-7">
        <h2 class="text-2xl font-semibold text-orange-500 mb-4 text-center sm:text-left" data-aos="fade-right"
          data-aos-duration="3000">Get In Touch</h2>
        <hr class="border-t border-orange-500 w-24 mb-6 mx-auto sm:mx-0" data-aos="fade-left"
          data-aos-duration="3000" />
        <p class="mb-4 text-justify mt-10" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          Contact us about anything related to our company or services. <br />
          We'll do our best to get back to you as soon as possible.
        </p>
        <div class="card rounded-2xl">
          <div class="mt-8 animate-fade-in">
            <iframe :src="companyProfile[0].map" width="100%" height="300" style="border: 0" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade" class="rounded-2xl"></iframe>
          </div>
        </div>
      </div>

      <!-- Contact Info Section -->
      <div>
        <h2 class="text-2xl font-semibold text-orange-500 mb-4 mt-7 text-center sm:text-left" data-aos="fade-right"
          data-aos-duration="3000">Contact Info</h2>
        <hr class="border-t border-orange-500 w-24 mb-6 mx-auto sm:mx-0" data-aos="fade-left"
          data-aos-duration="3000" />
        <!-- Address Section -->
        <div class="flex items-start space-x-5 mb-4 mt-10" data-aos="fade-up" data-aos-duration="2000"
          data-aos-delay="200">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <div>
            <h3 class="font-semibold">Address:</h3>
            <p class="text-gray-600">{{ companyProfile[0].address }}</p>
          </div>
        </div>

        <!-- Phone Section -->
        <div class="flex items-start space-x-5 mb-4" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="h-6 w-6 text-orange-500">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
          </svg>
          <div>
            <h3 class="font-semibold">Phone:</h3>
            <p class="text-gray-600">For Customer <br /> Cabang Semarang: <br /> 08112577795 (contoh)</p>
          </div>
        </div>

        <!-- Email Section -->
        <div class="flex items-start space-x-5 mb-4" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <div>
            <h3 class="font-semibold">Email:</h3>
            <p class="text-gray-600">koyasai.co.id (contoh)</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Form Column -->
    <div class="bg-white font-roboto" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
      <div class="max-w-4xl mx-auto p-6">
        <h2 class="text-2xl font-semibold mb-6 text-center sm:text-center">Send Us <span class="text-orange-500">A
            Message</span></h2>
        <hr class="border-t border-orange-500 w-24 mx-auto mb-6" />
        <div class="flex flex-col md:flex-row items-center">
          <form @submit.prevent="submitData" class="w-full max-w-7xl mx-auto">
            <div class="space-y-5">
              <div>
                <input v-model="form.name" type="text" id="hs-tac-input-name"
                  class="p-3 block w-full border border-gray-300 rounded-md text-base bg-gray-50 focus:outline-none focus:border-gray-400"
                  placeholder="Name " required />
              </div>

              <div>
                <input v-model="form.email" type="email" id="hs-tac-input-email"
                  class="p-3 block w-full border border-gray-300 rounded-md text-base bg-gray-50 focus:outline-none focus:border-gray-400"
                  placeholder="Email " required />
              </div>

              <div>
                <input v-model="form.subject" type="text" id="hs-tac-input-subject"
                  class="p-3 block w-full border border-gray-300 rounded-md text-base bg-gray-50 focus:outline-none focus:border-gray-400"
                  placeholder="Subject " required />
              </div>

              <div>
                <textarea v-model="form.message" id="hs-tac-message"
                  class="p-3 block w-full border border-gray-300 rounded-md text-base bg-gray-50 focus:outline-none focus:border-gray-400"
                  placeholder="Comment or Message" rows="5" required></textarea>
              </div>
            </div>
            <div class="flex justify-center">
              <button type="submit" :disabled="isSubmitting"
                class="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-transform duration-300 transform hover:scale-105 mt-4 w-max">
                <span v-if="isSubmitting">Sending...</span>
                <span v-else>Submit</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Contact Us",
  meta: [
    {
      name: "description",
      content: "Contact Us Page",
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
const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});
const isSubmitting = ref(false);

const submitData = async () => {
  isSubmitting.value = true;
  try {
    const config = useRuntimeConfig();
    const apiBaseUrl = config.public.apiBaseUrl;

    const response = await fetch(
      `${apiBaseUrl}/contacts`,
      {
        method: "POST",
        headers: {
          "ngrok-skip-browser-warning": "true",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form.value),
      }
    );

    if (response.ok) {
      console.log("Message submitted successfully");
      alert("Message submitted successfully!");
      resetForm();
    } else {
      throw new Error("Failed to submit message");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred while sending your message. Please try again.");
  } finally {
    isSubmitting.value = false; // Reset loading state
  }
};

const resetForm = () => {
  form.value.name = "";
  form.value.email = "";
  form.value.subject = "";
  form.value.message = "";
};

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 2000);
});
</script>