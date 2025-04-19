import { FormControl, FormItem, FormMessage } from '@/components/form';
import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemText,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue
} from '.';

const meta = {
  title: 'Components/Select',
  component: Select,
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
      description: '(Optional) Additional CSS classes to apply to the select',
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
          'A select component that follows WAI-ARIA guidelines. Supports single selection, grouping, and custom triggers.'
      }
    }
  }
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const selectContainerClass = 'w-[180px]';

export const Default: Story = {
  render: () => ({
    components: {
      Select,
      SelectTrigger,
      SelectValue,
      SelectContent,
      SelectItem,
      SelectItemText
    },
    setup() {
      const framework = ref('');
      return { framework };
    },
    template: `
      <div class="${selectContainerClass}">
        <Select v-model="framework">
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="next">
              <SelectItemText>Next.js</SelectItemText>
            </SelectItem>
            <SelectItem value="vue">
              <SelectItemText>Vue</SelectItemText>
            </SelectItem>
            <SelectItem value="nuxt">
              <SelectItemText>Nuxt.js</SelectItemText>
            </SelectItem>
            <SelectItem value="astro">
              <SelectItemText>Astro</SelectItemText>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
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
      SelectGroup,
      SelectLabel,
      SelectItem,
      SelectItemText,
      SelectSeparator
    },
    setup() {
      const os = ref('');
      return { os };
    },
    template: `
      <div class="${selectContainerClass}">
        <Select v-model="os">
          <SelectTrigger>
            <SelectValue placeholder="Select an OS" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Desktop</SelectLabel>
              <SelectItem value="windows">
                <SelectItemText>Windows</SelectItemText>
              </SelectItem>
              <SelectItem value="macos">
                <SelectItemText>macOS</SelectItemText>
              </SelectItem>
              <SelectItem value="linux">
                <SelectItemText>Linux</SelectItemText>
              </SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Mobile</SelectLabel>
              <SelectItem value="ios">
                <SelectItemText>iOS</SelectItemText>
              </SelectItem>
              <SelectItem value="android">
                <SelectItemText>Android</SelectItemText>
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
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

export const WithScrollButtons: Story = {
  render: () => ({
    components: {
      Select,
      SelectTrigger,
      SelectValue,
      SelectContent,
      SelectItem,
      SelectItemText,
      SelectScrollUpButton,
      SelectScrollDownButton
    },
    setup() {
      const value = ref('');
      return { value };
    },
    template: `
      <div class="${selectContainerClass}">
        <Select v-model="value">
          <SelectTrigger>
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectScrollUpButton />
            <SelectItem value="apple">
              <SelectItemText>Apple</SelectItemText>
            </SelectItem>
            <SelectItem value="banana">
              <SelectItemText>Banana</SelectItemText>
            </SelectItem>
            <SelectItem value="orange">
              <SelectItemText>Orange</SelectItemText>
            </SelectItem>
            <SelectItem value="grape">
              <SelectItemText>Grape</SelectItemText>
            </SelectItem>
            <SelectItem value="mango">
              <SelectItemText>Mango</SelectItemText>
            </SelectItem>
            <SelectScrollDownButton />
          </SelectContent>
        </Select>
      </div>
    `
  })
};
