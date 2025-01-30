<script lang="ts" setup>
// import { inject, ref, useTemplateRef } from "vue";
// import keys from "~/constants/keys";
// import { invoke } from "@tauri-apps/api/core";
import DiasSemanaRetrato from "./DiasSemanaRetrato.vue";
import Turnos from "./Turnos.vue";
</script>

<template>
  <v-container class="grid">
    <DiasSemanaRetrato />
    <Turnos />
  </v-container>
</template>

<style scoped>
.v-container {
  grid-template-columns: 3.4em auto;
}
</style>
