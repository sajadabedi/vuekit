import type { Meta, StoryObj } from '@storybook/vue3'
import TextField from './TextField.vue'

const meta = {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text'
    }
  }
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { TextField },
    setup() {
      return { args }
    },
    template: '<TextField v-bind="args" />'
  }),
  args: {
    modelValue: '',
    label: 'Email',
    placeholder: 'Enter your email'
  }
}

export const WithLabel: Story = {
  render: (args) => ({
    components: { TextField },
    setup() {
      return { args }
    },
    template: '<TextField v-bind="args" />'
  }),
  args: {
    label: 'Email',
    placeholder: 'Enter your email'
  }
}

export const WithError: Story = {
  render: (args) => ({
    components: { TextField },
    setup() {
      return { args }
    },
    template: '<TextField v-bind="args" />'
  }),
  args: {
    modelValue: '',
    label: 'Email',
    placeholder: 'Enter your email',
    error: 'Please enter a valid email address'
  }
}

export const Disabled: Story = {
  render: (args) => ({
    components: { TextField },
    setup() {
      return { args }
    },
    template: '<TextField v-bind="args" />'
  }),
  args: {
    modelValue: '',
    label: 'Email',
    placeholder: 'Enter your email',
    disabled: true
  }
}
