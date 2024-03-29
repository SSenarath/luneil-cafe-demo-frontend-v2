// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@element-plus/nuxt",
    ["@pinia/nuxt", { autoImports: ["defineStore"] }],
    "@pinia-plugin-persistedstate/nuxt",
  ],
  elementPlus: {
    /** Options */
  },
  imports: {
    dirs: ["stores"],
  },
});
