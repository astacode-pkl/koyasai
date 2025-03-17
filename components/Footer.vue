<script setup>
import { useComprofStore } from "@/stores/comprofStore";
const comprofStore = useComprofStore();

const getDataComprof = async () => {
  await comprofStore.fetchComprof();
};

onMounted(() => {
  getDataComprof();
});

const companyProfile = computed(() => comprofStore.companyProfile);
</script>

<template>
  <div>
    <!-- ========== FOOTER ========== -->
    <footer class="mt-auto bg-neutral-900 w-full">
      <div class="mt-auto w-full max-w-7xl py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
        <!-- Grid -->
        <div v-if="companyProfile.length > 0" class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10">
          <div class="col-span-full lg:col-span-2">
            <NuxtLink class="flex-none text-xl font-semibold text-white focus:outline-none focus:opacity-80" to="#"
              aria-label="Brand">Koyasai</NuxtLink>
            <p class="inline-flex mt-3 gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200">
              {{ companyProfile[0].simple_history}}
            </p>
          </div>

          <!-- End Col -->

          <div class="col-span-1">
            <h4 class="font-semibold text-gray-100">Contact</h4>

            <div class="my-3 grid space-y-3">
              <p>
                <NuxtLink
                  class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                  :to="companyProfile[0].whatsapp">Whatsapp</NuxtLink>
              </p>
              <p>
                <NuxtLink
                  class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                  :to="companyProfile[0].email">Email</NuxtLink>
              </p>
            </div>
            <h4 class="font-semibold text-gray-100">Media Sosial</h4>

            <div class="mt-3 grid space-y-3">
              <p>
                <NuxtLink
                  class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                  :to="companyProfile[0].instagram">Instagram</NuxtLink>
              </p>
              <p>
                <NuxtLink
                  class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                  :to="companyProfile[0].youtube">Youtube</NuxtLink>
              </p>
              <p>
                <NuxtLink
                  class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                  :to="companyProfile[0].facebook">Facebook</NuxtLink>
              </p>
            </div>
          </div>
          <!-- End Col -->

          <div class="col-span-1">
            <h4 class="font-semibold text-gray-100">Quick Link</h4>

            <div class="mt-3 grid space-y-3">
              <p>
                <NuxtLink
                  class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                  to="#">Home</NuxtLink>
              </p>
              <p>
                <NuxtLink
                  class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                  to="/about">About</NuxtLink>
              </p>
              <p>
                <NuxtLink
                  class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                  to="/catalog">Catalog</NuxtLink>
              </p>
              <p>
                <NuxtLink
                  class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                  to="/gallery">Gallery</NuxtLink>
              </p>
              <p>
                <NuxtLink
                  class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                  to="/news">News</NuxtLink>
              </p>
              <p>
                <NuxtLink
                  class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                  to="/contact">Contact</NuxtLink>
              </p>
            </div>
          </div>
          <!-- End Col -->
        </div>
        <!-- End Grid -->

        <div class="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
          <div class="flex justify-between items-center">
            <p class="text-sm text-gray-400">Copyright © 2025 Koyasai</p>
          </div>
          <!-- End Col -->
        </div>
      </div>
    </footer>
    <!-- ========== END FOOTER ========== -->
  </div>
</template>
