<template>
  <button
    :class="cn(buttonVariants({ variant }), $attrs.class ?? '')"
    :disabled="disabled"
    v-bind="$attrs"
    @click="$emit('click', $event)"
    data-slot="control"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'
import { buttonVariants, type ButtonProps } from '.'

withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  disabled: false,
})

defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()
</script>
