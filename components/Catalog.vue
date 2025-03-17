<template>
  <div class="max-w-7xl mx-auto">
    <div v-if="displayedImages.length > 0"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mx-4 sm:mx-6 my-8 p-10 bg-white">
      <div v-for="(product, index) in displayedImages" :key="product.id" data-aos="fade-up"
        :data-aos-delay="index * 200"
        class="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        :class="{ 'opacity-0 translate-y-4': !isVisible }">
        <div class="relative w-full h-48 overflow-hidden group cursor-pointer" @click="openModal(product)">
          <img :src="product.image" :alt="product.name" @load="onImageLoad(index)"
            class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
          <div
            class="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-black/90 via-black/70 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <div class="absolute bottom-0 p-4 text-white">
              <h4 class="font-semibold text-lg mb-2">{{ product.name }}</h4>
              <p class="text-sm leading-relaxed">
                {{ product.description }}
              </p>
            </div>
          </div>
        </div>
        <div class="p-4">
          <h3 class="text-lg font-semibold font-sans text-gray-800 mb-2">
            {{ product.name }}
          </h3>
          <p class="text-sm text-gray-600 mb-3">{{ product.description }}</p>
          <div class="flex items-center justify-between">
            <span class="text-lg font-bold text-orange-500">{{
              formatPrice(product.price)
            }}</span>
            <nuxt-link to="/">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6 text-gray-800">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375 .375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="flex items-center justify-center flex-col gap-5 h-screen">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="size-10">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
      </svg>

      <p class="font-semibold text-xl">Product Tidak Ditemukan</p>
    </div>
    <div v-if="selectedImage"
      class="fixed inset-0 z-[60] overflow-hidden bg-black bg-opacity-80 transition-all duration-300"
      @click="closeModal">
      <div class="flex items-center justify-center min-h-screen p-4">
        <button type="button" class="absolute top-2 right-2 sm:top-3 sm:right-3 z-[70] text-white hover:text-gray-200"
          @click="closeModal">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <div class="transform transition-all duration-300 max-w-4xl w-80 md:w-96" :class="{
          'opacity-0 scale-95': !modalVisible,
          'opacity-100 scale-100': modalVisible,
        }" @click.stop>
          <img :src="selectedImage.image" :alt="selectedImage.name" class="w-full rounded-lg shadow-xl" />
          <h3 class="text-white text-base sm:text-lg md:text-xl font-semibold mt-4 text-center px-2">
            {{ selectedImage.name }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCatalogStore } from '@/stores/catalogStore';

const catalogStore = useCatalogStore();
const isVisible = ref(false);
const selectedImage = ref(null);
const modalVisible = ref(false);
const loadedImages = new Set();

const getDataCatalog = async () => {
  await catalogStore.fetchCatalogs();
};

onMounted(() => {
  getDataCatalog();
  isVisible.value = true;
});





const Catalogs = computed(() => catalogStore.catalogs);
const displayedImages = computed(() => {
  return props.previewMode ? Catalogs.value.slice(0, 3) : props.filteredData;
});

const props = defineProps({
  previewMode: Boolean,
  filteredData: Array,
});

const formatPrice = (price) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(price);
};

const onImageLoad = (index) => {
  loadedImages.add(index);
};

const openModal = (product) => {
  selectedImage.value = product;
  setTimeout(() => {
    modalVisible.value = true;
  }, 50);
};

const closeModal = () => {
  modalVisible.value = false;
  setTimeout(() => {
    selectedImage.value = null;
  }, 300);
};
</script>