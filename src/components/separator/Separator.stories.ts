import type { Meta, StoryObj } from '@storybook/vue3'
import { Separator } from '.'

const meta: Meta<typeof Separator> = {
  title: 'Components/Separator',
  component: Separator,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Separator },
    template: `
      <div>
        <div class="text-sm text-gray-500">Blog</div>
        <Separator class="my-4" />
        <div class="text-sm text-gray-500">Documentation</div>
      </div>
    `
  })
}

export const Vertical: Story = {
  render: () => ({
    components: { Separator },
    template: `
      <div class="flex gap-4">
        <div class="text-sm text-gray-500">Blog</div>
        <Separator orientation="vertical" class="h-5" />
        <div class="text-sm text-gray-500">Documentation</div>
        <Separator orientation="vertical" class="h-5" />
        <div class="text-sm text-gray-500">Source</div>
      </div>
    `
  })
}

export const Horizontal: Story = {
  render: () => ({
    components: { Separator },
    template: `
      <div class="space-y-4">
        <div>Content Above</div>
        <Separator />
        <div>Content Below</div>
      </div>
    `
  })
}
