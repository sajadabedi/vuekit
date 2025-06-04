import { Button } from '@/components/button';
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import {PhGlobe} from '@phosphor-icons/vue';
import { Tooltip, TooltipContent, TooltipTrigger } from './';


const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    defaultOpen: {
      description: 'The open state of the tooltip when it is initially rendered',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    open: {
      description: 'The controlled open state of the tooltip',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'undefined' }
      }
    },
    delayDuration: {
      description: 'The duration from when the mouse enters a tooltip trigger until the tooltip opens (ms)',
      control: { type: 'number', min: 0 },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '500' }
      }
    },
    disableHoverableContent: {
      description: 'When true, trying to hover the content will result in the tooltip closing as the pointer leaves the trigger',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Tooltip, TooltipTrigger, TooltipContent, Button },
    setup() {
      return { args };
    },
    template: `
      <Tooltip v-bind="args">
        <TooltipTrigger as-child>
          <Button variant="primary">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    `
  }),
  args: {
    delayDuration: 500
  }
};

export const WithIcon: Story = {
  render: () => ({
    components: {
      Tooltip,
      TooltipTrigger,
      TooltipContent,
      Button,
      PhGlobe
    },
    template: `
      <Tooltip>
        <TooltipTrigger as-child>
          <Button size="icon">
            <PhGlobe weight="bold" />
            <span class="sr-only">Information</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Additional information about this action</p>
        </TooltipContent>
      </Tooltip>
    `
  }),
};

export const Placements: Story = {
  render: () => ({
    components: { Tooltip, TooltipTrigger, TooltipContent, Button },
    template: `
      <div class="flex flex-col items-center gap-8 p-8">
        <div class="flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger as-child>
              <Button variant="outline">Top</Button>
            </TooltipTrigger>
            <TooltipContent side="top" class="max-w-[200px]">
              <p>Tooltip content on top</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <div class="flex items-center gap-8">
          <Tooltip>
            <TooltipTrigger as-child>
              <Button variant="outline">Left</Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Tooltip on the left</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger as-child>
              <Button variant="outline">Right</Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Tooltip on the right</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <div class="flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger as-child>
              <Button variant="outline">Bottom</Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>Tooltip on the bottom</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    `
  }),
  args: {
    // No specific args needed for this story
  }
};

export const LongContent: Story = {
  render: () => ({
    components: { Tooltip, TooltipTrigger, TooltipContent, Button },
    template: `
      <div class="flex flex-col items-center gap-4">
        <Tooltip>
          <TooltipTrigger as-child>
            <Button variant="outline">Hover for detailed information</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p class="text-muted-foreground text-sm mt-1">
              This is a more detailed tooltip with additional information that wraps to multiple lines.
              It provides context about the action or element it's associated with.
            </p>
          </TooltipContent>
        </Tooltip>
      </div>
    `
  }),
  args: {
    // No specific args needed for this story
  }
};

export const Controlled: Story = {
  render: () => ({
    components: { Tooltip, TooltipTrigger, TooltipContent, Button },
    data() {
      return {
        isOpen: false
      };
    },
    template: `
      <div class="flex flex-col items-center gap-4">
        <div class="flex items-center gap-2 mb-12">
          <Button @click="isOpen = !isOpen">
            {{ isOpen ? 'Close' : 'Open' }} Tooltip
          </Button>
        </div>
        <Tooltip :open="isOpen">
          <TooltipTrigger as-child>
            <div class="bg-secondary border border-blue-400 border-dashed p-2 text-blue-500">
              Tooltip appear for this element
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p >Tooltip is controlled by the button above</p>
          </TooltipContent>
        </Tooltip>
      </div>
    `
  }),
  args: {
    // No specific args needed for this story
  }
};
