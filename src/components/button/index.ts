import { cva, type VariantProps } from 'class-variance-authority';
export { default as Button } from './Button.vue';

export const buttonVariants = cva(
  "text-action relative inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 focus-ring active:scale-99",
  {
    variants: {
      variant: {
        default: 'bg-interactive text-default shadow-interactive hover:bg-secondary',
        destructive:
          'bg-critical text-white bg-linear-to-t from-critical to-white/10 ease-linear shadow-[0px_0px_0px_1px_var(--ui-shadow-ring-critical)_inset,0px_2px_0px_0px_var(--ui-shadow-ring-light)_inset] hover:bg-critical/90',
        primary:
          'bg-accent bg-linear-to-t from-accent to-white/10 ease-linear shadow-[0px_0px_0px_1px_var(--ui-shadow-ring-accent)_inset,0px_2px_0px_0px_var(--ui-shadow-ring-light)_inset] text-white hover:bg-accent/90',
        ghost: 'text-default bg-transparent hover:bg-tertiary'
      },
      size: {
        default: 'px-3 py-1 h-8.5 has-[>svg]:px-2',
        sm: 'h-8 rounded-md gap-1 px-2 has-[>svg]:px-2',
        icon: 'size-8.5'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
