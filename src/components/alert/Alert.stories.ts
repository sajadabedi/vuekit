import type { Meta, StoryObj } from '@storybook/vue3'
import { Alert, AlertTitle, AlertDescription } from '.'
import { PhInfo } from '@phosphor-icons/vue'

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
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Alert, AlertTitle, AlertDescription, PhInfo },
    template: `
      <Alert>
        <PhInfo class="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    `
  })
}

export const Destructive: Story = {
  render: () => ({
    components: { Alert, AlertTitle, AlertDescription, PhInfo },
    template: `
      <Alert variant="destructive">
        <PhInfo class="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>
    `
  })
}
