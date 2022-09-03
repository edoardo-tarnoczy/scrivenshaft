import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["~/assets/styles/main.scss"],
  modules: ["@nuxtjs/tailwindcss"],
  build: {
    transpile: ["@heroicons/vue", process.env.npm_lifecycle_script === "nuxt generate"
        ? "contentful"
        : ''],
  },
  runtimeConfig: {
    public: {
      contentfulSpace: process.env.NUXT_CONTENTFUL_SPACE,
      contentfulPublicAccessToken:
      process.env.NUXT_CONTENTFUL_PUBLIC_ACCESS_TOKEN,
    },
  },
});
