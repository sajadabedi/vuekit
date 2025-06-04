import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { Spinner } from '.';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    class: {
      description: '(Optional) Additional CSS classes to apply to the spinner',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    }
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A loading spinner component that provides visual feedback during asynchronous operations. Built with SVG for smooth animations.'
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};

export const CustomSize: Story = {
  render: () => ({
    components: { Spinner },
    template: `
      <div class="flex items-center gap-4">
        <Spinner class="size-3" />
        <Spinner class="size-4" />
        <Spinner class="size-5" />
        <Spinner class="size-6" />
      </div>
    `
  })
};

export const CustomColor: Story = {
  render: () => ({
    components: { Spinner },
    template: `
      <div class="flex items-center gap-4">
        <Spinner class="text-primary" />
        <Spinner class="text-critical" />
        <Spinner class="text-warning" />
        <Spinner class="text-success" />
      </div>
    `
  })
};
