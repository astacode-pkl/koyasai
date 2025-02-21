<template>
    <div class="mt-24 md:mt-28 lg:mt-32 max-w-7xl mx-auto">
      <h2 class="text-3xl font-bold text-center text-black mb-8">Our Clients</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-10 px-5 mb-10">
        <div v-for="card in 6" :key="card" class="flex flex-col bg-white border shadow-md rounded-xl col-span-1 transform transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-primary">
          <img
            class="w-full h-auto rounded-t-xl"
            src="/assets/img/sayur.png"
            alt="Card Image"
          />
          <div class="p-4 md:p-5">
            <h3 class="text-lg font-bold text-gray-800">Title</h3>
            <p class="mt-1 text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, modi?
            </p>
            <a
              class="mt-3 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-primary text-white hover:bg-orange-600 focus:outline-none focus:bg-orange-700 disabled:opacity-50 disabled:pointer-events-none"
              href="/news/readmore"
            >
              Read More
            </a>
          </div>
        </div>
      </div>    
    </div>
  </template>