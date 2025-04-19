import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from '@/components';
import { PhMagnifyingGlass } from '@phosphor-icons/vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { Input } from '.';

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      description: 'The current value of the input',
      control: { type: 'text' },
      table: {
        type: { summary: 'string | number' }
      }
    },
    defaultValue: {
      description: 'The default value of the input',
      control: { type: 'text' },
      table: {
        type: { summary: 'string | number' }
      }
    },
    'onUpdate:modelValue': {
      description: 'Event emitted when the input value changes',
      table: {
        type: { summary: '(value: string | number) => void' },
        category: 'events'
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
        component:
          'A versatile input component that supports various types, states, and validation. Built with accessibility and usability in mind.'
      }
    }
  }
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

const inputContainerClass = 'max-w-sm space-y-4';

export const Basic: Story = {
  render: () => ({
    components: { Input },
    template: `
      <div class="w-full max-w-sm">
        <Input placeholder="Type something..." />
      </div>
    `
  })
};

export const File: Story = {
  render: () => ({
    components: { Input },
    template: `
      <div class="w-full max-w-sm">
        <Input type="file" />
      </div>
    `
  })
};

export const WithButton: Story = {
  render: () => ({
    components: { Input },
    template: `
      <div class="flex w-full max-w-sm items-center space-x-2">
        <Input placeholder="Email" type="email" />
        <button class="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
          Subscribe
        </button>
      </div>
    `
  })
};

export const WithIcon: Story = {
  render: () => ({
    components: { Input, FormItem, FormControl, PhMagnifyingGlass },
    template: /* html */ `
      <Form>
      <FormItem>
        <FormControl>
          <Input placeholder="Search..." />
        </FormControl>
      </FormItem>
      </Form>
    `
  })
};

export const Disabled: Story = {
  render: () => ({
    components: { Input },
    template: /* html */ `
      <div class="w-full max-w-sm">
        <Input disabled placeholder="This input is disabled" />
      </div>
    `
  })
};
