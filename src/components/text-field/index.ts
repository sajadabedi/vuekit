import { cva } from 'class-variance-authority'

export const textFieldVariants = cva(
  [
    // Layout
    'flex w-full h-9 rounded-md bg-elevated-on-dark px-2 p-2 text-base shadow-input',
    // Transitions
    'transition-colors duration-200',
    // File
    'file:border-0 file:bg-transparent file:text-sm file:font-medium',
    // Placeholder
    'placeholder:text-stone-muted',
    // Focus
    'focus-within:outline-none focus-within:ring-2 focus-within:ring-accent/70 focus-within:ring-offset-2 ring-offset-[var(--ui-color-bg-body)]',
    // Disabled
    'disabled:cursor-not-allowed disabled:opacity-70'
  ],
  {
    variants: {
      error: {
        true: 'border-critical focus-visible:ring-critical'
      }
    }
  }
)

export interface TextFieldProps {
  modelValue?: string
  label?: string
  error?: string
  id?: string
  placeholder?: string
  disabled?: boolean
}
