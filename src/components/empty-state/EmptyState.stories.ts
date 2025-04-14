import { Button } from '@/components';
import { PhTray } from '@phosphor-icons/vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import EmptyState from './EmptyState.vue';

const meta = {
  title: 'Components/EmptyState',
  component: EmptyState,
  tags: ['autodocs']
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: 'No projects found'
  },
  render: (args) => ({
    components: { EmptyState },
    setup() {
      return { args };
    },
    template: `
      <EmptyState :heading="args.heading">
        Get started by creating a new project.
      </EmptyState>
    `
  })
};

export const WithIcon: Story = {
  args: {
    heading: 'No files found',
    icon: PhTray
  },
  render: (args) => ({
    components: { EmptyState },
    setup() {
      return { args };
    },
    template: `
      <EmptyState :heading="args.heading" :icon="args.icon">
        Drop some files here to get started.
      </EmptyState>
    `
  })
};

export const WithInbox: Story = {
  args: {
    heading: 'Your inbox is empty',
    icon: PhTray
  },
  render: (args) => ({
    components: { EmptyState, Button },
    setup() {
      return { args };
    },
    template: `
      <EmptyState :heading="args.heading" :icon="args.icon">
        Messages you receive will appear here.
        <Button>Send a message</Button>
      </EmptyState>
    `
  })
};
