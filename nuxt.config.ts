// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/image'],
  image: {
    format: ['webp', 'avif'],
  },
  css: ['~/assets/css/main.css'],
  plugins: ["~/plugins/preline.client.ts",
    { src: '~/plugins/aos.ts', mode: 'client', ssr: false }
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})