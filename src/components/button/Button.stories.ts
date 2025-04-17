import { Spinner } from '@/components';
import { PhHouse, PhPlus, PhTrash } from '@phosphor-icons/vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import { Button } from '.';
import { PhSpinner } from '@phosphor-icons/vue';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'The visual style variant of the button',
      control: 'select',
      options: ['default', 'destructive', 'primary', 'ghost'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' }
      }
    },
    size: {
      description: 'The size of the button',
      control: 'select',
      options: ['default', 'sm', 'icon'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' }
      }
    },
    as: {
      description: 'The element to render the button as',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'button' }
      }
    },
    asChild: {
      description: 'Whether to render the button as a child component',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    class: {
      description: '(Optional) Additional CSS classes to apply to the button',
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
          'A versatile button component that supports various styles, sizes, and states. Built with accessibility in mind and follows WAI-ARIA guidelines.'
      }
    }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  render: () => ({
    components: { Button, PhHouse, PhPlus, PhTrash },
    template: `
      <div class="flex flex-row gap-4">
        <Button variant="default">Default</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
    `
  })
};

export const Default: Story = {
  render: () => ({
    components: { Button },
    template: '<Button>Default</Button>'
  })
};

export const WithIcon: Story = {
  render: () => ({
    components: { Button, PhHouse },
    template: `<div class="flex gap-4">
      <Button><PhHouse weight="bold" /> With Icon</Button>
      <Button>With Icon<PhHouse weight="bold" /></Button>
      </div>`
  })
};

export const IconOnly: Story = {
  render: () => ({
    components: { Button, PhHouse },
    template: '<Button size="icon"><PhHouse weight="bold" /></Button>'
  })
};

// export const Small: Story = {
//   render: () => ({
//     components: { Button },
//     template: '<Button size="sm">Small button</Button>'
//   })
// };

export const Disabled: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="flex gap-4">
        <Button disabled>Default</Button>
        <Button disabled variant="primary">Primary</Button>
        <Button disabled variant="destructive">Destructive</Button>
        <Button disabled variant="ghost">Ghost</Button>
      </div>
    `
  })
};

export const Loading: Story = {
  render: () => ({
    components: { Button, Spinner },
    template: '<Button variant="primary"><Spinner class="size-4"/> Submit</Button>'
  })
};

export const FullWidth: Story = {
  render: () => ({
    components: { Button },
    template: '<Button class="w-full" variant="primary">Full width</Button>'
  })
};
