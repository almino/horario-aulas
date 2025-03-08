import { fetchCalendarObjects } from "tsdav";

export default async (url, auth, params = {}) => {
  try {
    // console.log("Params:", params);

    /* Baixa os eventos do calendário */
    let objs = await fetchCalendarObjects({
      calendar: {
        url: url,
      },
      expand: true,
      headers: {
        authorization: auth,
      },
      ...params,
    });
    // console.log("Calendar objects:", objs);

    return objs;
  } catch (e) {
    console.error("Error fetching calendar:", e);
  }
};
