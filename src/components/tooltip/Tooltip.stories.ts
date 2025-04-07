import type { Meta, StoryObj } from '@storybook/vue3'
import { Tooltip } from './index'
import { Button } from '@/components'

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    side: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left']
    },
    delay: {
      control: 'number',
      description: 'Delay in milliseconds before showing the tooltip'
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
        <Button>Hover me</Button>
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
        <Button>Instant tooltip</Button>
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
