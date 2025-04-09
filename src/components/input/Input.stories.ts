import type { Meta, StoryObj } from '@storybook/vue3';
import { Input } from '.';
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from '@/components/form';
import { PhMagnifyingGlass } from '@phosphor-icons/vue';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { Input, FormItem, FormControl },
    template: `
    <FormItem>
      <FormControl>
        <Input placeholder="Email" />
      </FormControl>
    </FormItem>
    `
  })
};

export const WithLabel: Story = {
  render: () => ({
    components: { Input, FormItem, FormLabel, FormControl },
    template: `
    <FormItem>
      <FormLabel>Email</FormLabel>
      <FormControl>
        <Input placeholder="Enter your email" />
      </FormControl>
    </FormItem>
    `
  })
};

export const WithDescription: Story = {
  render: () => ({
    components: { Input, FormItem, FormLabel, FormControl, FormDescription },
    template: `
    <FormItem>
      <FormLabel>Email</FormLabel>
      <FormControl>
        <Input placeholder="Enter your email" />
      </FormControl>
      <FormDescription>
        This is the email we'll use for important notifications.
      </FormDescription>
    </FormItem>
    `
  })
};

export const WithError: Story = {
  render: () => ({
    components: { Input, FormItem, FormLabel, FormControl, FormMessage },
    template: `
    <FormItem>
      <FormLabel>Email</FormLabel>
      <FormControl>
        <Input
          placeholder="Enter your email"
          modelValue="invalid.email"
          aria-invalid="true"
        />
      </FormControl>
      <FormMessage>Please enter a valid email address</FormMessage>
    </FormItem>
    `
  })
};

export const WithIcon: Story = {
  render: () => ({
    components: { Input, FormItem, FormControl, PhMagnifyingGlass },
    template: `
    <FormItem>
      <FormControl>
        <PhMagnifyingGlass weight="bold" />
        <Input placeholder="Search" />
      </FormControl>
    </FormItem>
    `
  })
};

export const Disabled: Story = {
  render: () => ({
    components: { Input, FormItem, FormControl },
    template: `
    <FormItem>
      <FormControl>
        <Input disabled placeholder="Email" />
      </FormControl>
    </FormItem>
    `
  })
};
