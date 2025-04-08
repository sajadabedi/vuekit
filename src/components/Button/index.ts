import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  [
    'text-action font-medium relative min-w-15 has-[svg]:min-w-8 max-w-32 truncate gap-1 isolate inline-flex items-center justify-center rounded-md py-2 px-2 cursor-pointer',
    'transition-colors duration-500',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 ring-offset-[var(--ui-color-bg-body)]',
    'disabled:pointer-events-none disabled:opacity-70',
    'active:scale-99'
  ],
  {
    variants: {
      variant: {
        primary:
          'bg-accent bg-linear-to-t from-accent to-white/10 ease-linear shadow-[0px_0px_0px_1px_var(--ui-shadow-ring-accent)_inset,0px_2px_0px_0px_var(--ui-shadow-ring-light)_inset] text-white hover:bg-accent/90',
        default: 'bg-interactive text-default shadow-interactive hover:bg-secondary',
        ghost: 'bg-transparent hover:bg-tertiary',
        critical:
          'bg-critical text-white bg-linear-to-t from-critical to-white/10 ease-linear shadow-[0px_0px_0px_1px_var(--ui-shadow-ring-critical)_inset,0px_2px_0px_0px_var(--ui-shadow-ring-light)_inset] hover:bg-critical/90'
      }
    },
    defaultVariants: {
      variant: 'primary'
    }
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
