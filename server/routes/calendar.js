export default defineEventHandler(
  async (event) => {
    const runtimeConfig = useRuntimeConfig();
    const guestCalendar =
      runtimeConfig.public.guestCalendar;
    // console.log("Calendar URL:", guestCalendar);

    const response = await event.$fetch(
      guestCalendar,
      {
        headers: {
          Authorization: "Basic YWRtaW46YWRtaW4=",
        },
      },
    );

    return response.data;
  },
);
