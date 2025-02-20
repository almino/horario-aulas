// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";

import { md2 } from "vuetify/blueprints";
import LuxonAdapter from "@date-io/luxon";
// Translations provided by Vuetify
import { pt } from "vuetify/locale";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    blueprint: md2,
    date: {
      adapter: LuxonAdapter,
    },
    locale: {
      locale: "pt-BR",
      fallback: "pt",
    },
  });
  app.vueApp.use(vuetify);
});
