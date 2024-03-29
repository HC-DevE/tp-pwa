import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@vite-pwa/nuxt"],
  ui: {
    global: true,
    icons: ["mdi", "simple-icons"],
  },
  pwa: {
    manifest: {
      name: "Welfare App",
      short_name: "Welfare App",
      description: "My incredible Welfare app",
      lang: "en",
      theme_color: "#000000",
      icons: [],
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
  app: {
    head: {
      title: "Welfare App",
      meta: [
        {
          charset: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ],
      // link: [
      //   {
      //     rel: "icon",
      //     type: "image/x-icon",
      //     href: "/favicon.ico",
      //   },
      // ],
    },
  },
  runtimeConfig: {
    mySecret: process.env.MY_SECRET,
    public: {
      apiBase: "/api",
    },
  },
  devtools: { enabled: true },
});
