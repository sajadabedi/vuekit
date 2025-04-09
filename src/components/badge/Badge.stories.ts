import { PhStar } from '@phosphor-icons/vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import { Badge } from '.';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['red', 'green', 'yellow', 'blue', 'indigo', 'purple', 'stone', 'pink', 'lime']
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllColors: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex gap-4">
        <Badge color="red">Red</Badge>
        <Badge color="green">Green</Badge>
        <Badge color="yellow">Yellow</Badge>
        <Badge color="blue">Blue</Badge>
        <Badge color="indigo">Indigo</Badge>
        <Badge color="purple">Purple</Badge>
        <Badge color="stone">Stone</Badge>
        <Badge color="pink">Pink</Badge>
        <Badge color="lime">Lime</Badge>
      </div>
    `
  })
};

export const WithIcon: Story = {
  render: () => ({
    components: { Badge, PhStar },
    template: `
      <div class="flex flex-wrap gap-4">
        <Badge color="blue">
          <PhStar weight="bold" />
          With Icon
        </Badge>
        <Badge color="green">
          <PhStar weight="bold" />
          Success
        </Badge>
        <Badge color="red">
          <PhStar weight="bold" />
          Error
        </Badge>
      </div>
    `
  })
};

export const Default: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <Badge color="stone">Default</Badge>
    `
  })
};

export const Truncated: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div class="w-32 ">
        <Badge color="blue" class="truncate">
          This is a very long text that will be truncated
        </Badge>
      </div>
    `
  })
};
