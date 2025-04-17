import type { Meta, StoryObj } from '@storybook/vue3'
import { InfoIcon } from './index'

const meta: Meta<typeof InfoIcon> = {
  title: 'Components/InfoIcon',
  component: InfoIcon,
  tags: ['autodocs'],
  argTypes: {
    tooltip: {
      description: 'Content to display in the tooltip',
      control: 'text',
      table: {
        type: { summary: 'string' }
      }
    },
    class: {
      description: 'Additional CSS classes to apply to the info icon',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A simple information icon with a tooltip that appears on hover. Useful for providing additional context or help text in a compact way.'
      }
    }
  }
} satisfies Meta<typeof InfoIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    tooltip: 'This is helpful information'
  }
}

export const CustomStyle: Story = {
  args: {
    tooltip: 'Custom styled info icon',
    class: 'text-accent'
  }
}
