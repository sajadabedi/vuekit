import { PhEnvelope, PhLock, PhMagnifyingGlass, PhUser } from '@phosphor-icons/vue';
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { Input } from '.';

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs']
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { Input },
    template: `
      <div class="flex w-full max-w-sm flex-col gap-4">
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input disabled placeholder="Disabled input" />
      </div>
    `
  })
};

export const WithIcons: Story = {
  render: () => ({
    components: { Input },
    setup() {
      return { PhMagnifyingGlass, PhEnvelope, PhLock };
    },
    template: `
      <div class="flex w-full max-w-sm flex-col gap-4">
        <Input placeholder="Search..." :prefix="PhMagnifyingGlass" />
        <Input type="email" placeholder="Email" :suffix="PhEnvelope" />
        <Input type="password" placeholder="Password" :prefix="PhLock" />
      </div>
    `
  })
};

export const WithLabel: Story = {
  render: () => ({
    components: { Input },
    template: `
      <div class="grid w-full max-w-sm gap-1.5">
        <label class="text-sm font-medium leading-none">Email</label>
        <Input type="email" placeholder="Email" />
        <p class="text-sm text-muted">Enter your email address.</p>
      </div>
    `
  })
};
