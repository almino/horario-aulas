// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";

import { md2 } from "vuetify/blueprints";
import LuxonAdapter from "@date-io/luxon";
import colors from "vuetify/util/colors";
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
      messages: { pt },
    },
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            primary: colors.teal.darken1, // #00897B
            // secondary: colors.red.lighten4, // #FFCDD2
          },
        },
      },
    },
  });
  app.vueApp.use(vuetify);
});
