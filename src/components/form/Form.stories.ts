import { Button, Input } from '@/components';
import { PhMailbox, PhUser } from '@phosphor-icons/vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import { toTypedSchema } from '@vee-validate/zod';
import { configure, useForm } from 'vee-validate';
import * as z from 'zod';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '.';

// Configure global validation behavior
configure({
  validateOnBlur: true,
  validateOnChange: false,
  validateOnInput: false,
  validateOnModelUpdate: false
});

const meta: Meta<typeof FormItem> = {
  title: 'Components/Form',
  component: FormItem,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

const formSchema = toTypedSchema(
  z.object({
    username: z
      .string()
      .min(2, 'Username must be at least 2 characters')
      .max(50, 'Username must be less than 50 characters'),
    email: z.string().email('Please enter a valid email address')
  })
);

export const Default: Story = {
  render: () => ({
    components: {
      FormField,
      FormItem,
      FormLabel,
      FormControl,
      FormMessage,
      FormDescription,
      Input,
      Button,
      PhUser
    },
    setup() {
      const { handleSubmit } = useForm({
        validationSchema: formSchema
      });

      const onSubmit = handleSubmit((values) => {
        console.log('Form submitted:', values);
      });

      return { onSubmit };
    },
    template: `
      <form @submit="onSubmit" class="w-full max-w-sm space-y-6">
        <FormField v-slot="{ componentField }" name="username">
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input v-bind="componentField" placeholder="Enter username" />
            </FormControl>
            <FormDescription>
              This is your public display name.
            </FormDescription>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="email">
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input v-bind="componentField" type="email" placeholder="Enter your email" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <Button type="submit">Submit</Button>
      </form>
    `
  })
};

export const ValidateOnBlur: Story = {
  render: () => ({
    components: {
      FormField,
      FormItem,
      FormLabel,
      FormControl,
      FormMessage,
      FormDescription,
      Input,
      Button
    },
    setup() {
      const { handleSubmit } = useForm({
        validationSchema: formSchema,
        validateOnMount: false
      });

      const onSubmit = handleSubmit((values) => {
        console.log('Form submitted:', values);
      });

      return { onSubmit };
    },
    template: `
      <form @submit="onSubmit" class="w-full max-w-sm space-y-6">
        <FormField v-slot="{ componentField }" name="username">
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input v-bind="componentField" placeholder="Enter username" />
            </FormControl>
            <FormDescription>
              This is your public display name.
            </FormDescription>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="email">
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input v-bind="componentField" type="email" placeholder="Enter your email" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <Button type="submit">Submit</Button>
      </form>
    `
  })
};
