import type { Meta, StoryObj } from '@storybook/vue3';
import { Label } from '.';
import { Input } from '@/components/input';
import { Checkbox } from '@/components/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/radio-group';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    optional: {
      control: 'boolean',
      description: 'Show optional indicator',
      defaultValue: false
    },
    tooltip: {
      control: 'text',
      description: 'Tooltip text to show when hovering over the info icon'
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { Label },
    template: '<Label>Accept terms and conditions</Label>'
  })
};

export const WithInput: Story = {
  render: () => ({
    components: { Label, Input },
    template: `
      <div class="grid gap-2">
        <Label for="email">Your email address</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>
    `
  })
};

export const WithCheckbox: Story = {
  render: () => ({
    components: { Label, Checkbox },
    template: `
      <div class="flex gap-2">
        <Checkbox id="terms" />
        <Label for="terms">Accept terms and conditions</Label>
      </div>
    `
  })
};

export const WithRadioGroup: Story = {
  render: () => ({
    components: { Label, RadioGroup, RadioGroupItem },
    template: `
      <RadioGroup class="grid gap-2">
        <div class="flex gap-2">
          <RadioGroupItem value="default" id="default" />
          <Label for="default">Default</Label>
        </div>
        <div class="flex gap-2">
          <RadioGroupItem value="comfortable" id="comfortable" />
          <Label for="comfortable">Comfortable</Label>
        </div>
      </RadioGroup>
    `
  })
};

export const Required: Story = {
  render: () => ({
    components: { Label, Input },
    template: `
      <div class="grid gap-2">
        <Label for="email" required>Email address</Label>
        <Input type="email" id="email" placeholder="Email" required />
      </div>
    `
  })
};

export const Optional: Story = {
  render: () => ({
    components: { Label },
    template: '<Label optional>Email</Label>'
  })
};

export const WithTooltip: Story = {
  render: () => ({
    components: { Label },
    template: '<Label tooltip="Will be used for notifications">Email</Label>'
  })
};

export const OptionalWithTooltip: Story = {
  render: () => ({
    components: { Label },
    template: '<Label optional tooltip="Will be used for notifications">Email</Label>'
  })
};
