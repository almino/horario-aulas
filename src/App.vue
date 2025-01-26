<script setup lang="ts">
import { ref } from "vue";
import { invoke } from "@tauri-apps/api/core";

const greetMsg = ref("");
const name = ref("");

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  greetMsg.value = await invoke("greet", {
    name: name.value,
  });
}
</script>

<template>
  <main
    class="gap-2 grid grid-cols-2 h-lvh max-w-svw px-2 py-2 w-swv"
  >
    <div
      class="dias gap-y-2 grid place-items-stretch font-bold text-right"
    >
      <div>&nbsp;</div>
      <div>seg</div>
      <div>ter</div>
      <div>qua</div>
      <div>qui</div>
      <div>sex</div>
    </div>
    <div
      class="turnos gap-2 grid place-items-stretch overflow-x-auto text-center"
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
  grid-template-columns: min-content auto;

  & > .dias,
  & > .turnos {
    grid-template-rows: min-content repeat(
        5,
        auto
      );
  }
}

.dias > :first-child {
  visibility: hidden;
}

.turnos {
  grid-template-columns: repeat(3, min-content);

  & > :nth-child(-n + 3) {
    font-weight: bold;
  }
}
</style>
