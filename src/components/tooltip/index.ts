import { cva } from 'class-variance-authority';
import type { HTMLAttributes } from 'vue';

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
);

export type TooltipVariants = NonNullable<Parameters<typeof tooltipVariants>[0]>;

export interface TooltipProps {
  content: string;
  side?: 'top' | 'right' | 'bottom' | 'left';
  class?: HTMLAttributes['class'];
  delay?: number;
}

export { default as Tooltip } from './Tooltip.vue';
