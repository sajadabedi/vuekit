import type { Meta, StoryObj } from '@storybook/vue3'
import { Sidebar } from '.'
import {
  PhHouse,
  PhGear,
  PhUser,
  PhCreditCard,
  PhBell,
  PhLifebuoy
} from '@phosphor-icons/vue'

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: {
      Sidebar,
      PhHouse,
      PhGear,
      PhUser,
      PhCreditCard,
      PhBell,
      PhLifebuoy
    },
    template: `
      <Sidebar class="w-64">
        <div class="flex h-16 items-center border-b px-6">
          <span class="font-semibold">Acme Inc</span>
        </div>
        <div class="flex-1 space-y-1 p-2">
          <a href="#" class="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900">
            <PhHouse class="size-4" />
            <span>Home</span>
          </a>
          <a href="#" class="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:text-gray-900">
            <PhUser class="size-4" />
            <span>Profile</span>
          </a>
          <a href="#" class="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:text-gray-900">
            <PhCreditCard class="size-4" />
            <span>Billing</span>
          </a>
          <a href="#" class="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:text-gray-900">
            <PhBell class="size-4" />
            <span>Notifications</span>
          </a>
          <a href="#" class="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:text-gray-900">
            <PhGear class="size-4" />
            <span>Settings</span>
          </a>
          <a href="#" class="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:text-gray-900">
            <PhLifebuoy class="size-4" />
            <span>Help</span>
          </a>
        </div>
      </Sidebar>
    `
  })
}

export const WithSubNav: Story = {
  render: () => ({
    components: {
      Sidebar,
      PhHouse,
      PhGear,
      PhUser,
      PhCreditCard,
      PhBell,
      PhLifebuoy
    },
    template: `
      <Sidebar class="w-64">
        <div class="flex h-16 items-center border-b px-6">
          <span class="font-semibold">Acme Inc</span>
        </div>
        <div class="flex-1 space-y-4 p-4">
          <div class="space-y-1">
            <h2 class="px-2 text-sm font-semibold">Overview</h2>
            <div class="space-y-1">
              <a href="#" class="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900">
                <PhHouse class="size-4" />
                <span>Home</span>
              </a>
              <a href="#" class="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:text-gray-900">
                <PhUser class="size-4" />
                <span>Profile</span>
              </a>
              <a href="#" class="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:text-gray-900">
                <PhCreditCard class="size-4" />
                <span>Billing</span>
              </a>
            </div>
          </div>
          <div class="space-y-1">
            <h2 class="px-2 text-sm font-semibold">Settings</h2>
            <div class="space-y-1">
              <a href="#" class="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:text-gray-900">
                <PhBell class="size-4" />
                <span>Notifications</span>
              </a>
              <a href="#" class="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:text-gray-900">
                <PhGear class="size-4" />
                <span>Settings</span>
              </a>
              <a href="#" class="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:text-gray-900">
                <PhLifebuoy class="size-4" />
                <span>Help</span>
              </a>
            </div>
          </div>
        </div>
      </Sidebar>
    `
  })
}
