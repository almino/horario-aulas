import {
  DateTime,
  Settings,
  type WeekdayNumbers,
  type WeekSettings,
} from "luxon";

export default defineAppConfig({
  formats: {
    dayNumber: "c",
  },
  locale: "pt-BR",
  title: "Mio Tem",
  theme: {
    dark: true,
    colors: {
      primary: "#ff0000",
    },
  },
  turnos: [
    "manhã",
    "tarde",
    // "noite",
  ],
  weekSettings: {
    firstDay: 7,
    minimalDays: 1,
    weekend: [6, 7],
  } as WeekSettings,
});
