import { Button } from '@/components'
import type { Meta, StoryObj } from '@storybook/vue3'
import { Tooltip } from './index'

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A tooltip component that provides additional information when hovering over an element. Supports different positions and custom delays.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    content: {
      description: 'The text content to display in the tooltip',
      control: 'text',
      table: {
        type: { summary: 'string' }
      }
    },
    side: {
      description: '(Optional) The preferred side of the tooltip relative to its trigger',
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'top' }
      }
    },
    delay: {
      description: '(Optional) Delay in milliseconds before showing the tooltip',
      control: { type: 'number', min: 0 },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' }
      }
    },
    class: {
      description: '(Optional) Additional CSS classes to apply to the tooltip',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    }
  }
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { Tooltip, Button },
    setup() {
      return { args }
    },
    template: `
      <Tooltip v-bind="args">
        <Button variant="primary">Hover me</Button>
      </Tooltip>
    `
  }),
  args: {
    content: 'This is a tooltip',
    side: 'top',
    delay: 200
  }
}

export const Placements: Story = {
  render: (args) => ({
    components: { Tooltip, Button },
    setup() {
      return { args }
    },
    template: `
      <div class="flex flex-col items-center gap-8">
        <Tooltip content="Top tooltip" side="top" delay="200">
          <Button>Top</Button>
        </Tooltip>
        <div class="flex gap-8">
          <Tooltip content="Left tooltip" side="left" delay="200">
            <Button>Left</Button>
          </Tooltip>
          <Tooltip content="Right tooltip" side="right" delay="200">
            <Button>Right</Button>
          </Tooltip>
        </div>
        <Tooltip content="Bottom tooltip" side="bottom" delay="200">
          <Button>Bottom</Button>
        </Tooltip>
      </div>
    `
  }),
  args: {
    content: 'Tooltip content',
    side: 'top',
    delay: 200
  }
}

export const NoDelay: Story = {
  render: (args) => ({
    components: { Tooltip, Button },
    setup() {
      return { args }
    },
    template: `
      <Tooltip v-bind="args">
        <Button variant="primary">Instant tooltip</Button>
      </Tooltip>
    `
  }),
  args: {
    content: 'This tooltip appears instantly',
    side: 'top',
    delay: 0
  }
}

export const WithLongContent: Story = {
  render: (args) => ({
    components: { Tooltip, Button },
    setup() {
      return { args }
    },
    template: `
      <Tooltip v-bind="args">
        <Button>Hover for long content</Button>
      </Tooltip>
    `
  }),
  args: {
    content: 'This is a tooltip with a very long content that should wrap nicely and maintain readability.',
    side: 'top',
    delay: 200
  }
}
