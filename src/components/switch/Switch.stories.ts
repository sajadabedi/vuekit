import { Label } from '@/components/label';
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import { Switch } from '.';

const meta = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      description: 'The current state of the switch',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    'onUpdate:modelValue': {
      description: 'Event emitted when the switch state changes',
      table: {
        type: { summary: '(value: boolean) => void' },
        category: 'events'
      }
    },
    disabled: {
      description: '(Optional) Whether the switch is disabled',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    class: {
      description: '(Optional) Additional CSS classes to apply to the switch',
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
          'A switch component that follows WAI-ARIA guidelines. Provides a toggle between two states with smooth transitions and focus management.'
      }
    }
  }
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { Switch },
    setup() {
      const checked = ref(false);
      return { checked };
    },
    template: '<Switch v-model="checked" />'
  })
};

export const WithLabel: Story = {
  render: () => ({
    components: { Switch, Label },
    setup() {
      const checked = ref(true);
      return { checked };
    },
    template: `
      <div class="flex items-center gap-2">
        <Switch v-model="checked" id="airplane-mode" />
        <Label for="airplane-mode">Airplane Mode</Label>
      </div>
    `
  })
};

export const Disabled: Story = {
  render: () => ({
    components: { Switch, Label },
    setup() {
      const checked = ref(false);
      const checked2 = ref(true);
      return { checked, checked2 };
    },
    template: `
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-2">
          <Switch v-model="checked" disabled id="disabled-unchecked" />
          <Label for="disabled-unchecked">Disabled (Unchecked)</Label>
        </div>
        <div class="flex items-center gap-2">
          <Switch v-model="checked2" disabled id="disabled-checked" />
          <Label for="disabled-checked">Disabled (Checked)</Label>
        </div>
      </div>
    `
  })
};

export const WithDescription: Story = {
  render: () => ({
    components: { Switch, Label },
    setup() {
      const checked = ref(false);
      return { checked };
    },
    template: `
      <div class="flex items-start gap-2">
        <Switch v-model="checked" id="notifications" />
        <div class="grid gap-1.5">
          <Label for="notifications">Push Notifications</Label>
          <p class="text-sm text-tertiary">
            Receive notifications when someone mentions you in a comment.
          </p>
        </div>
      </div>
    `
  })
};
