import type { Meta, StoryObj } from '@storybook/vue3';
import { Input } from '.';
import { Label } from '@/components/label';
import { PhUser } from '@phosphor-icons/vue';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { Input },
    template: '<Input type="email" placeholder="Email" />'
  })
};

export const WithLabel: Story = {
  render: () => ({
    components: { Input, Label },
    template: `
      <div class="grid gap-2">
        <Label for="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>
    `
  })
};

export const WithText: Story = {
  render: () => ({
    components: { Input },
    template: `
      <div class="grid gap-2">
        <Input type="email" value="example@email.com" />
      </div>
    `
  })
};

export const WithError: Story = {
  render: () => ({
    components: { Input, Label },
    template: `
      <div class="grid gap-2">
        <Label for="email">Email</Label>
        <Input
          type="email"
          id="email"
          placeholder="Enter your email"
          modelValue="invalid.email"
          error
          aria-invalid="true"
          aria-describedby="email-error"
        />
        <p id="email-error" class="text-sm font-medium text-critical">Please enter a valid email address</p>
      </div>
    `
  })
};

export const WithIcon: Story = {
  render: () => ({
    components: { Input, PhUser },
    template: `
      <div class="relative">
        <PhUser class="absolute left-3 top-2.5 size-4 text-gray-500" />
        <Input placeholder="Username" class="pl-10" />
      </div>
    `
  })
};

export const Disabled: Story = {
  render: () => ({
    components: { Input },
    template: '<Input disabled placeholder="Email" />'
  })
};
