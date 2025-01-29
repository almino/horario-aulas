<script setup lang="ts">
import { DateTime } from "luxon";
import { computed, inject } from "vue";
import WeekView from "./components/WeekView.vue";
import keys from "./constants/keys";

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
  <v-layout class="rounded rounded-md">
    <v-app-bar color="primary" :title="title"></v-app-bar>

    <v-navigation-drawer>
      <v-list>
        <v-list-item title="Navigation drawer"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <!-- <WeekView /> -->
       Tabela aqui!
    </v-main>
  </v-layout>
</template>

<style scoped>
main {
  /* display: grid;
  grid-template-rows: max-content auto; */
  height: 100lvh;
  max-width: 100svw;
}
</style>
