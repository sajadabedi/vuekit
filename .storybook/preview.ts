import '@/main.css';
import type { Preview } from '@storybook/vue3-vite';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
      values: [
        { name: 'Dark', value: 'var(--ui-color-bg-body)' },
        { name: 'Light', value: 'var(--ui-color-bg-body)' }
      ],
      default: 'Light'
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
  },
};

export default preview;
