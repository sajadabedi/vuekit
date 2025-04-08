import type { Meta, StoryObj } from '@storybook/vue3'
import Label from './Label.vue'

const meta = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { Label },
    setup() {
      return { args }
    },
    template: '<Label v-bind="args">Email</Label>'
  }),
  args: {}
}

export const Optional: Story = {
  render: (args) => ({
    components: { Label },
    setup() {
      return { args }
    },
    template: '<Label v-bind="args">Email</Label>'
  }),
  args: {
    optional: true,
    tooltip: 'This is helpful information'
  }
}
