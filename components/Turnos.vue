<script setup>
import { ref, useTemplateRef } from "vue";
import CabeçalhoTurnos from "./CabeçalhoTurnos.vue";

const appConfig = useAppConfig();
const { turnos: jsTurnos } = appConfig;
const luxon = useLuxon();
const events = fetchGuestCalendar(luxon.weekDays);

const elTurnos = useTemplateRef("turnos");
const lenTurnos = ref(
  Object.keys(jsTurnos).length,
);
const lenWeek = ref(luxon.lenWeek);

function onScroll(evt) {
  if (elTurnos.value) {
    elTurnos.value.scrollLeft += evt.deltaY;
  }
}
</script>

<template>
  <div
    class="grid"
    id="turnos"
    ref="turnos"
    @wheel.prevent="onScroll"
  >
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
  grid-template-columns: repeat(
    v-bind("lenTurnos"),
    minmax(min-content, 1fr)
  );
  grid-template-rows: 1.5em repeat(
      v-bind("lenWeek"),
      1fr
    );

  overflow-x: scroll;
  overflow-y: none;
  padding-top: 0.05rem;

  & > * {
    padding: 0 0.5em;
  }
}
</style>
