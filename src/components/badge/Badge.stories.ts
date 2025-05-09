import { PhStar } from '@phosphor-icons/vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import { Badge } from '.';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'The variant of the badge',
      control: 'select',
      options: ['red', 'green', 'yellow', 'blue', 'indigo', 'purple', 'stone', 'pink', 'lime'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'stone' }
      }
    },
    class: {
      description: '(Optional) Additional CSS classes to apply to the badge',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    default: {
      description: 'The content to display inside the badge',
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
          'A versatile badge component for displaying short status text, counts, or labels. Supports multiple colors and custom content through slots.'
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex gap-4">
        <Badge variant="red">Red</Badge>
        <Badge variant="green">Green</Badge>
        <Badge variant="yellow">Yellow</Badge>
        <Badge variant="blue">Blue</Badge>
        <Badge variant="indigo">Indigo</Badge>
        <Badge variant="purple">Purple</Badge>
        <Badge variant="stone">Stone</Badge>
        <Badge variant="pink">Pink</Badge>
        <Badge variant="lime">Lime</Badge>
      </div>
    `
  })
};

export const WithIcon: Story = {
  render: () => ({
    components: { Badge, PhStar },
    template: `
      <div class="flex flex-wrap gap-4">
        <Badge variant="blue">
          <PhStar weight="bold" />
          With Icon
        </Badge>
        <Badge variant="green">
          <PhStar weight="bold" />
          Success
        </Badge>
        <Badge variant="red">
          <PhStar weight="bold" />
          Error
        </Badge>
      </div>
    `
  })
};
