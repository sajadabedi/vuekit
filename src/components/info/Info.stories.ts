import type { Meta, StoryObj } from '@storybook/vue3'
import { InfoIcon } from './index'

const meta = {
  title: 'Components/Info',
  component: InfoIcon,
  tags: ['autodocs'],
  args: {
    content: 'This is an information tooltip'
  },
  argTypes: {
    content: {
      control: 'text',
      description: 'Content to display in the tooltip'
    },
    side: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Position of the tooltip relative to the info icon'
    },
    delay: {
      control: 'number',
      description: 'Delay in milliseconds before showing the tooltip'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the info icon'
    }
  }
} satisfies Meta<typeof InfoIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    content: 'This is helpful information'
  }
}

export const CustomPosition: Story = {
  args: {
    content: 'Tooltip on the right',
    side: 'right'
  }
}

export const CustomDelay: Story = {
  args: {
    content: 'This tooltip appears with a delay',
    delay: 500
  }
}

export const CustomStyle: Story = {
  args: {
    content: 'Custom styled info icon',
    className: 'text-accent'
  }
}
