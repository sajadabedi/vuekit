import { PhCube } from '@phosphor-icons/vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import Button from './Button.vue'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    default: 'Button'
  }
}

export const Default: Story = {
  args: {
    variant: 'default',
    default: 'Default Button'
  }
}

export const WithIcon: Story = {
  render: () => ({
    components: { Button, PhCube },
    setup() {
      return {
        variant: 'default'
      }
    },
    template: `
      <Button :variant="variant">
        <PhCube weight="bold" size="16" />
        box
      </Button>
    `
  })
}

export const Critical: Story = {
  args: {
    variant: 'critical',
    default: 'Delete'
  }
}

export const Disabled: Story = {
  args: {
    disabled: true,
    default: 'Disabled Button'
  }
}
