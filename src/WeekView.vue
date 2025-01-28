<script setup lang="ts">
import { DateTime } from "luxon";
import { inject, ref } from "vue";
// import { invoke } from "@tauri-apps/api/core";

const days = inject("week-days") as DateTime[];
const turnos = inject("turnos") as string[];
const lenDays = ref(days.length);
const lenTurnos = ref(turnos.length);
</script>

<template>
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
</template>

<style scoped>
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
