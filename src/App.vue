<script setup lang="ts">
import { ref, reactive } from "vue";
import { DateTime, Settings } from "luxon";
import { invoke } from "@tauri-apps/api/core";

const wSettings = {
  firstDay: 7,
  minimalDays: 1,
  weekend: [6, 7],
};

Settings.defaultWeekSettings = wSettings;

const today = DateTime.local({locale: "pt-BR"});
const startDay = reactive(
  today.startOf("week")
);
const dayNumber = parseInt(today.toFormat("c"));

if (wSettings.weekend.includes(dayNumber)) {
  startDay.plus({ week: 1 });
}

const jsDays = [];

for (let i = 0; i < 7; i++) {
  let d = startDay.plus({ days: i });
  let n = parseInt(d.toFormat("c"));
  if (wSettings.weekend.includes(n)) continue;
  jsDays.push(d);
}

const days = ref(jsDays);
const weekNumber = reactive(today.weekNumber);
</script>

<template>
  <main
    class="gap-2 grid grid-cols-2 h-lvh max-w-svw px-2 py-2 w-swv"
  >
    <div class="col-span-2 text-center">
      {{ today.toFormat("DDDD") }}
      <!-- {{ today.toFormat("c") }} -->
    </div>
    <div
      class="dias gap-y-2 grid items-center place-items-stretch font-bold text-right"
    >
      <div class="font-thin text-left text-xs">
        nº. {{ weekNumber }}
      </div>
      <div v-for="d in days">
        <div
          class="text-gray-400 text-normal text-xs"
        >
          {{ d.toFormat("dd") }}
          {{ d.toFormat("LLL") }}
        </div>
        {{ d.toFormat("ccc") }}
      </div>
    </div>
    <div
      class="turnos gap-2 grid items-center place-items-stretch overflow-x-auto text-center"
    >
      <div>manhã</div>
      <div>tarde</div>
      <div>noite</div>
      <div>APS1</div>
      <div>DHP1</div>
      <div></div>
      <div>Genitourinário</div>
      <div>Genitourinário</div>
      <div></div>
      <div>Genitourinário</div>
      <div>Genitourinário</div>
      <div></div>
      <div>Genitourinário</div>
      <div>Genitourinário</div>
      <div></div>
      <div>Genitourinário</div>
      <div>Genitourinário</div>
      <div></div>
    </div>
  </main>
</template>

<style scoped>
main.grid {
  grid-template-columns: 3em auto;
  grid-template-rows: min-content auto;

  & > .dias,
  & > .turnos {
    grid-template-rows: 1em repeat(5, 1fr);
  }
}

.dias > :first-child {
  align-self: end;
  font-weight: normal;
  /* visibility: hidden; */
}

.turnos {
  grid-template-columns: repeat(3, min-content);

  & > :nth-child(-n + 3) {
    align-self: end;
    font-weight: bold;
  }
}
</style>
