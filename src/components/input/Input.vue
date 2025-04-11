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
    data-slot="control"
    :class="
      cn(
        'placeholder:text-placeholder bg-elevated-on-dark shadow-input disabled:bg-disabled flex h-8.5 w-full min-w-0 rounded-md px-2 text-base transition-[color,background-color,box-shadow] outline-none file:inline-flex file:h-7 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-70 disabled:shadow-none',
        'aria-invalid:border-critical aria-invalid:focus-within:ring-[var(--ui-color-border-critical)]',
        'hover:bg-secondary/70',
        'focus-visible:shadow-[0_0_0_1px_rgba(0,0,0,0.18)_inset,0_0_0_2px_rgba(0,0,0,0.08)] dark:focus-visible:shadow-[0_0_0_1px_rgba(255,255,255,0.30)_inset,0_0_0_3px_rgba(255,255,255,0.15)]',
        props.class
      )
    "
  />
</template>
