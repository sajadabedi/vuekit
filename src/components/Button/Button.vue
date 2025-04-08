<template>
  <button
    v-bind="$attrs"
    :class="[buttonVariants({ variant })]"
    :disabled="disabled"
    @click="$emit('click', $event)"
    data-slot="control"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { buttonVariants, type ButtonProps } from '.'

withDefaults(defineProps<ButtonProps>(), {
  variant: 'default',
  disabled: false
})

defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()
</script>
