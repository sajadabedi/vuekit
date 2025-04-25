<script setup lang="ts">
import { cn } from '@/lib/utils';
import { useVModel } from '@vueuse/core';
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
  class?: HTMLAttributes['class'];
  defaultValue?: string | number;
  modelValue?: string | number;
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
  <textarea
    v-model="modelValue"
    data-slot="textarea"
    :class="
      cn(
        'placeholder:text-placeholder bg-elevated-on-dark shadow-input focus-ring-input disabled:bg-disabled flex field-sizing-content min-h-16 w-full min-w-0 rounded-md p-2 text-base transition-[color,box-shadow]',
        'disabled:pointer-events-none disabled:cursor-not-allowed disabled:shadow-none',
        'hover:shadow-input-hover aria-invalid:ring-critical',
        props.class
      )
    "
  />
</template>
