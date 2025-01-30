<script lang="ts" setup>
import { DateTime } from "luxon";
import { inject, ref, useTemplateRef } from "vue";
import keys from "~/constants/keys";
import CabeçalhoTurnos from "./CabeçalhoTurnos.vue";
// import { invoke } from "@tauri-apps/api/core";

const days = inject(keys.weekDays) as DateTime[];
const lenDays = ref(days.length);
const jsTurnos = inject(keys.turnos) as string[];
const lenTurnos = ref(jsTurnos.length);
const elTurnos = useTemplateRef("turnos");

function onScroll(evt: WheelEvent) {
  elTurnos.value.scrollLeft += evt.deltaY;
}
</script>

<template>
  <div class="grid" id="turnos" ref="turnos" @wheel.prevent="onScroll">
    <CabeçalhoTurnos />
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
</template>

<style scoped>
#turnos {
  grid-template-columns: repeat(v-bind("lenTurnos"), min-content);
  grid-template-rows: 1.5em repeat(v-bind("lenDays"), 1fr);

  overflow-x: scroll;
  overflow-y: none;
  padding-top: 0.05rem;

  & > * {
    padding: 0 0.5em;
  }
}
</style>
