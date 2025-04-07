<template>
  <div class="grid w-full gap-1.5">
    <Label v-if="label" :for="id">{{ label }}</Label>
    <input
      :id="id"
      :class="cn(textFieldVariants({ error: !!error }), $attrs.class ?? '')"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      v-bind="$attrs"
    />
    <p v-if="error" class="text-red-contrast text-sm">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'
import { Label } from '@/components'
import { textFieldVariants, type TextFieldProps } from './index'

withDefaults(defineProps<TextFieldProps>(), {
  modelValue: '',
  label: undefined,
  error: undefined,
  id: undefined,
  placeholder: undefined,
  disabled: false
})

defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>
