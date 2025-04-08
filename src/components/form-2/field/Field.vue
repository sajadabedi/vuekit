<template>
  <div class="grid w-full gap-1">
    <slot />
  </div>
</template>

<script setup lang="ts">
export interface FieldProps {
  error?: string
}

defineProps<FieldProps>()
</script>
