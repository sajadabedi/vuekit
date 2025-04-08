import type { Meta, StoryObj } from '@storybook/vue3'
import { Input } from '.'
import { PhMagnifyingGlass } from '@phosphor-icons/vue'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Input },
    template: '<Input placeholder="Enter text..." />'
  })
}

export const WithLabel: Story = {
  render: () => ({
    components: { Input },
    template: `
      <div class="grid w-full max-w-sm items-center gap-1.5">
        <label for="email">Email</label>
        <Input type="email" id="email" placeholder="Email" />
      </div>
    `
  })
}

export const WithIcon: Story = {
  render: () => ({
    components: { Input, PhMagnifyingGlass },
    template: `
      <div class="relative w-full max-w-sm">
        <PhMagnifyingGlass class="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
        <Input class="pl-8" placeholder="Search..." />
      </div>
    `
  })
}

export const Disabled: Story = {
  render: () => ({
    components: { Input },
    template: '<Input disabled placeholder="Disabled input" />'
  })
}

export const WithError: Story = {
  render: () => ({
    components: { Input },
    template: `
      <div class="grid w-full max-w-sm items-center gap-1.5">
        <Input 
          aria-invalid="true"
          class="border-red-500 focus:ring-red-500"
          placeholder="Error state"
        />
        <p class="text-sm text-red-500">This field is required</p>
      </div>
    `
  })
}
