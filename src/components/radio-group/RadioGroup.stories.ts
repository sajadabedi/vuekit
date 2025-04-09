import type { Meta, StoryObj } from '@storybook/vue3';
import { RadioGroup, RadioGroupItem } from '.';
import { Label } from '@/components/label';
import { ref } from 'vue';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { RadioGroup, RadioGroupItem, Label },
    setup() {
      const plan = ref('startup');
      return { plan };
    },
    template: `
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
      <RadioGroup v-model="option" disabled>
        <div class="flex gap-2">
          <RadioGroupItem value="option-1" id="option-1" />
          <Label for="option-1">Option 1</Label>
        </div>
        <div class="flex gap-2">
          <RadioGroupItem value="option-2" id="option-2" />
          <Label for="option-2">Option 2</Label>
        </div>
      </RadioGroup>
    `
  })
};
