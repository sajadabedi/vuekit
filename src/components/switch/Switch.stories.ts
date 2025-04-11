import { Label } from '@/components/label';
import type { Meta, StoryObj } from '@storybook/vue3';
import { Switch } from '.';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { Switch },
    template: '<Switch />'
  })
};

export const WithLabel: Story = {
  render: () => ({
    components: { Switch, Label },
    template: `
      <div class="flex gap-2">
        <Switch id="airplane-mode" />
        <Label for="airplane-mode">Airplane Mode</Label>
      </div>
    `
  })
};

export const Disabled: Story = {
  render: () => ({
    components: { Switch, Label },
    template: `
      <div class="flex gap-2">
        <Switch id="airplane-mode" disabled />
        <Label for="airplane-mode" class="text-gray-500">Airplane Mode</Label>
      </div>
    `
  })
};
