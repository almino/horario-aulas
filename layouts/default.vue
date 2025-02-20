<script lang="ts" setup>
import { usePreferredColorScheme } from "@vueuse/core";

const theme = ref("light");

onMounted(() => {
  theme.value = usePreferredColorScheme().value;
});
</script>

<template>
  <v-app :theme="theme">
    <AppBar />
    <v-navigation-drawer>
      <v-list>
        <v-list-item
          title="Navigation drawer"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>
