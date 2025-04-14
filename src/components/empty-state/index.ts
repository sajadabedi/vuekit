import type { Component, HTMLAttributes } from 'vue'

export interface EmptyStateProps {
  heading?: string
  icon?: Component
  class?: HTMLAttributes['class']
}

export { default as EmptyState } from './EmptyState.vue'
