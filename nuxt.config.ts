import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  modules: [
    "@nuxt/ui",
    "@vite-pwa/nuxt",
    "nuxt-icon",
    "nuxt-mapbox",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@pinia/nuxt",
    // "nuxt-socket-io"
  ],
  ui: {
    global: true,
    icons: ["mdi", "simple-icons"],
  },
  colorMode: {
    preference: "light",
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            "chathams-blue": {
              "50": "#f3f7fc",
              "100": "#e6f0f8",
              "200": "#c8dfef",
              "300": "#97c5e2",
              "400": "#5fa6d1",
              "500": "#3a8bbd",
              "600": "#2a6f9f",
              "700": "#22577e",
              "800": "#204c6c",
              "900": "#20415a",
              "950": "#15293c",
            },
          },
        },
      },
    },
  },
  mapbox: {
    accessToken: process.env.MAPBOX_TOKEN,
  },
  pwa: {
    manifest: {
      name: "Welfare App",
      short_name: "Welfare App",
      description: "My incredible Welfare app",
      lang: "en",
      theme_color: "chathams-blue-500",
      // theme_color: "#000000",
      icons: [
        {
          src: "android-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "android-256x256.png",
          sizes: "256x256",
          type: "image/png",
        },
      ],
    },
    injectRegister: "auto",
    registerType: "autoUpdate",
    workbox: {
      navigateFallback: "/",
      runtimeCaching: [
        {
          urlPattern: "/",
          handler: "NetworkFirst",
        },
        {
          urlPattern: '.*',
          handler: 'NetworkFirst',
          method: 'GET',
          options: {
            cacheName: 'offlineCache',
            expiration: {
              maxEntries: 200,
              maxAgeSeconds: 60 * 60 * 24 * 7, // Cache pendant une semaine
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        },
        {
          urlPattern: /^https:\/\/api\.mapbox\.com\/.*/i,
          handler: "CacheFirst",
          options: {
            cacheName: "mapbox-cache",
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
        {
          urlPattern: ({ url }) => {
            return url.pathname.startsWith("/api");
          },
          handler: "CacheFirst" as const,
          options: {
            cacheName: "api-cache",
            cacheableResponse: { statuses: [0, 200] },
          },
        },
      ],
    },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 360, // 360 for testing only
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
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
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      MAPBOX_TOKEN: process.env.MAPBOX_TOKEN,
    },
  },
  devtools: { enabled: true },
});