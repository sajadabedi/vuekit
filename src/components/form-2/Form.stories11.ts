import { Button, Field, FieldDescription, FieldError, Input, Label } from '@/components'
import { PhFloppyDisk } from '@phosphor-icons/vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'

const meta = {
  title: 'Components/Form',
  component: Field,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A collection of form components that work together to create accessible and consistent forms.'
      },
      source: {
        code: `
<script setup lang="ts">
import { ref } from 'vue'
import { Input, Label, Field, Button } from '@/components'
import { FieldDescription } from '@/components/form/field-description'
import { FieldError } from '@/components/form/field-error'

const form = ref({
  name: '',
  email: '',
  street: '',
  city: '',
  country: ''
})

const errors = ref({
  email: 'Please enter a valid email address'
})

const onSubmit = () => {
  console.log('Form submitted:', form.value)
}
</script>

<template>
  <form @submit.prevent="onSubmit" class="space-y-6 w-full max-w-sm">
    <div class="space-y-4">
      <Field>
        <Label for="name">Full name</Label>
        <Input
          id="name"
          v-model="form.name"
          placeholder="Enter your full name"
        />
        <FieldDescription>Enter your full legal name as it appears on your ID.</FieldDescription>
      </Field>

      <Field>
        <Label for="email">Email address</Label>
        <Input
          id="email"
          type="email"
          v-model="form.email"
          placeholder="Enter your email"
          :error="!!errors.email"
        />
        <FieldDescription>We'll never share your email with anyone else.</FieldDescription>
        <FieldError v-if="errors.email">{{ errors.email }}</FieldError>
      </Field>

      <Field>
        <Label for="street">Street address</Label>
        <Input
          id="street"
          v-model="form.street"
          placeholder="Enter your street address"
        />
        <FieldDescription>Include apartment or suite number if applicable.</FieldDescription>
      </Field>

      <div class="grid grid-cols-2 gap-4">
        <Field>
          <Label for="city">City</Label>
          <Input
            id="city"
            v-model="form.city"
            placeholder="Enter your city"
          />
        </Field>

        <Field>
          <Label for="country">Country</Label>
          <Input
            id="country"
            v-model="form.country"
            placeholder="Enter your country"
          />
        </Field>
      </div>
    </div>

    <Field>
      <Button type="submit" variant="primary" class="w-full">
        <PhFloppyDisk weight="bold" />
        Save address
      </Button>
    </Field>
  </form>
</template>`,
        language: 'vue',
        type: 'code'
      }
    }
  }
} satisfies Meta<typeof Field>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Form Example',
  render: () => ({
    components: { Field, Label, Input, FieldDescription, FieldError, Button, PhFloppyDisk },
    setup() {
      const form = ref({
        name: '',
        email: '',
        street: '',
        city: '',
        country: ''
      })

      const errors = ref({
        email: 'Please enter a valid email address'
      })

      const onSubmit = () => {
        console.log('Form submitted:', form.value)
      }

      return { form, errors, onSubmit }
    },
    template: `
      <form @submit.prevent="onSubmit" class="space-y-6 w-full max-w-sm">
        <div class="space-y-4">
          <Field>
            <Label for="name">Full name</Label>
            <Input
              id="name"
              v-model="form.name"
              placeholder="Enter your full name"
            />
            <FieldDescription>Enter your full legal name as it appears on your ID.</FieldDescription>
          </Field>

          <Field>
            <Label for="email">Email address</Label>
            <Input
              id="email"
              type="email"
              v-model="form.email"
              placeholder="Enter your email"
              :error="!!errors.email"
            />
            <FieldDescription>We'll never share your email with anyone else.</FieldDescription>
            <FieldError v-if="errors.email">{{ errors.email }}</FieldError>
          </Field>

          <Field>
            <Label for="street">Street address</Label>
            <Input
              id="street"
              v-model="form.street"
              placeholder="Enter your street address"
            />
            <FieldDescription>Include apartment or suite number if applicable.</FieldDescription>
          </Field>

          <div class="grid grid-cols-2 gap-4">
            <Field>
              <Label for="city">City</Label>
              <Input
                id="city"
                v-model="form.city"
                placeholder="Enter your city"
              />
            </Field>

            <Field>
              <Label for="country">Country</Label>
              <Input
                id="country"
                v-model="form.country"
                placeholder="Enter your country"
              />
            </Field>

          </div>
          <Field>
            <Button type="submit" variant="primary" class="w-full">
              <PhFloppyDisk weight="bold" />
              Save address
            </Button>
          </Field>
        </div>
      </form>
    `
  })
}
