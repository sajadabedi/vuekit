import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  [
    // Layout
    'text-action font-medium relative min-w-15 isolate inline-flex items-center justify-center rounded-lg py-2 px-1.5 cursor-pointer',
    // Transitions
    'transition-all',
    // Focus, Disable, Active
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-1 ring-offset-[var(--ui-color-bg-body)]',
    'disabled:pointer-events-none disabled:opacity-70',
    'active:scale-99',
  ],
  {
    variants: {
      variant: {
        primary:
          'bg-accent bg-linear-to-t from-accent to-white/10 ease-linear shadow-[0px_0px_0px_1px_var(--shadow-ring-accent)_inset,0px_2px_0px_0px_var(--shadow-ring-light)_inset] text-white hover:bg-accent/90',
        default: 'border border-brand text-accent',
        ghost: 'bg-secondary',
        plain: 'bg-transparent ',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
)

export interface ButtonProps {
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
