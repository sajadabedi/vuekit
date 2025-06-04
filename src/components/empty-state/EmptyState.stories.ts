import { PhTray } from '@phosphor-icons/vue';
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { EmptyState } from '.';

const meta = {
  title: 'Components/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
  args: {
    heading: 'No invoices found'
  },
  argTypes: {
    heading: {
      description: 'The heading text to display at the top of the empty state',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    icon: {
      description:
        '(Optional) A Vue component to use as the icon. Works with Phosphor icons or any other Vue component',
      control: 'object',
      table: {
        type: { summary: 'Component' },
        defaultValue: { summary: '' }
      }
    },
    class: {
      description: '(Optional) Additional CSS classes to apply to the root element',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    default: {
      description: 'Main content below the heading',
      table: {
        type: { summary: 'Markup' },
        category: 'slots'
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'A flexible empty state component that can be used to display a message when there is no content to show. All props are optional, allowing you to use it with just content in the default slot if desired. Supports icons, headings, and custom content through slots.'
      }
    }
  }
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { EmptyState },
    setup() {
      return { args };
    },
    template: `
      <EmptyState v-bind="args">
        Get started by creating a new project.
      </EmptyState>
    `
  })
};

export const WithIcon: Story = {
  args: {
    heading: 'Drop files here',
    icon: PhTray
  },
  render: (args) => ({
    components: { EmptyState },
    setup() {
      return { args };
    },
    template: `
      <EmptyState v-bind="args">
        Drop some files here to get started.
      </EmptyState>
    `
  })
};
