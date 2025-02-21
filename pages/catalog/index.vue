<script setup>
useHead({
    title: "Catalog",
    meta: [
        {
            name: "description",
            content: "Catalog Page",
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
<template>
    <!-- Title -->
    <div class="h-[30vh] w-full relative mb-10 shadow-md flex items-center justify-center">
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
                <img src="assets/img/catalog-bg.jpg" alt="foto-persyaratan1"
                    class="w-full h-full object-cover absolute inset-0" />
                <div class="absolute inset-0 bg-black opacity-60" />
                <div
                    class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
                    <h1 class="text-white text-4xl font-semibold z-10 text-center">
                        Catalog
                    </h1>
                    <h4 class="text-white text-base sm:text-lg font-semibold z-10 text-center">
                        <nuxt-link to="/" class="text-white hover:text-yellow-100">Home</nuxt-link>
                        >
                        <nuxt-link to="/catalog" class="text-orange-400">Catalog</nuxt-link>
                    </h4>
                </div>
            </div>
        </div>
    </div>
    <!-- End Title -->
    <div class=" text-orange-400 text-2xl md:text-3xl font-sans mt-2 p-2 ms-14">
        Fress Fruits and Vegetables
    </div>

    <Catalog :preview-mode="false" />

</template>