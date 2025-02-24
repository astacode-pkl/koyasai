<script>
import { ref, onMounted } from 'vue'
import image1 from '@/assets/img/catalog1.jpg'
import image2 from '@/assets/img/catalog2.jpg'
import image3 from '@/assets/img/catalog3.jpg'
import image4 from '@/assets/img/catalog4a.jpg'
import image5 from '@/assets/img/catalog5.jpg'
import image6 from '@/assets/img/catalog6.jpg'
import image7 from '@/assets/img/catalog6.jpg'

export default {
    name: 'Catalog',
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
            products: [
                {
                    id: 1,
                    src: image1,
                    title: 'Strawberries',
                    description: 'Fruit',
                    hoverDescription: 'Our strawberries are carefully selected for maximum freshness and taste. Perfect for various desserts, smoothies, or eating fresh.',
                    price: 20000,
                },
                {
                    id: 2,
                    src: image2,
                    title: 'Tomato',
                    description: 'Vegetable',
                    hoverDescription: 'The tomato (Solanum lycopersicum) is a plant whose fruit is an edible berry that is typically eaten as a vegetable.',
                    price: 30000,
                },
                {
                    id: 3,
                    src: image3,
                    title: 'Broccoli',
                    description: 'Vegetable',
                    hoverDescription: 'Broccoli, scientifically known as Brassica oleracea var. italica, is a green vegetable belonging to the cabbage family, Brassicaceae.',
                    price: 25000,
                },
                {
                    id: 4,
                    src: image4,
                    title: 'Carrot',
                    description: 'Vegetable',
                    hoverDescription: 'The carrot (Daucus carota subsp. sativus) is a biennial herb in the family Apiaceae, commonly grown for its edible taproot. ',
                    price: 30000,
                },
                {
                    id: 5,
                    src: image5,
                    title: 'Orange',
                    description: 'Fruit',
                    hoverDescription: 'Oranges are citrus fruits known for their fragrant, leathery skin and juicy flesh.',
                    price: 35000,
                },
                {
                    id: 6,
                    src: image6,
                    title: 'Watermelon',
                    description: 'Fruit',
                    hoverDescription: 'Watermelon, scientifically known as Citrullus lanatus, is an annual, prostrate, vining vegetable that produces large, spherical to oval, edible, wet, fleshy fruits.',
                    price: 55000,
                },

            ]
        }
    },
    computed: {
        displayedProducts() {
            return this.previewMode ? this.products.slice(0, 3) : this.products
        }
    },
    mounted() {
        this.isVisible = true
    },
    methods: {
        formatPrice(price) {
            return new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR'
            }).format(price)
        },
        onImageLoad(index) {
            this.loadedImages.add(index)
        },
        openModal(product) {
            this.selectedImage = product
            setTimeout(() => {
                this.modalVisible = true
            }, 50)
        },
        closeModal() {
            this.modalVisible = false
            setTimeout(() => {
                this.selectedImage = null
            }, 300)
        },
        handleOrder(product) {

            console.log('Ordering:', product.title)
        }
    }
}
</script>

<template>
    <div class="max-w-7xl">
        <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mx-4 sm:mx-6 my-8 p-10 bg-white ">
            <div v-for="(product, index) in displayedProducts" :key="product.id" data-aos="fade-up" :data-aos-delay="index * 200"
                class="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                :class="{ 'opacity-0 translate-y-4': !isVisible }">

                <div class="relative w-full h-48 overflow-hidden group cursor-pointer" @click="openModal(product)">
                    <img :src="product.src" :alt="product.title" @load="onImageLoad(index)"
                        class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />


                    <div class="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-black/90 via-black/70 to-transparent 
                        transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <div class="absolute bottom-0 p-4 text-white">
                            <h4 class="font-semibold text-lg mb-2">{{ product.title }}</h4>
                            <p class="text-sm leading-relaxed">{{ product.hoverDescription }}</p>
                        </div>
                    </div>
                </div>

                <!-- Content Container -->
                <div class="p-4">
                    <h3 class="text-lg font-semibold font-sans text-gray-800 mb-2">{{ product.title }}</h3>
                    <p class="text-sm text-gray-600 mb-3">{{ product.description }}</p>
                    <div class="flex items-center justify-between">
                        <span class="text-lg font-bold text-orange-500">{{ formatPrice(product.price) }}</span>
                        <nuxt-link to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-6 text-gray-800">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>

                        </nuxt-link>

                    </div>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div v-if="selectedImage"
            class="fixed inset-0 z-[60] overflow-hidden bg-black bg-opacity-80 transition-all duration-300"
            @click="closeModal">
            <div class="flex items-center justify-center min-h-screen p-4">
                <button type="button"
                    class="absolute top-2 right-2 sm:top-3 sm:right-3 z-[70] text-white hover:text-gray-200"
                    @click="closeModal">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                        </path>
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