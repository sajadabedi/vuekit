<template>
  <button
    :class="cn(buttonVariants({ variant, size }), $attrs.class ?? '')"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-base color-sample font-medium  transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-brand text-on-surface hover:bg-brand/90 shadow-btn-brand',
        secondary: 'bg-neutral-200 text-neutral-900 hover:bg-neutral-300',
        ghost: 'hover:bg-neutral-100 hover:text-neutral-900',
        outline:
          'border border-neutral-200 bg-transparent hover:bg-neutral-100 hover:text-neutral-900',
        link: 'text-brand underline-offset-4 hover:underline',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4',
        lg: 'h-12 px-8 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
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
   * The size of the button
   * @default "md"
   */
  size?: NonNullable<Parameters<typeof buttonVariants>[0]>['size']
  /**
   * Whether the button is disabled
   * @default false
   */
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
})

defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()
</script>
