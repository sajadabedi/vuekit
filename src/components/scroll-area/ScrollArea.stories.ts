import type { Meta, StoryObj } from '@storybook/vue3'
import { ScrollArea } from '.'

const meta: Meta<typeof ScrollArea> = {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { ScrollArea },
    template: `
      <ScrollArea class="h-[200px] w-[350px] rounded-md border p-4">
        <div class="space-y-4">
          <h4 class="text-sm font-medium leading-none">Title</h4>
          ${Array.from({ length: 50 }, (_, i) => `
            <p class="text-sm">Item ${i + 1}</p>
          `).join('')}
        </div>
      </ScrollArea>
    `
  })
}

export const Horizontal: Story = {
  render: () => ({
    components: { ScrollArea },
    template: `
      <ScrollArea class="w-[350px] whitespace-nowrap rounded-md border">
        <div class="flex w-max space-x-4 p-4">
          ${Array.from({ length: 50 }, (_, i) => `
            <div class="w-[150px] flex-shrink-0 rounded-md border p-4">
              <div class="text-sm">Item ${i + 1}</div>
            </div>
          `).join('')}
        </div>
      </ScrollArea>
    `
  })
}

export const WithContent: Story = {
  render: () => ({
    components: { ScrollArea },
    template: `
      <ScrollArea class="h-[300px] w-[400px] rounded-md border p-4">
        <div class="space-y-4">
          <h4 class="text-xl font-bold">Lorem Ipsum</h4>
          <p class="text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
            enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <h4 class="text-xl font-bold">Dolor Sit Amet</h4>
          <p class="text-sm text-gray-500">
            Duis aute irure dolor in reprehenderit in voluptate velit esse 
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
            cupidatat non proident, sunt in culpa qui officia deserunt 
            mollit anim id est laborum.
          </p>
          <h4 class="text-xl font-bold">Consectetur Adipiscing</h4>
          <p class="text-sm text-gray-500">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
            accusantium doloremque laudantium, totam rem aperiam, eaque 
            ipsa quae ab illo inventore veritatis et quasi architecto 
            beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </ScrollArea>
    `
  })
}
