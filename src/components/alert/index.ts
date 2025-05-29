import { cva, type VariantProps } from 'class-variance-authority';

export { default as Alert } from './Alert.vue';
export { default as AlertDescription } from './AlertDescription.vue';
export { default as AlertTitle } from './AlertTitle.vue';

export const alertVariants = cva(
  'relative w-full rounded-md overflow-hidden p-3 bg-elevated-on-dark text-base grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-2 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5',
  {
    variants: {
      variant: {
        default: 'shadow-input text-secondary',
        critical:
          'text-critical [&>svg]:text-critical bg-critical-muted ring-1 ring-red-500/30 dark:shadow-none shadow dark:ring-red-500/30 shadow-red-200/50',
        warning:'text-warning bg-warning-muted ring-1 ring-yellow-500/30 dark:shadow-none shadow dark:ring-yellow-500/20 shadow-amber-200/50 before:"" before:absolute before:inset-0 before:[background-image:repeating-linear-gradient(-45deg,transparent,transparent_12px,var(--color-amber-400)_12px,var(--color-amber-400)_24px)] before:mask-l-from-0% before:mask-l-to-40% before:opacity-10 dark:before:opacity-3 before:z-0'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
);

export type AlertVariants = VariantProps<typeof alertVariants>;