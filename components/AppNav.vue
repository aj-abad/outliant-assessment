<template>
  <div class="custom-container py-4 md:py-8 flex items-center sticky top-0 bg-light z-20">
    <h1 class="select-none font-semibold text-2xl md:text-4xl shrink-0">
      Logo <span class="text-img-1 font-bold">.</span>
    </h1>
    <div class="hidden md:flex grow items-center">
      <nav id="app-nav" class="px-4 grow flex gap-16 justify-center items-center font-medium">
        <NuxtLink to="/">Home</NuxtLink>
        <a href="#">About</a>
        <a href="#">Services</a>
        <NuxtLink to="/products">Products</NuxtLink>
      </nav>
      <UIButton variant="primary" type="button"> Call to action </UIButton>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
#app-nav a {
  position: relative;
  &:not(.router-link-active) {
    @apply text-text text-opacity-50;
  }
  &.router-link-active::before {
    content: "";
    background: currentColor;
    position: absolute;
    bottom: -4px;
    left: 0;
    right: 0;
    height: 2px;
  }
}
</style>
