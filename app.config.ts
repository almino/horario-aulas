import { type WeekSettings } from "luxon";

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
  turnos: {
    manhã: [
      { hour: 8, minute: 0 },
      { hour: 11, minute: 0 },
    ],
    tarde: [
      { hour: 14, minute: 0 },
      { hour: 17, minute: 0 },
    ],
    // "noite",
  },
  weekSettings: {
    firstDay: 7,
    minimalDays: 1,
    weekend: [6, 7],
  } as WeekSettings,
});
