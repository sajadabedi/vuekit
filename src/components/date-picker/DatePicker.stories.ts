import { type DateValue } from '@internationalized/date';
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import DatePicker from './DatePicker.vue';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'object',
      description: 'The selected date value'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no date is selected'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the date picker is disabled'
    },
    required: {
      control: 'boolean',
      description: 'Whether the date picker is required'
    },
    name: {
      control: 'text',
      description: 'Name attribute for the form input'
    },
    class: {
      control: 'text',
      description: 'Additional classes to apply to the date picker'
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { DatePicker },
    setup() {
      const date = ref<DateValue>();

      return {
        date
      };
    },
    template: `
      <div class="flex flex-col space-y-4 p-4">
        <DatePicker v-model="date" class="w-64" />
        <div class="text-sm">Selected date: {{ date?.toString() || 'None' }}</div>
      </div>
    `
  })
};

export const WithPlaceholder: Story = {
  render: () => ({
    components: { DatePicker },
    setup() {
      const date = ref<DateValue>();
      return { date };
    },
    template: `<DatePicker v-model="date" placeholder="Select a date..." class="w-64" />`
  })
};

export const Disabled: Story = {
  render: () => ({
    components: { DatePicker },
    setup() {
      const date = ref<DateValue>();
      return { date };
    },
    template: `<DatePicker v-model="date" disabled class="w-64" />`
  })
};

export const Required: Story = {
  render: () => ({
    components: { DatePicker },
    setup() {
      const date = ref<DateValue>();
      return { date };
    },
    template: `<DatePicker v-model="date" required name="birthday" class="w-64" />`
  })
};
