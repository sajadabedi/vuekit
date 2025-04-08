import type { Meta, StoryObj } from '@storybook/vue3'
import { Label } from '.'
import { Input } from '../input'
import { Checkbox } from '../checkbox'
import { RadioGroup, RadioGroupItem } from '../radio-group'

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Label },
    template: '<Label>Accept terms and conditions</Label>'
  })
}

export const WithInput: Story = {
  render: () => ({
    components: { Label, Input },
    template: `
      <div class="grid w-full max-w-sm items-center gap-1.5">
        <Label for="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>
    `
  })
}

export const WithCheckbox: Story = {
  render: () => ({
    components: { Label, Checkbox },
    template: `
      <div class="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label for="terms">Accept terms and conditions</Label>
      </div>
    `
  })
}

export const WithRadioGroup: Story = {
  render: () => ({
    components: { Label, RadioGroup, RadioGroupItem },
    template: `
      <RadioGroup class="grid gap-2">
        <div class="flex items-center space-x-2">
          <RadioGroupItem value="default" id="default" />
          <Label for="default">Default</Label>
        </div>
        <div class="flex items-center space-x-2">
          <RadioGroupItem value="comfortable" id="comfortable" />
          <Label for="comfortable">Comfortable</Label>
        </div>
      </RadioGroup>
    `
  })
}

export const Required: Story = {
  render: () => ({
    components: { Label, Input },
    template: `
      <div class="grid w-full max-w-sm items-center gap-1.5">
        <Label for="username" class="after:content-['*'] after:ml-0.5 after:text-red-500">
          Username
        </Label>
        <Input type="text" id="username" placeholder="Username" required />
      </div>
    `
  })
}
