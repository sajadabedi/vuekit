import type { Meta, StoryObj } from '@storybook/vue3'
import { InfoIcon } from './index'

const meta = {
  title: 'Components/InfoIcon',
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
    class: {
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

export const CustomStyle: Story = {
  args: {
    content: 'Custom styled info icon',
    class: 'text-accent'
  }
}
