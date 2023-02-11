<template>
  <div class="bg-light text-text">
    <AppNav />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const dataScroll = ref({
  "data-scroll": "",
  "data-scroll-class": "in-view",
  "data-scroll-offset": "15%",
});
provide("dataScroll", dataScroll);
</script>

<style></style>
