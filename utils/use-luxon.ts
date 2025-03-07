import {
  DateTime,
  Settings,
  type WeekdayNumbers,
} from "luxon";

export default function () {
  const appConfig = useAppConfig();
  const weekSettings = appConfig.weekSettings;

  const defaultLocale = appConfig.locale;

  Settings.defaultWeekSettings = weekSettings;

  const today = DateTime.local({
    locale: defaultLocale,
  });

  /* ============================================ */

  const firstDay = today.startOf("week");
  const dayNumber: WeekdayNumbers = parseInt(
    today.toFormat(appConfig.formats.dayNumber),
  ) as WeekdayNumbers;

  if (weekSettings.weekend.includes(dayNumber)) {
    firstDay.plus({ week: 1 });
  }

  const weekDays: DateTime[] = [];

  for (let i = 0; i < 7; i++) {
    let d = firstDay.plus({ days: i });
    let n = parseInt(
      d.toFormat("c"),
    ) as WeekdayNumbers;
    if (weekSettings.weekend.includes(n))
      continue;
    weekDays.push(d);
  }

  return {
    firstDay,
    lenWeek: weekDays.length,
    today,
    weekDays,
  };
}
