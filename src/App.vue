<script setup lang="ts">
import { computed, ref, reactive } from "vue";
import {
  DateTime,
  Settings,
  WeekdayNumbers,
  WeekSettings,
} from "luxon";
// import { invoke } from "@tauri-apps/api/core";

const wSettings: WeekSettings = {
  firstDay: 7,
  minimalDays: 1,
  weekend: [6, 7],
};

const jsTurnos = [
  "manhã",
  "tarde",
  // "noite",
];
const lenTurnos = ref(jsTurnos.length);
const turnos = ref(jsTurnos);

Settings.defaultWeekSettings = wSettings;

const today = DateTime.local({ locale: "pt-BR" });
const startDay = reactive(today.startOf("week"));
const dayNumber: WeekdayNumbers = parseInt(
  today.toFormat("c")
) as WeekdayNumbers;

if (wSettings.weekend.includes(dayNumber)) {
  startDay.plus({ week: 1 });
}

const jsDays: DateTime[] = [];

for (let i = 0; i < 7; i++) {
  let d = startDay.plus({ days: i });
  let n = parseInt(d.toFormat("c")) as WeekdayNumbers;
  if (wSettings.weekend.includes(n)) continue;
  jsDays.push(d);
}

const days = ref(jsDays);
const lenDays = ref(jsDays.length);
const weekNumber = ref(today.weekNumber);

const header = computed(() => {
  let ini = jsDays[0];
  let end = jsDays[jsDays.length - 1];

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
      <strong>semana {{ weekNumber }}</strong
      >:
      {{ header }}
      <!-- {{ today.toFormat("c") }} -->
    </header>
    <section class="gap-2 grid grid-cols-2">
      <div
        class="dias gap-y-2 grid items-center place-items-stretch font-bold text-right"
      >
        <div class="font-thin text-left text-xs">
          <!-- nº. {{ weekNumber }} -->
        </div>
        <div v-for="d in days">
          <div
            class="text-gray-400 font-normal text-xs"
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
        <div
          v-for="t in turnos"
          class="turno font-bold"
          :style="{ alignSelf: 'end' }"
        >
          {{ t }}
        </div>
        <div>APS1</div>
        <div>DHP1</div>
        <div>Genitourinário</div>
        <div>Genitourinário</div>
        <div>Genitourinário</div>
        <div>Genitourinário</div>
        <div>Genitourinário</div>
        <div>Genitourinário</div>
        <div>Genitourinário</div>
        <div>Genitourinário</div>
      </div>
    </section>
  </main>
</template>

<style scoped>
main.grid {
  grid-template-rows: max-content auto;
}

section.grid {
  grid-template-columns: 3em auto;

  & > .dias,
  & > .turnos {
    grid-template-rows: 1em repeat(
        v-bind("lenDays"),
        1fr
      );
  }
}

.dias > :first-child {
  align-self: end;
  font-weight: normal;
  /* visibility: hidden; */
}

.turnos {
  grid-template-columns: repeat(
    v-bind("lenTurnos"),
    min-content
  );
}
</style>
