import Field from '@/components/form-old/field/Field.vue'
import Label from '@/components/label-2/Label.vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import Input from './Input-old.vue'

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text'
    }
  }
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { Input, Label, Field },
    setup() {
      return { args }
    },
    template: '<Field><Label for="email">Email address</Label><Input v-bind="args" id="email" /></Field>'
  }),
  args: {
    modelValue: '',
    placeholder: 'Enter your email'
  }
}

export const WithLabel: Story = {
  render: (args) => ({
    components: { Input, Label, Field },
    setup() {
      return { args }
    },
    template: '<Field><Label for="email">Email address</Label><Input v-bind="args" id="email" /></Field>'
  }),
  args: {
    modelValue: '',
    placeholder: 'Enter your email'
  }
}

export const WithError: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      return { args }
    },
    template: '<Input v-bind="args" />'
  }),
  args: {
    modelValue: '',
    placeholder: 'Enter your email',
    error: true
  }
}

export const Disabled: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      return { args }
    },
    template: '<Input v-bind="args" />'
  }),
  args: {
    modelValue: '',
    placeholder: 'Enter your email',
    disabled: true
  }
}
