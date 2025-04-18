import type { Meta, StoryObj } from '@storybook/vue3';
import Sonner from './Sonner.vue';
import { Button } from '@/components/button';
import { toast } from 'vue-sonner';

type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center';

const meta: Meta<typeof Sonner> = {
  title: 'Components/Sonner',
  component: Sonner,
  tags: ['autodocs'],
  argTypes: {
    position: {
      description: 'The position of the toast notifications',
      control: 'select',
      options: [
        'top-left',
        'top-right',
        'bottom-left',
        'bottom-right',
        'top-center',
        'bottom-center'
      ] as Position[],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'bottom-right' }
      }
    },
    expand: {
      description: '(Optional) Whether toasts should expand to fill the available width',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    visibleToasts: {
      description: '(Optional) Maximum number of visible toasts',
      control: { type: 'number', min: 1 },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '3' }
      }
    },
    closeButton: {
      description: '(Optional) Whether to show a close button on toasts',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    offset: {
      description: '(Optional) Distance in pixels from the viewport edges',
      control: { type: 'number', min: 0 },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '32' }
      }
    },
    class: {
      description: '(Optional) Additional CSS classes to apply to the toaster',
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
          'A toast notification system built with Vue 3 and TypeScript. Provides a beautiful, minimal interface for showing toast messages.'
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Sonner, Button },
    setup() {
      const showToast = () => {
        toast('Event has been created');
      };
      return { args, showToast };
    },
    template: `
      <div class="flex flex-col items-start gap-4">
        <Button @click="showToast">Show Toast</Button>
        <Sonner v-bind="args" />
      </div>
    `
  })
};

export const WithDescription: Story = {
  render: (args) => ({
    components: { Sonner, Button },
    setup() {
      const showToast = () => {
        toast('Event has been created', {
          description: 'Sunday, December 03, 2023 at 9:00 AM'
        });
      };
      return { args, showToast };
    },
    template: `
      <div class="flex flex-col items-start gap-4">
        <Button @click="showToast">Show Toast with Description</Button>
        <Sonner v-bind="args" />
      </div>
    `
  })
};

export const WithAction: Story = {
  render: (args) => ({
    components: { Sonner, Button },
    setup() {
      const showToast = () => {
        toast('Event has been created', {
          action: {
            label: 'Undo',
            onClick: () => console.log('Undo clicked')
          }
        });
      };
      return { args, showToast };
    },
    template: `
      <div class="flex flex-col items-start gap-4">
        <Button @click="showToast">Show Toast with Action</Button>
        <Sonner v-bind="args" />
      </div>
    `
  })
};

export const WithPromise: Story = {
  render: (args) => ({
    components: { Sonner, Button },
    setup() {
      const showToast = () => {
        toast.promise(
          () => new Promise((resolve) => setTimeout(resolve, 2000)),
          {
            loading: 'Loading...',
            success: 'Operation completed successfully!',
            error: 'Something went wrong.'
          }
        );
      };
      return { args, showToast };
    },
    template: `
      <div class="flex flex-col items-start gap-4">
        <Button @click="showToast">Show Promise Toast</Button>
        <Sonner v-bind="args" />
      </div>
    `
  })
};

export const Variants: Story = {
  render: (args) => ({
    components: { Sonner, Button },
    setup() {
      const showSuccess = () => toast.success('Success message');
      const showError = () => toast.error('Error message');
      const showWarning = () => toast.warning('Warning message');
      return { args, showSuccess, showError, showWarning };
    },
    template: `
      <div class="flex flex-col items-start gap-4">
        <div class="flex gap-2">
          <Button @click="showSuccess">Success</Button>
          <Button @click="showError" variant="destructive">Error</Button>
          <Button @click="showWarning" variant="ghost">Warning</Button>
        </div>
        <Sonner v-bind="args" />
      </div>
    `
  })
};
