<template>
  <button
    :class="[
      // Base styles
      'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      // Variant styles
      {
        'bg-brand text-on-surface hover:bg-brand/90 shadow-btn-brand':
          variant === 'primary',
        'bg-neutral-200 text-neutral-900 hover:bg-neutral-300': variant === 'secondary',
        'hover:bg-neutral-100 hover:text-neutral-900': variant === 'ghost',
        'border border-neutral-200 bg-transparent hover:bg-neutral-100 hover:text-neutral-900':
          variant === 'outline',
        'text-brand underline-offset-4 hover:underline': variant === 'link',
      },
      // Size styles
      {
        'h-8 px-3 text-xs': size === 'sm',
        'h-10 px-4': size === 'md',
        'h-12 px-8 text-lg': size === 'lg',
      },
    ]"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
export interface Props {
  /**
   * The variant of the button
   * @default "primary"
   */
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'link'
  /**
   * The size of the button
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg'
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
