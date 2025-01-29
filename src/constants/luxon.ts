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
const turnos = [
  "manhã",
  "tarde",
  // "noite",
];

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

export default {
  firstDay,
  today,
  turnos,
  weekDays,
  weekSettings,
};
