import { cva } from 'class-variance-authority'

export type Side = 'top' | 'right' | 'bottom' | 'left'

export const tooltipVariants = cva(
  ['z-50 overflow-hidden rounded-md bg-contrast px-2 py-1 text-sm text-white shadow-floating'],
  {
    variants: {
      side: {
        top: '',
        right: '',
        bottom: '',
        left: ''
      }
    },
    defaultVariants: {
      side: 'top'
    }
  }
)

export interface TooltipProps {
  content: string
  side?: Side
  className?: string
  delay?: number
}

export { default as Tooltip } from './Tooltip.vue'
