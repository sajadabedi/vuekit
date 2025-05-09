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
    for: {
      description: 'The ID of the form control this label is bound to',
      control: 'text',
      table: {
        type: { summary: 'string' }
      }
    },
    optional: {
      description: '(Optional) Whether to show an optional indicator',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    tooltip: {
      description: '(Optional) Tooltip text to show when hovering over the info icon',
      control: 'text',
      table: {
        type: { summary: 'string' }
      }
    },
    class: {
      description: '(Optional) Additional CSS classes to apply to the label',
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
          'A label component that can be associated with form controls. Supports optional indicators and tooltips.'
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

const labelContainerClass = 'max-w-sm space-y-4';

export const Default: Story = {
  args: {
    for: 'input-1'
  },
  render: (args) => ({
    components: { Label },
    setup() {
      return { args };
    },
    template: `
      <div class="${labelContainerClass}">
        <Label v-bind="args">Label</Label>
      </div>
    `
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
  args: {
    for: 'input-2',
    optional: true
  },
  render: (args) => ({
    components: { Label },
    setup() {
      return { args };
    },
    template: `
      <div class="${labelContainerClass}">
        <Label v-bind="args">Label with optional indicator</Label>
        <Input id="input-2" type="text" />
      </div>
    `
  })
};

export const WithTooltip: Story = {
  args: {
    for: 'input-3',
    tooltip: 'This is a helpful tooltip'
  },
  render: (args) => ({
    components: { Label },
    setup() {
      return { args };
    },
    template: `
      <div class="${labelContainerClass}">
        <Label v-bind="args">Label with tooltip</Label>
        <Input id="input-3" type="text" />
      </div>
    `
  })
};

export const OptionalWithTooltip: Story = {
  args: {
    for: 'input-4',
    optional: true,
    tooltip: 'This field is optional'
  },
  render: (args) => ({
    components: { Label },
    setup() {
      return { args };
    },
    template: `
      <div class="${labelContainerClass}">
        <Label v-bind="args">Label with optional and tooltip</Label>
        <Input id="input-4" type="text" />
      </div>
    `
  })
};
