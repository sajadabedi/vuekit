import { Button, Input } from '@/components';
import type { Meta, StoryObj } from '@storybook/vue3';
import { Form } from 'vee-validate';
import * as z from 'zod';
import { toTypedSchema } from '@vee-validate/zod';
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from '.';

const meta: Meta<typeof FormItem> = {
  title: 'Components/Form',
  component: FormItem,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

const formSchema = toTypedSchema(
  z.object({
    username: z.string().min(2, 'Username must be at least 2 characters')
  })
);

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
      const onSubmit = (values: any) => {
        console.log(values);
      };
      
      return { onSubmit, formSchema };
    },
    template: `
      <Form :validation-schema="formSchema" @submit="onSubmit" class="w-full max-w-sm space-y-6">
        <FormItem name="username">
          <FormLabel>Username</FormLabel>
          <FormControl>
            <Input name="username" placeholder="Enter username" />
          </FormControl>
          <FormDescription>
            This is your public display name.
          </FormDescription>
          <FormMessage />
        </FormItem>
        <Button type="submit">Submit</Button>
      </Form>
    `
  })
};

const emailSchema = toTypedSchema(
  z.object({
    email: z.string().email('Please enter a valid email address')
  })
);

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
      const onSubmit = (values: any) => {
        console.log(values);
      };
      
      return { onSubmit, emailSchema };
    },
    template: `
      <Form :validation-schema="emailSchema" @submit="onSubmit" class="w-full max-w-sm space-y-6">
        <FormItem name="email">
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input name="email" type="email" placeholder="Enter your email" />
          </FormControl>
          <FormMessage />
        </FormItem>
        <Button type="submit">Submit</Button>
      </Form>
    `
  })
};
