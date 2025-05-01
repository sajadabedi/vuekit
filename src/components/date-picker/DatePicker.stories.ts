import { type DateValue } from '@internationalized/date';
import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import DatePicker from './DatePicker.vue';

const meta = {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof DatePicker>;

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
      <div class="flex flex-col space-y-4">
        <DatePicker v-model="date" />
      </div>
    `
  })
};
