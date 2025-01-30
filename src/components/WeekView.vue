<script lang="ts" setup>
import { DateTime } from "luxon";
import { inject, ref, useTemplateRef } from "vue";
import keys from "~/constants/keys";
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
  <v-container class="grid">
    <div class="border-e-sm grid" id="dias">
      <div class="font-thin text-left text-xs">
        &nbsp;
        <!-- nº. {{ weekNumber }} -->
      </div>
      <div
        v-for="d in days"
        class="dia border-t-sm"
      >
        <div
          class="font-weight-light text-caption text-disabled"
        >
          {{ d.toFormat("dd") }}
          {{ d.toFormat("LLL") }}
        </div>
        <span class="font-weight-medium">
          {{ d.toFormat("ccc") }}
        </span>
      </div>
    </div>
    <div
      class="grid"
      id="turnos"
      ref="turnos"
      @wheel.prevent="onScroll"
    >
      <div
        v-for="t in jsTurnos"
        class="font-weight-medium border-b-sm text-center turno"
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
  </v-container>
</template>

<style scoped>
.v-container {
  grid-template-columns: 3.4em auto;
}

#dias,
#turnos {
  grid-template-rows: 1.5em repeat(
      v-bind("lenDays"),
      1fr
    );
}

#dias > .dia {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5em;
}

#turnos {
  grid-template-columns: repeat(
    v-bind("lenTurnos"),
    min-content
  );
  overflow-x: scroll;
  overflow-y: none;
  padding-top: 0.05rem;

  & > * {
    padding: 0 0.5em;
  }
}
</style>
