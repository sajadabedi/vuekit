import type { Meta, StoryObj } from '@storybook/vue3';
import Badge from './Badge.vue';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['red', 'green', 'yellow', 'blue', 'indigo', 'purple', 'stone', 'lime', 'pink']
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'stone',
    default: 'default'
  }
};

export const Red: Story = {
  args: {
    color: 'red',
    default: 'bug'
  }
};

export const Pink: Story = {
  args: {
    color: 'pink',
    default: 'bug'
  }
};

export const Lime: Story = {
  args: {
    color: 'lime',
    default: 'bug'
  }
};

export const Green: Story = {
  args: {
    color: 'green',
    default: 'feature'
  }
};

export const Yellow: Story = {
  args: {
    color: 'yellow',
    default: 'warning'
  }
};

export const Blue: Story = {
  args: {
    color: 'blue',
    default: 'info'
  }
};

export const Indigo: Story = {
  args: {
    color: 'indigo',
    default: 'enhancement'
  }
};

export const Purple: Story = {
  args: {
    color: 'purple',
    default: 'docs'
  }
};

export const AllVariants: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex flex-wrap gap-2">
        <Badge color="stone">default</Badge>
        <Badge color="red">bug</Badge>
        <Badge color="green">feature</Badge>
        <Badge color="yellow">warning</Badge>
        <Badge color="blue">info</Badge>
        <Badge color="indigo">enhancement</Badge>
        <Badge color="purple">docs</Badge>
        <Badge color="pink">bug</Badge>
        <Badge color="lime">bug</Badge>
      </div>
    `
  })
};
