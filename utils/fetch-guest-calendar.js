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
    let events = [];
    // console.log(weekDays);return;

    for (let day of weekDays) {
      // console.log(day);
      // continue;

      for (let t in turnos) {
        let turno = turnos[t];
        let start = day.set(turno[0]);
        let end = day.set(turno[1]);

        let objs = await fetchCalendarObjects(
          guestCalendar,
          guestCalendarAuth,
          {
            timeRange: {
              start: start.toISO(),
              end: end.toISO(),
            },
          },
        );

        if (
          Array.isArray(objs) &&
          objs.length > 0
        ) {
          let parsedEvents = objs.map((obj) => {
            return parseEvents(obj.data);
            // console.log("Parsed events:", parsed);
            // return parsed;
          });
          events.push(...parsedEvents);
        } else events.push(objs);
      }
    }

    console.log("Fetched events: ", events);
    return events;
  } else {
    console.error(
      "Invalid `guestCalendar` URL:",
      guestCalendar,
    );
  }

  return false;
}
