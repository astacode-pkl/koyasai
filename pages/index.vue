<template>
  <div class="font-sans">
    <Hero />    
    <About />
    <Service />
    <div class="max-w-7xl mx-auto px-4">
      <h2
        class="text-orange-500 text-2xl font-semibold mb-6 text-center sm:text-left"
        data-aos="fade-right"
        data-aos-duration="500"
      >
        Catalog
      </h2>
      <hr
        class="border-t border-orange-500 w-24 mb-6 mx-auto sm:mx-0"
        data-aos="fade-left"
        data-aos-duration="500"
      />      
    </div>
    <Catalog :preview-mode="true"/>
    <div class="max-w-7xl mx-auto px-4">
      <h2
        class="text-orange-500 text-2xl font-semibold mb-6 text-center sm:text-left"
        data-aos="fade-right"
        data-aos-duration="500"
      >
        Gallery
      </h2>
      <hr
        class="border-t border-orange-500 w-24 mb-6 mx-auto sm:mx-0"
        data-aos="fade-left"
        data-aos-duration="500"
      />
    </div>
    <Gallery :preview-mode="true"/>
    <div class="max-w-7xl mx-auto px-4">
      <h2
        class="text-orange-500 text-2xl font-semibold mb-6 text-center sm:text-left"
        data-aos="fade-right"
        data-aos-duration="500"
      >
        Our Client
      </h2>
      <hr
        class="border-t border-orange-500 w-24 mb-6 mx-auto sm:mx-0"
        data-aos="fade-left"
        data-aos-duration="500"
      />
    </div>
    <Client />
  </div>
</template>

<script setup>
useHead({
  title: 'Koyasai - Home',
  meta: [
    { name: 'description', content: 'Koyasai menyediakan berbagai sayur dan buah segar berkualitas tinggi. Temukan pilihan terbaik dari produk lokal dan organik, serta berbagai kebutuhan sehari-hari lainnya.' },
    { name: 'keywords', content: 'sayur segar, buah segar, belanja online sayur, belanja online buah, produk organik, toko sayur online, Koyasai, sayuran lokal, buah-buahan, kebutuhan sehari-hari, pengiriman sayur, pengiriman buah' }
  ]
})
</script>