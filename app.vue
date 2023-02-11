<template>
  <div class="bg-light">
    <div class="container py-8 flex items-center">
      <h1 class="font-semibold text-4xl shrink-0">Logo <span class="text-low-emphasis">.</span></h1>
      <nav class="px-4 grow flex gap-16 justify-center items-center font-medium">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Products</a>
      </nav>
      <UIButton variant="primary" type="button"> Call to action </UIButton>
    </div>
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
