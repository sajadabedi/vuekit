<script setup lang="ts">
import { cn } from '@/lib/utils';
import { useVModel } from '@vueuse/core';
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
  defaultValue?: string | number;
  modelValue?: string | number;
  class?: HTMLAttributes['class'];
}>();

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void;
}>();

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue
});
</script>

<template>
  <input
    v-model="modelValue"
    data-slot="input"
    :class="
      cn(
        'placeholder:text-placeholder bg-elevated-on-dark shadow-input flex h-8.5 w-full min-w-0 rounded-md px-2 text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
        'focus-ring',
        'aria-invalid:border-critical aria-invalid:focus-within:ring-critical',
        props.class
      )
    "
  />
</template>
