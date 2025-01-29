import "vuetify/styles";
import { createVuetify } from "vuetify";
import { md2 } from "vuetify/blueprints";
import colors from "vuetify/util/colors";
import LuxonAdapter from "@date-io/luxon";

export default createVuetify({
  blueprint: md2,
  date: {
    adapter: LuxonAdapter,
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

declare module "vuetify" {
  namespace DateModule {
    interface Adapter extends LuxonAdapter {}
  }
}
