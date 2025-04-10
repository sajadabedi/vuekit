import type { Meta, StoryObj } from '@storybook/vue3';
import { Alert, AlertTitle, AlertDescription } from '.';
import { PhInfo, PhWarningOctagon } from '@phosphor-icons/vue';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive']
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

export const Destructive: Story = {
  render: () => ({
    components: { Alert, AlertTitle, AlertDescription, PhWarningOctagon },
    template: `
      <Alert variant="destructive">
        <PhWarningOctagon weight="fill" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>
    `
  })
};
