import type { Meta, StoryObj } from '@storybook/vue3'
import Button from './Button.vue'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'outline', 'link'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Primary</Button>',
  }),
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
    disabled: false,
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Secondary Button</Button>',
  }),
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'md',
    disabled: false,
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Ghost Button</Button>',
  }),
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'md',
    disabled: false,
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Outline Button</Button>',
  }),
}

export const Link: Story = {
  args: {
    variant: 'link',
    size: 'md',
    disabled: false,
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Link Button</Button>',
  }),
}

export const Small: Story = {
  args: {
    size: 'sm',
    disabled: false,
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Small Button</Button>',
  }),
}

export const Large: Story = {
  args: {
    size: 'lg',
    disabled: false,
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Large Button</Button>',
  }),
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Disabled Button</Button>',
  }),
}
