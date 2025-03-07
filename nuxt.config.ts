import vuetify, {
  transformAssetUrls,
} from "vite-plugin-vuetify";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ["vuetify"],
  },
  compatibilityDate: "2024-11-01",
  css: ["~/assets/style.css"],
  devtools: { enabled: true },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook(
        "vite:extendConfig",
        (config) => {
          // @ts-expect-error
          config.plugins.push(
            vuetify({ autoImport: true }),
          );
        },
      );
    },
    "@vite-pwa/nuxt",
  ],
  runtimeConfig: {
    public: {
      // can be overridden by NUXT_PUBLIC_GUEST_CALENDAR environment variable
      guestCalendar: "",
      // can be overridden by NUXT_PUBLIC_GUEST_CALENDAR_AUTH environment variable
      guestCalendarAuth: "",
    },
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
