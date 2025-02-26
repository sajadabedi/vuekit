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
  'inline-flex items-center justify-center rounded-md text-base color-sample font-medium h-10 px-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-brand text-on-surface hover:bg-brand/90',
        secondary: 'bg-neutral-200 text-neutral-900 hover:bg-neutral-300',
        ghost: 'hover:bg-neutral-100 hover:text-neutral-900',
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
