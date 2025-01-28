import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import {
  DateTime,
  Settings,
  WeekdayNumbers,
  WeekSettings,
} from "luxon";

const weekSettings: WeekSettings = {
  firstDay: 7,
  minimalDays: 1,
  weekend: [6, 7],
};

Settings.defaultWeekSettings = weekSettings;

const today = DateTime.local({ locale: "pt-BR" });

/* ============================================ */

const firstDay = today.startOf("week");
const dayNumber: WeekdayNumbers = parseInt(
  today.toFormat("c")
) as WeekdayNumbers;

if (weekSettings.weekend.includes(dayNumber)) {
  firstDay.plus({ week: 1 });
}

const weekDays: DateTime[] = [];

for (let i = 0; i < 7; i++) {
  let d = firstDay.plus({ days: i });
  let n = parseInt(
    d.toFormat("c")
  ) as WeekdayNumbers;
  if (weekSettings.weekend.includes(n)) continue;
  weekDays.push(d);
}

/* ============================================ */

const app = createApp(App);

app.provide("first-day", firstDay);
app.provide("today", today);
app.provide("turnos", [
  "manhã",
  "tarde",
  // "noite",
]);
app.provide("week-days", weekDays);
app.provide("week-settings", weekSettings);

app.mount("#app");
