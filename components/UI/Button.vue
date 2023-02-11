<template>
  <button
    class="relative border-2 rounded-md px-6 py-3 font-medium select-none outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
    :class="variantButtonClass.get(variant) ?? variantButtonClass.get('default')">
    <div
      class="overlay absolute h-full w-full top-0 left-0 pointer-events-none bg-opacity-0"
      aria-hidden
      :class="variantOverlayClass.get(variant) ?? null"></div>
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  variant: "primary" | "outlined";
}

const props = defineProps<Props>();
const { variant } = toRefs(props);

const variantButtonClass = new Map<string, string>([
  ["primary", "bg-black border-text text-light focus:ring-text"],
  ["outlined", "bg-light text-text border-text focus:ring-text"],
  ["default", "bg-light text-text border-text"],
]);

const variantOverlayClass = new Map<string, string>([
  ["primary", "bg-white"],
  ["outlined", "bg-text"],
]);
</script>

<style scoped>
button {
  &:hover,
  &:focus {
    .overlay {
      @apply bg-opacity-10;
    }
  }
}
</style>
