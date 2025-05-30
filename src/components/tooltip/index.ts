import type { HTMLAttributes } from 'vue';

export interface TooltipProps {
  content: string;
  class?: HTMLAttributes['class'];
  delay?: number;
}

export { default as Tooltip } from './Tooltip.vue';
