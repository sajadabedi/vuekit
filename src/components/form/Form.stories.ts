import type { Meta, StoryObj } from '@storybook/vue3'
import { Form, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from '.'
import { Input } from '../input'
import { Button } from '@components/button/'
import { ref } from 'vue'

const meta: Meta<typeof Form> = {
  title: 'Components/Form',
  component: Form,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: {
      Form,
      FormItem,
      FormLabel,
      FormControl,
      FormMessage,
      FormDescription,
      Input,
      Button
    },
    setup() {
      const username = ref('')
      return { username }
    },
    template: `
      <Form class="w-full max-w-sm space-y-6">
        <FormItem>
          <FormLabel>Username</FormLabel>
          <FormControl>
            <Input v-model="username" placeholder="Enter username" />
          </FormControl>
          <FormDescription>
            This is your public display name.
          </FormDescription>
          <FormMessage>
            Username is required.
          </FormMessage>
        </FormItem>
        <Button type="submit">Submit</Button>
      </Form>
    `
  })
}

export const WithValidation: Story = {
  render: () => ({
    components: {
      Form,
      FormItem,
      FormLabel,
      FormControl,
      FormMessage,
      Input,
      Button
    },
    setup() {
      const email = ref('')
      return { email }
    },
    template: `
      <Form class="w-full max-w-sm space-y-6">
        <FormItem class="space-y-2">
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input
              v-model="email"
              type="email"
              placeholder="m@example.com"
              :class="{'border-red-500': !email.includes('@')}"
            />
          </FormControl>
          <FormMessage v-if="email && !email.includes('@')">
            Please enter a valid email address.
          </FormMessage>
        </FormItem>
        <Button type="submit">Submit</Button>
      </Form>
    `
  })
}
