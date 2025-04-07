import { cva } from 'class-variance-authority'

export const textFieldVariants = cva(
  [
    'flex h-9 w-full rounded-md border border-stone-muted bg-transparent px-3 py-1 text-sm shadow-sm transition-colors',
    'file:border-0 file:bg-transparent file:text-sm file:font-medium',
    'placeholder:text-stone-muted',
    'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-stone-contrast',
    'disabled:cursor-not-allowed disabled:opacity-50'
  ],
  {
    variants: {
      error: {
        true: 'border-red-contrast focus-visible:ring-red-contrast'
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
