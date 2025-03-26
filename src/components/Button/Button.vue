<template>
  <button
    :class="cn(buttonVariants({ variant }), $attrs.class ?? '')"
    :disabled="disabled"
    v-bind="$attrs"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center rounded-md py-2 px-4 cursor-pointer',
    'text-base font-medium transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2 ring-offset-black',
    'disabled:pointer-events-none disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        primary: 'bg-brand shadow-btn-brand text-white hover:bg-brand/90',
        secondary: 'border border-brand text-brand',
        ghost: 'bg-secondary',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
)

export interface Props {
  /**
   * The variant of the button
   * @default "primary"
   */
  variant?: NonNullable<Parameters<typeof buttonVariants>[0]>['variant']
  /**
   * Whether the button is disabled
   * @default false
   */
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  disabled: false,
})

defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()
</script>
