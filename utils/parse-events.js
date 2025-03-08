import ICAL from "ical.js";

export default (iCal) => {
  /* Usar https://github.com/kewisch/ical.js/wiki */
  const jcalData = ICAL.parse(iCal);
  const comp = new ICAL.Component(jcalData);

  const vevents =
    comp.getAllSubcomponents("vevent");

  // console.log("Vevents:", vevents);

  const events = vevents.map((vevent) => {
    return new ICAL.Event(vevent.jCal);
  });

  return events;
};
