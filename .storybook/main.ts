import type { StorybookConfig } from '@storybook/vue3-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|ts)', '../src/**/*.mdx'],

  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-designs',
    '@storybook/addon-docs'
  ],

  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  }
};

export default config;
