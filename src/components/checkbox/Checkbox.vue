<script setup lang="ts">
import { cn } from '@/lib/utils';
import type { CheckboxRootEmits, CheckboxRootProps } from 'reka-ui';
import { CheckboxIndicator, CheckboxRoot, useForwardPropsEmits } from 'reka-ui';
import { computed, type HTMLAttributes } from 'vue';

const props = defineProps<CheckboxRootProps & { class?: HTMLAttributes['class'] }>();
const emits = defineEmits<CheckboxRootEmits>();

// TODO: Add indeterminate support.
// TODO: Add disabled support when it's selected.

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <CheckboxRoot
    data-slot="checkbox"
    v-bind="forwarded"
    :class="
      cn(
        'peer bg-interactive shadow-input data-[state=checked]:bg-accent focused hover:bg-muted/40 size-4.5 shrink-0 rounded-sm transition-all duration-300 outline-none disabled:cursor-not-allowed disabled:opacity-70',
        props.class
      )
    "
  >
    <CheckboxIndicator
      data-slot="checkbox-indicator"
      class="flex items-center justify-center text-current transition-none"
    >
      <slot>
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
          <path
            d="M1.00013 3.98401L3.08316 6.06707C3.41134 6.39526 3.94343 6.39526 4.27161 6.06708L9 1.3387"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </slot>
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
