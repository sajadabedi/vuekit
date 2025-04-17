import type { Meta, StoryObj } from '@storybook/vue3';
import { Input } from '.';
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from '@/components';
import { PhMagnifyingGlass } from '@phosphor-icons/vue';

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      description: 'The current value of the input',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' }
      }
    },
    'onUpdate:modelValue': {
      description: 'Event emitted when the input value changes',
      table: {
        type: { summary: '(value: string) => void' },
        category: 'events'
      }
    },
    type: {
      description: 'The type of the input field',
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search', 'tel', 'url'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' }
      }
    },
    placeholder: {
      description: '(Optional) Placeholder text to show when the input is empty',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' }
      }
    },
    disabled: {
      description: '(Optional) Whether the input is disabled',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    error: {
      description: '(Optional) Whether the input is in an error state',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    class: {
      description: '(Optional) Additional CSS classes to apply to the input',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A versatile input component that supports various types, states, and validation. Built with accessibility and usability in mind.'
      }
    }
  }
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

const inputContainerClass = 'max-w-sm space-y-4';

export const Default: Story = {
  render: (args) => ({
    components: { Input, FormItem, FormControl },
    setup() {
      return { args };
    },
    template: `
      <div class="${inputContainerClass}">
        <FormItem>
          <FormControl>
            <Input v-bind="args" placeholder="Email" />
          </FormControl>
        </FormItem>
      </div>
    `
  })
};

export const WithLabel: Story = {
  render: (args) => ({
    components: { Input, FormItem, FormLabel, FormControl },
    setup() {
      return { args };
    },
    template: `
      <div class="${inputContainerClass}">
        <FormItem>
          <FormLabel tooltip="test" optional>Email</FormLabel>
          <FormControl>
            <Input v-bind="args" placeholder="Enter your email" />
          </FormControl>
        </FormItem>
      </div>
    `
  })
};

export const WithDescription: Story = {
  render: (args) => ({
    components: { Input, FormItem, FormLabel, FormControl, FormDescription },
    setup() {
      return { args };
    },
    template: `
      <div class="${inputContainerClass}">
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input v-bind="args" placeholder="Enter your email" />
          </FormControl>
          <FormDescription>
            This is the email we'll use for important notifications.
          </FormDescription>
        </FormItem>
      </div>
    `
  })
};

export const WithError: Story = {
  args: {
    error: true
  },
  render: (args) => ({
    components: { Input, FormItem, FormLabel, FormControl, FormMessage },
    setup() {
      return { args };
    },
    template: `
      <div class="${inputContainerClass}">
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input v-bind="args" placeholder="Enter your email" />
          </FormControl>
          <FormMessage>Please enter a valid email address</FormMessage>
        </FormItem>
      </div>
    `
  })
};

export const WithIcon: Story = {
  render: (args) => ({
    components: { Input, FormItem, FormControl, PhMagnifyingGlass },
    setup() {
      return { args };
    },
    template: `
      <div class="${inputContainerClass}">
        <FormItem>
          <FormControl>
            <PhMagnifyingGlass weight="bold" />
            <Input v-bind="args" placeholder="Search" />
          </FormControl>
        </FormItem>
      </div>
    `
  })
};

export const Disabled: Story = {
  args: {
    disabled: true
  },
  render: (args) => ({
    components: { Input, FormItem, FormControl },
    setup() {
      return { args };
    },
    template: `
      <div class="${inputContainerClass}">
        <FormItem>
          <FormControl>
            <Input v-bind="args" placeholder="Email" />
          </FormControl>
        </FormItem>
      </div>
    `
  })
};
