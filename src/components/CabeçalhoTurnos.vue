<script lang="ts" setup>
import { inject } from "vue";
// import { invoke } from "@tauri-apps/api/core";
import keys from "~/constants/keys";

const jsTurnos = inject(keys.turnos) as string[];
</script>

<template>
  <div
    v-for="t in jsTurnos"
    class="font-weight-medium border-b-sm text-center header"
    :style="{ alignSelf: 'end' }"
  >
    {{ t }}
  </div>
</template>
