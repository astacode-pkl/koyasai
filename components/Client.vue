<template>
  <div class="px-4 md:px-8 lg:px-10">
    <div
      class="max-w-7xl py-16 mx-auto px-3 my-6 bg-primary rounded-xl shadow-lg"
    >
      <h2 class="text-3xl font-bold text-center text-white mb-8">
        Our Clients
      </h2>
      <div class="relative overflow-hidden">
        <div class="flex marquee">
          <div
            v-for="(logo, index) in doubledLogos"
            :key="index"
            class="logo-item"
          >
            <img :src="logo" alt="Client Logo" class="w-60" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="px-4 md:px-8 lg:px-10">
    <div
      class="max-w-7xl py-16 mx-auto px-3 my-6 bg-gray-50 rounded-xl shadow-lg"
    >
      <h2 class="text-3xl font-bold text-center text-black mb-8">
        Our Clients
      </h2>
      <div class="relative overflow-hidden">
        <div class="flex marquee">
          <div
            v-for="(logo, index) in doubledLogos"
            :key="index"
            class="logo-item"
          >
            <img :src="logo" alt="Client Logo" class="w-60" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const logos = ref([
  "https://www.astacode.id/fe/assets/img/logo/logo.png",
  "https://www.astacode.id/fe/assets/img/logo/logo.png",
  "https://www.astacode.id/fe/assets/img/logo/logo.png",
  "https://www.astacode.id/fe/assets/img/logo/logo.png",
  "https://www.astacode.id/fe/assets/img/logo/logo.png",
]);

// Duplikasi daftar logo agar scrolling lebih smooth
const doubledLogos = computed(() => [...logos.value, ...logos.value]);
</script>

<style scoped>
@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

.marquee {
  display: flex;
  animation: marquee 10s linear infinite;
  width: max-content;
}

.logo-item {
  flex-shrink: 0;
  padding: 0 1.5rem;
}
</style>
