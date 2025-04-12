import { FormControl, FormItem, FormMessage } from '@/components/form';
import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue
} from '.';

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs']
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: {
      Select,
      SelectTrigger,
      SelectValue,
      SelectContent,
      SelectItem
    },
    setup() {
      const framework = ref('');
      return { framework };
    },
    template: `
      <Select v-model="framework">
        <SelectTrigger class="w-[180px]">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="next">Next.js</SelectItem>
          <SelectItem value="vue">Vue</SelectItem>
          <SelectItem value="nuxt">Nuxt.js</SelectItem>
          <SelectItem value="astro">Astro</SelectItem>
        </SelectContent>
      </Select>
    `
  })
};

export const WithError: Story = {
  render: () => ({
    components: {
      Select,
      SelectTrigger,
      SelectValue,
      SelectContent,
      SelectItem,
      FormControl,
      FormItem,
      FormMessage
    },
    setup() {
      const value = ref('');
      return { value };
    },
    template: `
      <FormItem name="select" error="Please select an option">
        <FormControl>
          <Select v-model="value">
            <SelectTrigger class="w-[180px]">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Option 1</SelectItem>
              <SelectItem value="2">Option 2</SelectItem>
              <SelectItem value="3">Option 3</SelectItem>
            </SelectContent>
          </Select>
        </FormControl>
        <FormMessage />
      </FormItem>
    `
  })
};

export const WithGroups: Story = {
  render: () => ({
    components: {
      Select,
      SelectTrigger,
      SelectValue,
      SelectContent,
      SelectItem,
      SelectGroup,
      SelectLabel,
      SelectSeparator
    },
    setup() {
      const os = ref('');
      return { os };
    },
    template: `
      <Select v-model="os">
        <SelectTrigger class="w-[180px]">
          <SelectValue placeholder="Select an OS" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Desktop</SelectLabel>
            <SelectItem value="windows">Windows</SelectItem>
            <SelectItem value="macos">macOS</SelectItem>
            <SelectItem value="linux">Linux</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Mobile</SelectLabel>
            <SelectItem value="ios">iOS</SelectItem>
            <SelectItem value="android">Android</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    `
  })
};

export const Disabled: Story = {
  render: () => ({
    components: {
      Select,
      SelectTrigger,
      SelectValue,
      SelectContent,
      SelectItem
    },
    setup() {
      const value = ref('');
      return { value };
    },
    template: `
      <Select v-model="value" disabled>
        <SelectTrigger class="w-[180px]">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Option 1</SelectItem>
          <SelectItem value="2">Option 2</SelectItem>
          <SelectItem value="3">Option 3</SelectItem>
        </SelectContent>
      </Select>
    `
  })
};
