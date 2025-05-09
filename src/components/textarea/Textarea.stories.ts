import type { Meta, StoryObj } from '@storybook/vue3';
import { Textarea } from '.';
import { Label } from '@/components/label';
import { ref } from 'vue';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      description: 'The current value of the textarea',
      control: 'text',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '' }
      }
    },
    'onUpdate:modelValue': {
      description: 'Event emitted when the textarea value changes',
      table: {
        type: { summary: '(value: string | number) => void' },
        category: 'events'
      }
    },
    defaultValue: {
      description: '(Optional) Default value for the textarea',
      control: 'text',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '' }
      }
    },
    class: {
      description: '(Optional) Additional CSS classes to apply to the textarea',
      control: 'text',
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
          'A textarea component that follows WAI-ARIA guidelines. Provides a resizable text input area with support for multiple lines.'
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { Textarea },
    setup() {
      const text = ref('');
      return { text };
    },
    template: '<Textarea v-model="text" placeholder="Type your message here." />'
  })
};

export const WithLabel: Story = {
  render: () => ({
    components: { Textarea, Label },
    setup() {
      const text = ref('');
      return { text };
    },
    template: `
      <div class="grid w-full gap-1.5">
        <Label for="message">Your message</Label>
        <Textarea v-model="text" id="message" placeholder="Type your message here." />
      </div>
    `
  })
};

export const WithDescription: Story = {
  render: () => ({
    components: { Textarea, Label },
    setup() {
      const text = ref('');
      return { text };
    },
    template: `
      <div class="grid w-full gap-1.5">
        <Label for="message">Your message</Label>
        <Textarea v-model="text" id="message" placeholder="Type your message here." />
        <p class="text-sm text-tertiary">
          Your message will be copied to the support team.
        </p>
      </div>
    `
  })
};

export const Disabled: Story = {
  render: () => ({
    components: { Textarea, Label },
    setup() {
      const text = ref('');
      return { text };
    },
    template: `
      <div class="grid w-full gap-1.5">
        <Label for="message">Your message</Label>
        <Textarea v-model="text" placeholder="write here" id="message" disabled />
      </div>
    `
  })
};

export const WithText: Story = {
  render: () => ({
    components: { Textarea },
    template: '<Textarea model-value="This is a textarea with text." placeholder="Type your message here." />'
  })
};
