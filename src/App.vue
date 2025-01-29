<script setup lang="ts">
import AppBar from "~/components/AppBar.vue";
import WeekView from "~/components/WeekView.vue";
</script>

<template>
  <v-layout>
    <AppBar />

    <v-main class="grid">
      <WeekView />
    </v-main>
  </v-layout>
</template>

<style scoped>
.v-layout {
  flex-direction: column;
  min-height: 100lvh;
}

.v-main {
  height: 100%;
}
</style>
