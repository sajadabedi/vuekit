import type { Meta, StoryObj } from '@storybook/vue3';
import { Toaster, toast } from '.';
import { Button } from '@/components';

const meta: Meta<typeof Toaster> = {
  title: 'Components/Sonner',
  component: Toaster,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { Toaster, Button },
    setup() {
      const showToast = () => {
        toast('Event has been created');
      };
      return { showToast };
    },
    template: `
      <div>
        <Button @click="showToast">Show Toast</Button>
        <Toaster />
      </div>
    `
  })
};

export const WithDescription: Story = {
  render: () => ({
    components: { Toaster, Button },
    setup() {
      const showToast = () => {
        toast('Event Created', {
          description: 'Your event has been successfully created.'
        });
      };
      return { showToast };
    },
    template: `
      <div>
        <Button @click="showToast">Show Toast</Button>
        <Toaster />
      </div>
    `
  })
};

export const WithAction: Story = {
  render: () => ({
    components: { Toaster, Button },
    setup() {
      const showToast = () => {
        toast('Event Created', {
          action: {
            label: 'Undo',
            onClick: () => console.log('Undo')
          }
        });
      };
      return { showToast };
    },
    template: `
      <div>
        <Button @click="showToast">Show Toast with Action</Button>
        <Toaster />
      </div>
    `
  })
};

export const Variants: Story = {
  render: () => ({
    components: { Toaster, Button },
    setup() {
      const showSuccess = () => {
        toast.success('Success message');
      };
      const showError = () => {
        toast.error('Error message');
      };
      const showWarning = () => {
        toast.warning('Warning message');
      };
      return { showSuccess, showError, showWarning };
    },
    template: `
      <div class="flex space-x-2">
        <Button @click="showSuccess" variant="default">Success</Button>
        <Button @click="showError" variant="destructive">Error</Button>
        <Button @click="showWarning" variant="ghost">Warning</Button>
        <Toaster />
      </div>
    `
  })
};
