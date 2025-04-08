import type { Meta, StoryObj } from '@storybook/vue3'
import { HoverCard, HoverCardTrigger, HoverCardContent } from '.'
import { Button } from '../button'

const meta: Meta<typeof HoverCard> = {
  title: 'Components/HoverCard',
  component: HoverCard,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: {
      HoverCard,
      HoverCardTrigger,
      HoverCardContent,
      Button
    },
    template: `
      <HoverCard>
        <HoverCardTrigger>
          <Button variant="ghost">@username</Button>
        </HoverCardTrigger>
        <HoverCardContent class="w-80">
          <div class="flex justify-between space-x-4">
            <div class="space-y-1">
              <h4 class="text-sm font-semibold">@username</h4>
              <p class="text-sm">
                The quick brown fox jumps over the lazy dog.
              </p>
              <div class="flex items-center pt-2">
                <span class="text-xs text-gray-500">
                  Joined December 2021
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    `
  })
}

export const WithImage: Story = {
  render: () => ({
    components: {
      HoverCard,
      HoverCardTrigger,
      HoverCardContent,
      Button
    },
    template: `
      <HoverCard>
        <HoverCardTrigger>
          <Button variant="ghost">Product Info</Button>
        </HoverCardTrigger>
        <HoverCardContent class="w-80">
          <div class="flex justify-between space-x-4">
            <img
              class="h-24 w-24 rounded-md"
              src="https://via.placeholder.com/150"
              alt="Product"
            />
            <div class="space-y-1">
              <h4 class="text-sm font-semibold">Product Name</h4>
              <p class="text-sm text-gray-600">
                Brief product description goes here.
              </p>
              <p class="text-sm font-semibold">$99.99</p>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    `
  })
}
