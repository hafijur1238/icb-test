// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: "http://103.174.50.71:8080",
    },
  },
  nitro: {
    devProxy: {
      "/v1/api": {
        target: "http://103.174.50.71:8080",
        changeOrigin: true,
        pathRewrite: { "^v1/api": "" },
        // Bypass uploadthing requests but proxy other API requests
        bypass: (req) => {
          // Check if the request URL includes uploadthing
          if (req.url?.includes("uploadthing")) {
            return true; // Skip proxy for uploadthing
          }
          // Process all other API requests
          return false;
        },
      },
    },
  },
  // Keep uploadthing configuration
  uploadthing: {
    dev: process.env.NODE_ENV !== 'production',
  },
  future: {
    compatibilityVersion: 4,
  },

  colorMode: {
    preference: "light",
  },

  experimental: {
    sharedPrerenderData: false,
    compileTemplate: true,
    resetAsyncDataToUndefined: true,
    templateUtils: true,
    relativeWatchPaths: true,
    defaults: {
      useAsyncData: {
        deep: true,
      },
    },
  },

  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false,
    },
  },

  image: {
    domains: ["https://cdn.dummyjson.com"],
  },

  devtools: { enabled: true },

  modules: [
    "@nuxt/icon",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "@nuxt/ui",
    "@uploadthing/nuxt",
  ],
  googleFonts: {
    families: {
      Montserrat: true,
    },
  },

  compatibilityDate: "2024-11-01",
});
