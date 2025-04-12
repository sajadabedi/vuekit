import { cva, type VariantProps } from 'class-variance-authority';

export { default as Alert } from './Alert.vue';
export { default as AlertDescription } from './AlertDescription.vue';
export { default as AlertTitle } from './AlertTitle.vue';

export const alertVariants = cva(
  'relative w-full rounded-md p-3 bg-elevated-on-dark text-base grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-2 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-secondary',
  {
    variants: {
      variant: {
        default: 'shadow-input',
        destructive:
          'text-critical [&>svg]:text-current *:data-[slot=alert-description]:text-critical/90 bg-linear-to-r from-critical/15 from-1% to-20% dark:to-critical/3 shadow-input dark:shadow-[0_0_0_1px] dark:shadow-red-400/30'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
);

export type AlertVariants = VariantProps<typeof alertVariants>;
