import type { Meta, StoryObj } from '@storybook/vue3'
import Spinner from './Spinner.vue'

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    class: {
      control: 'text',
      description: 'Additional CSS classes to apply to the spinner'
    }
  }
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}
