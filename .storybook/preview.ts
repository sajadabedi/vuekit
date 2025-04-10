import type { Preview } from '@storybook/vue3';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import '../src/main.css';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    // backgrounds: {
    //   default: 'light'
    // },
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
};

export default preview;
