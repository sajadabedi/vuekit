import { PhInfo, PhWarning, PhWarningOctagon } from '@phosphor-icons/vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import { Alert, AlertDescription, AlertTitle } from '.';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'critical', 'warning']
    },
    class: {
      description: '(Optional) Additional CSS classes to apply to the alert',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { Alert, AlertTitle, AlertDescription, PhInfo },
    template: `
      <Alert>
        <PhInfo weight="fill" class="text-blue-contrast" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    `
  })
};

export const critical: Story = {
  render: () => ({
    components: { Alert, AlertTitle, AlertDescription, PhWarningOctagon },
    template: `
      <Alert variant="critical">
        <PhWarningOctagon weight="fill" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>
    `
  })
};

export const warning: Story = {
  render: () => ({
    components: { Alert, AlertTitle, AlertDescription, PhWarning },
    template: `
      <Alert variant="warning">
        <PhWarning weight="fill" />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>
    `
  })
};
