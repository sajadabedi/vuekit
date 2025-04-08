import { cva } from 'class-variance-authority'

export const inputVariants = cva(
  [
    'flex w-full h-9 rounded-md bg-elevated-on-dark px-2 p-2 text-base shadow-input',
    'transition-colors duration-200',
    'file:border-0 file:bg-transparent file:text-sm file:font-medium',
    'placeholder:text-stone-muted',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 ring-offset-[var(--ui-color-bg-body)]',
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

export interface InputProps {
  modelValue?: string
  id?: string
  error?: boolean
  placeholder?: string
  disabled?: boolean
}

export { default as Input } from './Input.vue'
