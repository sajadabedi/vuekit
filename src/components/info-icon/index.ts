import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface InfoProps extends PrimitiveProps {
  tooltip: string
  class?: HTMLAttributes['class']
}

export { default as InfoIcon } from './InfoIcon.vue'
