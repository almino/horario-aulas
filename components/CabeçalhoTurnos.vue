<script lang="ts" setup>
const appConfig = useAppConfig();

const jsTurnos = appConfig.turnos;
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
