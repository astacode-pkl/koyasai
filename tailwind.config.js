/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FC822C',
      },
    },
  },
  plugins: [  require('preline/plugin'),],
}