<template>
  <div class="grid w-full gap-1">
    <Label v-if="label" :for="id" optional>{{ label }}</Label>
    <input
      :id="id"
      :class="cn(textFieldVariants({ error: !!error }), $attrs.class ?? '')"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      v-bind="$attrs"
    />
    <p v-if="error" class="text-critical text-sm">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { Label } from '@/components'
import { cn } from '@/lib/utils'
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
