import { cva } from 'class-variance-authority'

export const labelVariants = cva([
  'text-base flex gap-0.5 peer-disabled:cursor-not-allowed font-medium peer-disabled:opacity-70'
])

export interface LabelProps {
  class?: string
  optional?: boolean
  tooltip?: string
}
