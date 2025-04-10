import { cva, type VariantProps } from 'class-variance-authority';

export { default as Alert } from './Alert.vue';
export { default as AlertDescription } from './AlertDescription.vue';
export { default as AlertTitle } from './AlertTitle.vue';

export const alertVariants = cva(
  'relative w-full rounded-md px-4 py-3 bg-elevated-on-dark shadow-input text-base grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current',
  {
    variants: {
      variant: {
        default: '',
        destructive: 'text-critical [&>svg]:text-current *:data-[slot=alert-description]:text-critical/90'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
);

export type AlertVariants = VariantProps<typeof alertVariants>;
