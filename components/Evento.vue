<script setup>
const { event } = defineProps(["data"]);
</script>

<template>
  {{ event.summary }}
</template>
