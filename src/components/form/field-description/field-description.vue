<template>
  <p class="text-sm text-tertiary">
    <slot />
  </p>
</template>

<script setup lang="ts">
export interface FieldDescriptionProps {
  asChild?: boolean
}

defineProps<FieldDescriptionProps>()
</script>