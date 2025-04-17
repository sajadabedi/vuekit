import type { Meta, StoryObj } from '@storybook/vue3';
import { ScrollArea } from '.';

const meta: Meta<typeof ScrollArea> = {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
  argTypes: {
    type: {
      description: 'The type of scrollbar to render',
      control: 'select',
      options: ['auto', 'always', 'scroll', 'hover'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'auto' }
      }
    },
    scrollHideDelay: {
      description: '(Optional) Delay in milliseconds before hiding the scrollbar',
      control: { type: 'number', min: 0 },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '600' }
      }
    },
    class: {
      description: '(Optional) Additional CSS classes to apply to the scroll area',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'A custom scroll area component that provides a consistent scrolling experience across different browsers and platforms.'
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

const tags = Array.from({ length: 50 }, (_, i) => `v1.2.${i}`);

export const Default: Story = {
  render: () => ({
    components: { ScrollArea },
    template: `
      <ScrollArea class="h-72 w-48">
        <div class="p-4">
          <h4 class="mb-4 text-sm font-medium leading-none">Tags</h4>
          ${tags
            .map(
              (tag) => `
            <div class="text-sm" key="${tag}">${tag}</div>
          `
            )
            .join('')}
        </div>
      </ScrollArea>
    `
  })
};

export const Horizontal: Story = {
  render: () => ({
    components: { ScrollArea },
    template: `
      <ScrollArea class="w-48 whitespace-nowrap">
        <div class="flex w-max p-4">
          ${tags
            .map(
              (tag) => `
            <div class="w-48 flex-shrink-0" key="${tag}">${tag}</div>
          `
            )
            .join('')}
        </div>
      </ScrollArea>
    `
  })
};

export const WithContent: Story = {
  render: () => ({
    components: { ScrollArea },
    template: `
      <ScrollArea class="h-72 w-48 p-4">
        <div class="space-y-4">
          <h4 class="text-xl font-bold">Lorem Ipsum</h4>
          <p class="text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <h4 class="text-xl font-bold">Dolor Sit Amet</h4>
          <p class="text-sm text-gray-500">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
          <h4 class="text-xl font-bold">Consectetur Adipiscing</h4>
          <p class="text-sm text-gray-500">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque
            ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </ScrollArea>
    `
  })
};

export const WithBorder: Story = {
  render: () => ({
    components: { ScrollArea },
    template: `
      <ScrollArea class="h-72 w-48 border">
        <div class="p-4">
          <h4 class="mb-4 text-sm font-medium leading-none">Tags</h4>
          ${tags
            .map(
              (tag) => `
            <div class="text-sm" key="${tag}">${tag}</div>
          `
            )
            .join('')}
        </div>
      </ScrollArea>
    `
  })
};
