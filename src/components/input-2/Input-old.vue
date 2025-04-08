<template>
  <input
    :id="id"
    :class="cn(inputVariants({ error: !!error }), $attrs.class ?? '')"
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="disabled"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'
import { inputVariants, type InputProps } from './index-old'

withDefaults(defineProps<InputProps>(), {
  modelValue: '',
  id: undefined,
  error: undefined,
  placeholder: undefined,
  disabled: false
})

defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>
