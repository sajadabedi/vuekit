import type { Meta, StoryObj } from '@storybook/vue3'
import { PhTray } from '@phosphor-icons/vue'
import { EmptyState } from '.'

const meta = {
  title: 'Components/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
  args: {
    heading: 'No projects found'
  }
} satisfies Meta<typeof EmptyState>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { EmptyState },
    setup() {
      return { args }
    },
    template: `
      <EmptyState v-bind="args">
        Get started by creating a new project.
      </EmptyState>
    `
  })
}

export const WithIcon: Story = {
  args: {
    icon: PhTray
  },
  render: (args) => ({
    components: { EmptyState },
    setup() {
      return { args }
    },
    template: `
      <EmptyState v-bind="args">
        Drop some files here to get started.
      </EmptyState>
    `
  })
}
