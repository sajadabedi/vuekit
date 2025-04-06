import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'

const meta = {
  title: 'Foundation/Typography',
  parameters: {
    layout: 'top',
  },
  render: () => ({
    setup() {
      const variants = ref([
        { name: 'text-sm', class: 'text-sm' },
        { name: 'text-base', class: 'text-base' },
        { name: 'text-base-bold', class: 'text-base-bold' },
        { name: 'text-action', class: 'text-action' },
        { name: 'Text Base Bold', class: 'text-base-bold' },
        { name: 'Text LG', class: 'text-lg' },
        { name: 'Text XL', class: 'text-xl' },
        { name: 'Text 2XL', class: 'text-2xl' },
      ])

      return { variants }
    },
    template: `
      <div class="space-y-6 p-6">
        <h1 class="text-2xl font-semibold mb-8">Typography tokens</h1>
        <div class="space-y-4">
        <p class="text-sm uppercase opacity-35">Name:</p>
          <div v-for="variant in variants" :key="variant.name" class="flex items-baseline gap-4">
            <div class="w-32 text-sm text-gray-500">{{ variant.name }}</div>
            <div :class="variant.class">The quick brown fox jumps over the lazy dog</div>
          </div>
        </div>
      </div>
    `,
  }),
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
