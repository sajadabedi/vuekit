import { PhHouse, PhPlus, PhTrash } from '@phosphor-icons/vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import { Button } from '.'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'destructive', 'ghost']
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'icon']
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const AllVariants: Story = {
  render: () => ({
    components: { Button, PhHouse, PhPlus, PhTrash },
    template: `
      <div class="flex flex-row gap-4">
        <Button variant="default">Default</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
    `
  })
}

export const Default: Story = {
  render: () => ({
    components: { Button },
    template: '<Button>Default</Button>'
  })
}

export const WithIcon: Story = {
  render: () => ({
    components: { Button, PhHouse },
    template: '<Button><PhHouse weight="bold" /> With Icon</Button>'
  })
}

export const IconOnly: Story = {
  render: () => ({
    components: { Button, PhHouse },
    template: '<Button size="icon"><PhHouse weight="bold" /></Button>'
  })
}

export const States: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="flex gap-4">
        <Button>Normal</Button>
        <Button class="opacity-70 cursor-not-allowed">Disabled</Button>
      </div>
    `
  })
}
