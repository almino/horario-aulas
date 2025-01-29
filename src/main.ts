import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import luxon from "./constants/luxon";
import colors from "./constants/colors";

/* ============================================ */

const app = createApp(App);

// (Object.keys(luxon) as (keyof typeof luxon)[]).forEach(key => {
//   app.provide(key, luxon[key]);
// });
app.provide("colors", colors);
app.provide("first-day", luxon.firstDay);
app.provide("today", luxon.today);
app.provide("turnos", luxon.turnos);
app.provide("week-days", luxon.weekDays);
app.provide("week-settings", luxon.weekSettings);

app.mount("#app");

export default app;
