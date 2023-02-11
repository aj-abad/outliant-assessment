<template>
  <button
    class="rounded-md px-6 py-3 font-medium select-none"
    :class="variantClass.get(variant)">
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  variant: "primary" | "secondary";
}

const props = defineProps<Props>();
const { variant } = toRefs(props);

const variantClass = new Map<string, string>([
  ["primary", "bg-black text-light"],
  ["secondary", "bg-light text-black"],
]);
</script>
