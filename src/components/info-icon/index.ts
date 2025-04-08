import { cva } from 'class-variance-authority'

export const infoIconVariants = cva('text-default focus:outline-none')

export interface InfoProps {
  content: string
}

export { default as InfoIcon } from './InfoIcon.vue'
