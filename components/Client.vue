<template>
  <div class="max-w-7xl py-16 mx-auto px-4 my-6 bg-primary rounded-xl shadow-lg ">
    <h2 class="text-3xl font-bold text-center text-white mb-8">Our Clients</h2>
    <div class="flex gap-14 justify-center">
      <div v-for="client in 5" :key="client">
        <img src="/assets/img/logo.png" alt="" class="w-28 " />
      </div>
    </div>
  </div>
</template>
