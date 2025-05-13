import TypographySystem from '@/stories/typography-story/typography.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta = {
  title: 'Typography',
  component: TypographySystem,
  parameters: {
    layout: 'padded',
  },
  tags: ['!autodocs'],
} satisfies Meta<typeof TypographySystem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
