<template>
  <p class="text-sm font-medium text-critical">
    <slot />
  </p>
</template>

<script setup lang="ts">
export interface FieldErrorProps {
  asChild?: boolean
}

defineProps<FieldErrorProps>()
</script>