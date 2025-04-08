import type { Meta, StoryObj } from '@storybook/vue3'
import { RadioGroup, RadioGroupItem } from '.'
import { Label } from '../label'
import { ref } from 'vue'

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { RadioGroup, RadioGroupItem, Label },
    setup() {
      const plan = ref('startup')
      return { plan }
    },
    template: `
      <RadioGroup v-model="plan" class="grid gap-2">
        <div class="flex items-center space-x-2">
          <RadioGroupItem value="startup" id="startup" />
          <Label for="startup">Startup</Label>
        </div>
        <div class="flex items-center space-x-2">
          <RadioGroupItem value="business" id="business" />
          <Label for="business">Business</Label>
        </div>
        <div class="flex items-center space-x-2">
          <RadioGroupItem value="enterprise" id="enterprise" />
          <Label for="enterprise">Enterprise</Label>
        </div>
      </RadioGroup>
    `
  })
}

export const WithDescription: Story = {
  render: () => ({
    components: { RadioGroup, RadioGroupItem },
    setup() {
      const plan = ref('basic')
      return { plan }
    },
    template: `
      <RadioGroup v-model="plan" class="grid gap-4">
        <div class="relative flex items-start">
          <div class="flex h-6 items-center">
            <RadioGroupItem value="basic" id="basic" />
          </div>
          <div class="ml-3">
            <Label for="basic" class="font-medium">Basic Plan</Label>
            <p class="text-sm text-gray-500">
              Perfect for small teams. Includes basic features.
            </p>
          </div>
        </div>
        <div class="relative flex items-start">
          <div class="flex h-6 items-center">
            <RadioGroupItem value="pro" id="pro" />
          </div>
          <div class="ml-3">
            <Label for="pro" class="font-medium">Pro Plan</Label>
            <p class="text-sm text-gray-500">
              For growing teams. Includes advanced features and priority support.
            </p>
          </div>
        </div>
      </RadioGroup>
    `
  })
}

export const Disabled: Story = {
  render: () => ({
    components: { RadioGroup, RadioGroupItem, Label },
    setup() {
      const option = ref('option-1')
      return { option }
    },
    template: `
      <RadioGroup v-model="option" class="grid gap-2" disabled>
        <div class="flex items-center space-x-2">
          <RadioGroupItem value="option-1" id="option-1" />
          <Label for="option-1">Option 1</Label>
        </div>
        <div class="flex items-center space-x-2">
          <RadioGroupItem value="option-2" id="option-2" />
          <Label for="option-2">Option 2</Label>
        </div>
      </RadioGroup>
    `
  })
}
