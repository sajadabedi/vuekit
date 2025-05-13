import { Button } from '@/components';
import { PhGlobeHemisphereEast } from '@phosphor-icons/vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '.';

const meta = {
  title: 'Components/HoverCard',
  component: HoverCard,
  tags: ['autodocs'],
  argTypes: {
    openDelay: {
      description: '(Optional) Delay in milliseconds before opening the hover card',
      control: { type: 'number', min: 0 },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' }
      }
    },
    closeDelay: {
      description: '(Optional) Delay in milliseconds before closing the hover card',
      control: { type: 'number', min: 0 },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' }
      }
    },
    defaultOpen: {
      description: '(Optional) Whether the hover card is open by default',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    class: {
      description: '(Optional) Additional CSS classes to apply to the hover card',
      control: { type: 'text' },
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
          'A popup card that appears when hovering over a trigger element. Useful for displaying additional information or previews without requiring a click.'
      }
    }
  }
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: {
      HoverCard,
      HoverCardTrigger,
      HoverCardContent,
      Button,
      PhGlobeHemisphereEast
    },
    template: `
      <HoverCard>
        <HoverCardTrigger>
          <Button variant="primary">Hover me</Button>
        </HoverCardTrigger>
        <HoverCardContent class="gap-4">
          <PhGlobeHemisphereEast size="24" weight="fill" class="text-accent mb-2" />
          <h4 class="text-heading-sm font-semibold">Sales Tax</h4>
          <p class="text-sm">Manage all aspects of your sales taxes in one place. From monitoring nexus to handling filings and remittance. Get started by connecting to Stripe.</p>
        </HoverCardContent>
      </HoverCard>
    `
  })
};

export const CustomSize: Story = {
  render: () => ({
    components: {
      HoverCard,
      HoverCardTrigger,
      HoverCardContent
    },
    template: `
      <HoverCard>
        <HoverCardTrigger>
          <a href="#" class="text-sm font-medium underline">Hover me</a>
        </HoverCardTrigger>
        <HoverCardContent class="w-80">
          <h4 class="text-heading-sm font-semibold">Sales Tax</h4>
          <p class="text-sm">Manage all aspects of your sales taxes in one place. From monitoring nexus to handling filings and remittance. Get started by connecting to Stripe.</p>
        </HoverCardContent>
      </HoverCard>
    `
  })
};
