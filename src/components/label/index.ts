import { cva } from 'class-variance-authority'

export const labelVariants = cva(['text-base peer-disabled:cursor-not-allowed peer-disabled:opacity-70'])

export interface LabelProps {
  class?: string
}
