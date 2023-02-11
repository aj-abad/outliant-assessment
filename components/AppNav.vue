<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-40">
      <div class="fixed inset-0 bg-black bg-opacity-25" />
      <div class="fixed inset-0 overflow-y-auto">
        <div class="h-screen w-screen flex justify-end">
          <DialogPanel class="bg-light h-screen w-[16rem] shadow-xl">
            <div class="flex mb-4 p-4 items-center justify-between">
              <h1 class="select-none font-semibold text-2xl md:text-4xl shrink-0">
                Logo <span class="text-img-1 font-bold">.</span>
              </h1>
              <UIButton variant="outlined" @click="isOpen = false" aria-label="Close navigation menu">
                <svg viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </UIButton>
            </div>
            <nav class="flex flex-col divide-y">
              <NuxtLink to="/" class="p-4" @click="isOpen = false">Home</NuxtLink>
              <a href="#" class="block p-4" @click="isOpen = false">About</a>
              <a href="#" class="block p-4" @click="isOpen = false">Services</a>
              <NuxtLink to="/products" class="block p-4" @click="isOpen = false">
                Products
              </NuxtLink>
            </nav>

            <div class="p-4">
              <UIButton variant="primary" type="button" class="w-full"> Call to action </UIButton>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
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
    <div class="block md:hidden ml-auto">
      <UIButton variant="primary" @click="isOpen = true" aria-label="Toggle navigation">
        <svg viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </UIButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from "@headlessui/vue";

const isOpen = ref(false);

function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}
</script>

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
