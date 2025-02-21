<template>
    <div>
      <!-- Slider -->
      <div
        data-hs-carousel='{
              "loadingClasses": "opacity-0",
              "dotsItemClasses": "hs-carousel-active:bg-primary hs-carousel-active:border-primary size-3 border border-gray-400 rounded-full cursor-pointer",
              "isAutoPlay": true
          }'
        class="relative"
      >
        <div class="hs-carousel relative overflow-hidden h-screen bg-white">
          <div
            class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0"
          >
            <div class="hs-carousel-slide">
              <div class="flex justify-center h-full w-full bg-gray-100 relative">
                <img
                  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHZlZ2V0YWJsZXxlbnwwfHwwfHx8MA%3D%3D"
                  alt="hero"
                  class="object-cover brightness-50 w-full"
                />
              </div>
            </div>
            <div class="hs-carousel-slide">
              <div class="flex justify-center h-full w-full bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHZlZ2V0YWJsZXxlbnwwfHwwfHx8MA%3D%3D"
                  alt="hero"
                  class="object-cover w-full brightness-50"
                />
              </div>
            </div>
            <div class="hs-carousel-slide">
              <div class="flex justify-center h-full w-full bg-gray-300">
                <img
                  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHZlZ2V0YWJsZXxlbnwwfHwwfHx8MA%3D%3D"
                  alt="hero"
                  class="object-cover w-full brightness-50"
                />
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          class="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-primary"
        >
          <span
            class="text-2xl hover:bg-gray-400/30 p-3 rounded-md"
            aria-hidden="true"
          >
            <svg
              class="shrink-0 size-5"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </span>
          <span class="sr-only">Previous</span>
        </button>
        <button
          type="button"
          class="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-primary"
        >
          <span class="sr-only">Next</span>
          <span
            class="text-2xl hover:bg-gray-400/40 p-3 rounded-md"
            aria-hidden="true"
          >
            <svg
              class="shrink-0 size-5"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span>
        </button>
        <div
          class="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2"
        ></div>
      </div>    
    </div>
  </template>
  