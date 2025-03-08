<script lang="ts" setup>
import { DateTime } from "luxon";
import { ref } from "vue";

const luxon = useLuxon();

const days = luxon.weekDays;
const lenWeek = luxon.lenWeek;
</script>

<template>
  <div class="border-e-sm grid" id="dias">
    <div class="font-thin text-left text-xs">
      &nbsp;
      <!-- nº. {{ weekNumber }} -->
    </div>
    <div v-for="d in days" class="dia border-t-sm">
      <div class="font-weight-light text-caption text-disabled">
        {{ d.toFormat("dd") }}
        {{ d.toFormat("LLL") }}
      </div>
      <span class="font-weight-medium">
        {{ d.toFormat("ccc") }}
      </span>
    </div>
  </div>
</template>

<style scoped>
#dias {
  grid-template-rows: 1.5em repeat(v-bind("lenWeek"), 1fr);

  & > .dia {
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.5em;
  }
}
</style>
