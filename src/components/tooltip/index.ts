import { cva } from 'class-variance-authority'

export type Side = 'top' | 'right' | 'bottom' | 'left'

export const tooltipVariants = cva(
  [
    'z-50 overflow-hidden rounded-md bg-contrast px-2 py-1 text-sm text-white shadow-floating'
    // 'animate-in fade-in-0 zoom-in-95',
    // 'data-[side=bottom]:slide-in-from-top-2',
    // 'data-[side=left]:slide-in-from-right-2',
    // 'data-[side=right]:slide-in-from-left-2'
    // 'data-[side=top]:slide-in-from-bottom-2'
  ],
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
