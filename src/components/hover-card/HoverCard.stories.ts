import type { Meta, StoryObj } from '@storybook/vue3'
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent
} from '.'
import { Button } from '@/components/button'

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
          <Button variant="ghost">@nextjs</Button>
        </HoverCardTrigger>
        <HoverCardContent class="w-80">
          <div class="flex justify-between">
            <div class="flex gap-4">
              <img
                src="https://github.com/vercel.png"
                class="size-10 rounded-full"
                alt="Vercel"
              />
              <div>
                <h4 class="text-sm font-semibold">@nextjs</h4>
                <p class="text-sm">The React Framework – created and maintained by @vercel.</p>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    `
  })
}

export const WithLink: Story = {
  render: () => ({
    components: {
      HoverCard,
      HoverCardTrigger,
      HoverCardContent
    },
    template: `
      <HoverCard>
        <HoverCardTrigger>
          <a href="#" class="text-sm font-medium underline">@radix-vue</a>
        </HoverCardTrigger>
        <HoverCardContent class="w-80">
          <div class="flex justify-between">
            <div class="flex gap-4">
              <img
                src="https://github.com/radix-vue.png"
                class="size-10 rounded-full"
                alt="Radix Vue"
              />
              <div>
                <h4 class="text-sm font-semibold">@radix-vue</h4>
                <p class="text-sm">Vue port of Radix UI primitives. An open-source UI component library.</p>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    `
  })
}
