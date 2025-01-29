import "~/style.css";
import { createApp } from "vue";
import keys from "~/constants/keys";
import luxon from "~/constants/luxon";
import vuetify from "~/vuetify";

// Components
import App from "./App.vue";

/* ============================================ */

const app = createApp(App);
app.use(vuetify);

// (Object.keys(luxon) as (keyof typeof luxon)[]).forEach(key => {
//   app.provide(key, luxon[key]);
// });
app.provide(keys.firstDay, luxon.firstDay);
app.provide(keys.today, luxon.today);
app.provide(keys.turnos, luxon.turnos);
app.provide(keys.weekDays, luxon.weekDays);
app.provide(
  keys.weekSettings,
  luxon.weekSettings
);

app.mount("#app");

export default app;
