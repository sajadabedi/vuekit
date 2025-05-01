<script setup lang="ts">
import { cn } from '@/lib/utils';
import { useVModel } from '@vueuse/core';
import type { Component, HTMLAttributes } from 'vue';

const props = defineProps<{
  defaultValue?: string | number;
  modelValue?: string | number;
  class?: HTMLAttributes['class'];
  prefix?: Component;
  suffix?: Component;
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
  <div class="[&>svg]:text-tertiary relative isolate grid grid-cols-[30px_1fr_30px] gap-1">
    <component
      :is="prefix"
      v-if="prefix"
      weight="bold"
      class="pointer-events-none z-10 col-start-1 row-start-1 row-end-1 place-self-center"
    />
    <input
      v-model="modelValue"
      v-bind="$attrs"
      :class="
        cn(
          'control-base flex h-8.5 w-full',
          'col-span-full row-start-1 row-end-1',
          // File Input
          'file:inline-flex file:h-7 file:bg-transparent file:font-medium',
          // Padding if icons are present
          { 'pl-7': prefix },
          { 'pr-7': suffix },
          props.class
        )
      "
    />
    <component
      :is="suffix"
      v-if="suffix"
      weight="bold"
      class="pointer-events-none z-10 col-start-3 row-start-1 row-end-1 place-self-center"
    />
  </div>
</template>
