import type { Preview } from '@storybook/vue3'
import '../src/main.css'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
      default: 'light'
      // values: [
      //   { name: 'light', value: '#fff' },
      //   { name: 'dark', value: 'var(--ui---color-accent' },
      // ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    docs: {
      inlineStories: true
    }
  }
}

export default preview
