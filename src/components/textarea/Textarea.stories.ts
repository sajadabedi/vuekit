import type { Meta, StoryObj } from '@storybook/vue3'
import { Textarea } from '.'
import { Label } from '@/components/label'

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Textarea },
    template: '<Textarea placeholder="Type your message here." />'
  })
}

export const WithLabel: Story = {
  render: () => ({
    components: { Textarea, Label },
    template: `
      <div class="grid gap-2">
        <Label for="message">Your message</Label>
        <Textarea id="message" placeholder="Type your message here." />
      </div>
    `
  })
}

export const Disabled: Story = {
  render: () => ({
    components: { Textarea },
    template: '<Textarea disabled placeholder="Type your message here." />'
  })
}

export const WithText: Story = {
  render: () => ({
    components: { Textarea },
    template: '<Textarea>This is a textarea with text.</Textarea>'
  })
}

export const WithError: Story = {
  render: () => ({
    components: { Textarea, Label },
    template: `
      <div class="grid gap-2">
        <Label for="message">Your message</Label>
        <Textarea id="message" class="border-red-500" />
        <p class="text-sm text-red-500">Please enter a message.</p>
      </div>
    `
  })
}
