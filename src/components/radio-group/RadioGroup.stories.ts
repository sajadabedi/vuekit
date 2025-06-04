import { Label } from '@/components/label';
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import { RadioGroup, RadioGroupItem } from '.';

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      description: 'The currently selected value',
      control: 'text',
      table: {
        type: { summary: 'string' }
      }
    },
    'onUpdate:modelValue': {
      description: 'Event emitted when the selection changes',
      table: {
        type: { summary: '(value: string) => void' },
        category: 'events'
      }
    },
    class: {
      description: '(Optional) Additional CSS classes to apply to the radio group',
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
          'A radio group component that follows WAI-ARIA guidelines. Supports single selection and custom styling.'
      }
    }
  }
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const radioGroupContainerClass = 'max-w-sm space-y-4';

export const Default: Story = {
  render: () => ({
    components: { RadioGroup, RadioGroupItem, Label },
    setup() {
      const plan = ref('startup');
      return { plan };
    },
    template: `
      <div class="${radioGroupContainerClass}">
        <RadioGroup v-model="plan">
          <div class="flex gap-2">
            <RadioGroupItem value="startup" id="startup" />
            <Label for="startup">Startup</Label>
          </div>
          <div class="flex gap-2">
            <RadioGroupItem value="business" id="business" />
            <Label for="business">Business</Label>
          </div>
          <div class="flex gap-2">
            <RadioGroupItem value="enterprise" id="enterprise" />
            <Label for="enterprise">Enterprise</Label>
          </div>
        </RadioGroup>
      </div>
    `
  })
};

export const WithDescription: Story = {
  render: () => ({
    components: { RadioGroup, RadioGroupItem, Label },
    setup() {
      const plan = ref('basic');
      return { plan };
    },
    template: `
      <div class="${radioGroupContainerClass}">
        <RadioGroup v-model="plan">
          <div class="grid gap-2">
            <div class="flex gap-2">
              <RadioGroupItem value="basic" id="basic" />
              <div>
                <Label for="basic">Basic Plan</Label>
                <p class="text-sm text-tertiary">
                  Perfect for small teams. Includes basic features.
                </p>
              </div>
            </div>
            <div class="flex gap-2">
              <RadioGroupItem value="pro" id="pro" />
              <div>
                <Label for="pro">Pro Plan</Label>
                <p class="text-sm text-tertiary">
                  For growing teams. Includes advanced features and priority support.
                </p>
              </div>
            </div>
          </div>
        </RadioGroup>
      </div>
    `
  })
};

export const Disabled: Story = {
  render: () => ({
    components: { RadioGroup, RadioGroupItem, Label },
    setup() {
      const option = ref('option-1');
      return { option };
    },
    template: `
      <div class="${radioGroupContainerClass}">
        <RadioGroup v-model="option" disabled>
          <div class="flex gap-2">
            <RadioGroupItem value="option-1" id="option-1" />
            <Label for="option-1">Selected</Label>
          </div>
          <div class="flex gap-2">
            <RadioGroupItem value="option-2" id="option-2" />
            <Label for="option-2">Not Selected</Label>
          </div>
        </RadioGroup>
      </div>
    `
  })
};
