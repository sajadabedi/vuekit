import { Button } from '@/components';
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
      Button
    },
    template: `
      <HoverCard>
        <HoverCardTrigger>
          <Button variant="primary">Button</Button>
        </HoverCardTrigger>
        <HoverCardContent class="w-80">
          <div class="flex justify-between">
            <div class="flex gap-4">
              <div>
                <h4 class="text-sm font-semibold">NuxtJS</h4>
                <p class="text-sm">The Vue.js framework for building server-side rendered applications.</p>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    `
  })
};

export const WithLink: Story = {
  render: () => ({
    components: {
      HoverCard,
      HoverCardTrigger,
      HoverCardContent
    },
    template: `
      <HoverCard>
        <HoverCardTrigger>
          <a href="#" class="text-sm font-medium underline">@radix-vue</a>
        </HoverCardTrigger>
        <HoverCardContent class="w-80">
          <div class="flex justify-between">
            <div class="flex gap-4">
              <div>
                <h4 class="text-sm font-semibold">@radix-vue</h4>
                <p class="text-sm">Vue port of Radix UI primitives. An open-source UI component library.</p>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    `
  })
};
