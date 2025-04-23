<script setup lang="ts">
import type { RadioGroupItemProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import { cn } from '@/lib/utils';
import { RadioGroupIndicator, RadioGroupItem, useForwardProps } from 'reka-ui';
import { computed } from 'vue';

// TODO: Animation

const props = defineProps<RadioGroupItemProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <RadioGroupItem
    data-slot="radio-group-item"
    v-bind="forwardedProps"
    :class="
      cn(
        'bg-interactive shadow-input focus-ring aspect-square size-4 shrink-0 rounded-full disabled:cursor-not-allowed disabled:opacity-70',
        props.class
      )
    "
  >
    <RadioGroupIndicator data-slot="radio-group-indicator" class="relative flex items-center justify-center">
      <span class="bg-accent absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full" />
    </RadioGroupIndicator>
  </RadioGroupItem>
</template>
