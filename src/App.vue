<script setup lang="ts">
import { DateTime } from "luxon";
import { computed, inject } from "vue";
import WeekView from "./WeekView.vue";

const days: DateTime[] = inject(
  "week-days"
) as DateTime[];
const firstDay: DateTime = days[0];

const header = computed(() => {
  let ini = days[0];
  let end = days[days.length - 1];

  if (ini.year != end.year) {
    return `${ini.toFormat("D")} a
    ${end.toFormat("D")}`;
  }

  if (ini.month != end.month) {
    let i = ini
      .toFormat("D")
      .replace(`/${ini.toFormat("yyyy")}`, "");
    let e = end
      .toFormat("D")
      .replace(`/${end.toFormat("yyyy")}`, "");

    return `${i} a ${e}`;
  }

  return `${ini.toFormat("dd")} a
  ${end.toFormat("dd")} de
  ${end.toFormat("LLLL")}`;
});
</script>

<template>
  <main
    class="gap-2 grid h-lvh max-w-svw place-items-stretch px-2 py-2 w-swv"
  >
    <header class="text-center">
      <strong>
        semana
        {{ firstDay.weekNumber }} </strong
      >: {{ header }}
    </header>
    <WeekView></WeekView>
  </main>
</template>

<style scoped>
main.grid {
  grid-template-rows: max-content auto;
}
</style>
