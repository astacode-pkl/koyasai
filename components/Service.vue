<script setup>
const Services = ref([]);


const getDataServices = async () => {
  try {
    const response = await fetch(
      "https://guiding-gentle-yak.ngrok-free.app/api/services",
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    );

    const data = await response.json();

    if (response.ok && data.status === 200) {
      Services.value = data.services;
      console.log("Data services:", data.services);
    } else {
      console.error("Error fetching:", data);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

onMounted(() => {
  getDataServices();
});
</script>
<template>
 <div class="max-w-7xl mx-auto px-4 py-16">
    <h2
      class="text-orange-500 text-2xl font-semibold mb-6 text-center sm:text-left"
      data-aos="fade-right"
      data-aos-duration="500"
    >
      Services
    </h2>
    <hr
      class="border-t border-orange-500 w-24 mb-6 mx-auto sm:mx-0"
      data-aos="fade-left"
      data-aos-duration="500"
    />

    <!-- Grid Section -->
    <div class="font-sans max-w-6xl mx-auto px-4 py-16">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <!-- First Card -->
        <div
          v-for="(service, i) in Services"
          :key="i"
          data-aos="fade-up"
          data-aos-duration="1000"
          :data-aos-delay="200 * i"
          class="flex flex-col justify-center p-6 text-center border rounded-lg transition-all duration-300 hover:sweep-to-bottom hover:bg-orange-600 hover:transform hover:scale-105 hover:shadow-lg hover:text-white group w-full h-64"
        >
          <div v-html="service.icon" class="w-8 h-8 text-orange-500 mb-4 group-hover:text-white mx-auto"></div>
          <h2 class="text-orange-500 text-xl font-semibold mb-4 group-hover:text-white">
            {{ service.title }}
          </h2>
          <span class="text-sm">{{ service.description }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.group {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.group::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-color: rgba(249, 115, 22, 0.192);
  transform: translateY(-100%);
  transition: transform 0.8s ease-in-out;
}

.group:hover::before {
  transform: translateY(0);
}

.group:hover {
  transform: scale(1.05);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  color: white;
}
</style>
