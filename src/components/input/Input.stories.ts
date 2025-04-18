import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from '@/components';
import { PhMagnifyingGlass } from '@phosphor-icons/vue';
import type { Meta, StoryObj } from '@storybook/vue3';
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

export const Default: Story = {
  render: (args) => ({
    components: { Input, FormItem, FormControl },
    setup() {
      const inputClass = args.class;
      const inputModelValue = args.modelValue;
      const inputDefaultValue = args.defaultValue;
      return { inputClass, inputModelValue, inputDefaultValue };
    },
    template: `
      <div class="${inputContainerClass}">
        <FormItem>
          <FormControl>
            <Input :class="inputClass" :model-value="inputModelValue" :default-value="inputDefaultValue" />
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
      const inputClass = args.class;
      const inputModelValue = args.modelValue;
      const inputDefaultValue = args.defaultValue;
      return { inputClass, inputModelValue, inputDefaultValue };
    },
    template: `
      <div class="${inputContainerClass}">
        <FormItem>
          <FormLabel tooltip="test" optional>Email</FormLabel>
          <FormControl>
            <Input :class="inputClass" :model-value="inputModelValue" :default-value="inputDefaultValue" />
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
      const inputClass = args.class;
      const inputModelValue = args.modelValue;
      const inputDefaultValue = args.defaultValue;
      return { inputClass, inputModelValue, inputDefaultValue };
    },
    template: `
      <div class="${inputContainerClass}">
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input :class="inputClass" :model-value="inputModelValue" :default-value="inputDefaultValue" />
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
    class: 'aria-invalid:border-critical aria-invalid:focus-within:ring-[var(--ui-color-border-critical)]'
  },
  render: (args) => ({
    components: { Input, FormItem, FormLabel, FormControl, FormMessage },
    setup() {
      const inputClass = args.class;
      const inputModelValue = args.modelValue;
      const inputDefaultValue = args.defaultValue;
      return { inputClass, inputModelValue, inputDefaultValue };
    },
    template: `
      <div class="${inputContainerClass}">
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input :class="inputClass" :model-value="inputModelValue" :default-value="inputDefaultValue" aria-invalid="true" />
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
      const inputClass = args.class;
      const inputModelValue = args.modelValue;
      const inputDefaultValue = args.defaultValue;
      return { inputClass, inputModelValue, inputDefaultValue };
    },
    template: `
      <div class="${inputContainerClass}">
        <FormItem>
          <FormControl>
            <PhMagnifyingGlass weight="bold" />
            <Input :class="inputClass" :model-value="inputModelValue" :default-value="inputDefaultValue" />
          </FormControl>
        </FormItem>
      </div>
    `
  })
};

export const Disabled: Story = {
  args: {
    class: 'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-70'
  },
  render: (args) => ({
    components: { Input, FormItem, FormControl },
    setup() {
      const inputClass = args.class;
      const inputModelValue = args.modelValue;
      const inputDefaultValue = args.defaultValue;
      return { inputClass, inputModelValue, inputDefaultValue };
    },
    template: `
      <div class="${inputContainerClass}">
        <FormItem>
          <FormControl>
            <Input :class="inputClass" :model-value="inputModelValue" :default-value="inputDefaultValue" disabled />
          </FormControl>
        </FormItem>
      </div>
    `
  })
};
