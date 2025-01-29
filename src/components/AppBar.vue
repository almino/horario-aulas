<script setup lang="ts">
import { DateTime } from "luxon";
import { computed, inject } from "vue";
import keys from "~/constants/keys";

const days: DateTime[] = inject(
  keys.weekDays
) as DateTime[];
const firstDay: DateTime = days[0];

const title = computed(() => {
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
  <v-app-bar
    color="primary"
    :title="title"
  ></v-app-bar>
</template>
