// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  experimental: {
    asyncContext: true,
  },
  css: ['~/assets/css/main.css'],
  plugins: [
    "~/plugins/preline.client.ts",
    { src: '~/plugins/aos.ts', mode: 'client', ssr: false },
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
      apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:3000/api'
    }
  }
})