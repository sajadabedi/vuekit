import type { Meta, StoryObj } from '@storybook/vue3'
import { Textarea } from '.'
import { Label } from '../label'

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
      <div class="grid w-full gap-1.5">
        <Label for="message">Your message</Label>
        <Textarea id="message" placeholder="Type your message here." />
      </div>
    `
  })
}

export const WithText: Story = {
  render: () => ({
    components: { Textarea, Label },
    template: `
      <div class="grid w-full gap-1.5">
        <Label for="message-2">Your message</Label>
        <Textarea
          id="message-2"
          placeholder="Type your message here."
        >This is a default value.</Textarea>
        <p class="text-sm text-gray-500">
          Your message will be copied to the support team.
        </p>
      </div>
    `
  })
}

export const Disabled: Story = {
  render: () => ({
    components: { Textarea },
    template: `
      <Textarea
        disabled
        placeholder="You cannot type here..."
      />
    `
  })
}

export const WithValidation: Story = {
  render: () => ({
    components: { Textarea, Label },
    template: `
      <div class="grid w-full gap-1.5">
        <Label for="message-3">Your message</Label>
        <Textarea
          id="message-3"
          placeholder="Type your message here."
          class="border-red-500"
        />
        <p class="text-sm text-red-500">
          This field is required.
        </p>
      </div>
    `
  })
}

export const WithResize: Story = {
  render: () => ({
    components: { Textarea },
    template: `
      <Textarea
        class="min-h-[100px] resize-y"
        placeholder="Type your message here."
      />
    `
  })
}
