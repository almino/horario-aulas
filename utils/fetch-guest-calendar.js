import { fetchCalendarObjects } from "tsdav";

async function calendarFetcher(
  url,
  auth,
  params = {},
) {
  try {
    /* Baixa os eventos do calendário */
    const objs = await fetchCalendarObjects({
      calendar: {
        url: url,
      },
      expand: true,
      headers: {
        authorization: auth,
      },
      ...params,
    });
    console.log("Calendar objects:", objs);

    return objs;
  } catch (e) {
    console.error("Error fetching calendar:", e);
  }
}

export default async function (weekDays) {
  /* Pega os turnos de ./app.config.ts */
  const { turnos } = useAppConfig();
  // console.log("Calendar URL:", guestCalendar);

  const runtimeConfig = useRuntimeConfig();
  const { guestCalendar, guestCalendarAuth } =
    runtimeConfig.public;

  if (
    guestCalendar &&
    /* Verifica se a URL é válida */
    URL.canParse(guestCalendar)
  ) {
    const events = [];
    // console.log(weekDays);return;

    for (let day of weekDays) {
      // console.log(day);
      // continue;

      for (let t in turnos) {
        let turno = turnos[t];
        let start = day.set(turno[0]);
        let end = day.set(turno[1]);
        console.log(
          "Fetching events from",
          start.toISO(),
          "to",
          end.toISO(),
        );

        events.push(
          await calendarFetcher(
            guestCalendar,
            guestCalendarAuth,
            {
              timeRange: {
                start: start.toISO(),
                end: end.toISO(),
              },
            },
          ),
        );
      }

      events.push(
        await calendarFetcher(
          guestCalendar,
          guestCalendarAuth,
        ),
      );
    }

    return events;
  } else {
    console.error(
      "Invalid `guestCalendar` URL:",
      guestCalendar,
    );
  }

  return false;
}
