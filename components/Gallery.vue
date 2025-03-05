<script>
const gallery = ref([]);

const getDataGallery = async () => {
  try {
    const response = await fetch(
      "https://guiding-gentle-yak.ngrok-free.app/api/gallery",
      {
        method: "GET",
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    );

    const data = await response.json();

    if (response.ok && data.status === 200) {
      gallery.value = data.gallery;
    } else {
      console.error("Error fetching:", data);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

onMounted(() => {
    getDataGallery();
});

import image1 from '@/assets/img/galeri1.jpg'
import image2 from '@/assets/img/galeri2.jpg'
import image3 from '@/assets/img/galeri3.jpg'
import image4 from '@/assets/img/galeri4.jpg'
import image5 from '@/assets/img/galeri5.jpg'
import image6 from '@/assets/img/galeri6.jpg'

export default {
  name: 'Gallery',
  props: {
    previewMode: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isVisible: false,
      selectedImage: null,
      modalVisible: false,
      loadedImages: new Set(),
      images: [
        {
          id: 1,
          src: image1,
          title: 'Kegiatan Koyasai'
        },
        {
          id: 2,
          src: image2,
          title: 'Kegiatan Koyasai'
        },
        {
          id: 3,
          src: image3,
          title: 'Kegiatan Koyasai'
        },
        {
          id: 4,
          src: image4,
          title: 'Kegiatan Koyasai'
        },
        {
          id: 5,
          src: image5,
          title: 'Kegiatan Koyasai'
        },
        {
          id: 6,
          src: image6,
          title: 'Kegiatan Koyasai'
        },
        {
          id: 7,
          src: image6,
          title: 'Kegiatan Koyasai'
        },
      ]
    }
  },
  computed: {
    displayedImages() {
      return this.previewMode ? this.images.slice(0, 3) : this.images
    }
  },
  mounted() {
    this.isVisible = true
  },
  methods: {
    onImageLoad(index) {
      this.loadedImages.add(index)
    },
    openModal(image) {
      this.selectedImage = image
      setTimeout(() => {
        this.modalVisible = true
      }, 50)
    },
    closeModal() {
      this.modalVisible = false
      setTimeout(() => {
        this.selectedImage = null
      }, 300)
    }
  }
}
</script>

<template>
  <div class="galeri max-w-7xl mx-auto">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 items-center mx-3 sm:mx-5 mb-5 p-10 bg-white ">
      <div v-for="(image, index) in displayedImages" :key="image.id" data-aos="fade-up" :data-aos-delay="index * 200"
        class="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-full cursor-pointer"
        :class="{ 'opacity-0 translate-y-4': !isVisible }" @click="openModal(image)">
        <div class="absolute inset-0 bg-gray-200" />
        <div class="w-full h-full">
          <img :src="image.src" :alt="image.title" @load="onImageLoad(index)"
            class="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div
          class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
          <h3 class="text-white text-base sm:text-lg md:text-xl font-semibold text-center px-4">{{ image.title }}</h3>
        </div>
      </div>
    </div>



    <!-- Modal -->
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

        <div class="transform transition-all duration-300 max-w-4xl w-80 md:w-96"
          :class="{ 'opacity-0 scale-95': !modalVisible, 'opacity-100 scale-100': modalVisible }" @click.stop>
          <img :src="selectedImage.src" :alt="selectedImage.title" class="w-full rounded-lg shadow-xl" />
          <h3 class="text-white text-base sm:text-lg md:text-xl font-semibold mt-4 text-center px-2">
            {{ selectedImage.title }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>