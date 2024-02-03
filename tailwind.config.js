/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'luneil-yellow': "#FFD449",
        'luneil-green': "#FFD449",
        'luneil-orange': "#F9A620",
        'luneil-blue': "#C1D5DB"
      }
    },
  },
  plugins: [],
}

