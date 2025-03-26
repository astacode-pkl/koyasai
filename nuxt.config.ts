// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  experimental: {
    asyncContext: true,
  },

  css: ["~/assets/css/main.css"],

  plugins: [
    "~/plugins/preline.client.ts",
    { src: "~/plugins/aos.ts", mode: "client", ssr: false },
    "~/plugins/pinia.ts",
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
    },
  },

  // apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:3000/api'

  modules: ["@nuxtjs/sitemap", "@nuxtjs/seo"],
  site: {
    url: "https:/koyasai.co.id",
    name: "Koyasai",
    description: "Koyasai Website",
    defaultLocale: "id",
  },

  app: {
    head: {
      title: 'Koyasai',
      meta: [
        { name: 'description', content: 'Koyasai menyediakan berbagai sayur dan buah segar berkualitas tinggi. Temukan pilihan terbaik dari produk lokal dan organik, serta berbagai kebutuhan sehari-hari lainnya. Belanja mudah dan cepat dengan pengiriman langsung ke pintu rumah Anda. Dapatkan sayur dan buah segar setiap hari hanya di Koyasai!' },
        { name: 'keywords', content: 'sayur segar, buah segar, belanja online sayur, belanja online buah, produk organik, toko sayur online, Koyasai, sayuran lokal, buah-buahan, kebutuhan sehari-hari, pengiriman sayur, pengiriman buah' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
});
