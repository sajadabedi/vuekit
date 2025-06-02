<script setup lang="ts">
import { cn } from '@/lib/utils';
import { motion } from 'motion-v';
import type { CheckboxRootEmits, CheckboxRootProps } from 'reka-ui';
import { CheckboxIndicator, CheckboxRoot, useForwardPropsEmits } from 'reka-ui';
import { computed, type HTMLAttributes } from 'vue';

const props = defineProps<CheckboxRootProps & { class?: HTMLAttributes['class'] }>();
const emits = defineEmits<CheckboxRootEmits>();

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
        'group bg-interactive shadow-input  size-4.5 shrink-0 rounded-sm text-white transition-all duration-300 outline-none',
        // State
        'data-[state=checked]:bg-accent focus-ring hover:bg-muted/40',
        // Disabled
        'disabled:cursor-not-allowed data-[state=checked]:disabled:bg-disabled disabled:text-tertiary disabled:bg-disabled',

        props.class
      )
    "
  >
    <CheckboxIndicator data-slot="checkbox-indicator" class="flex items-center justify-center text-white">
      <slot>
        <svg
          width="10"
          height="8"
          viewBox="0 0 10 8"
          fill="none"
          class="group-disabled:text-black/30 dark:group-disabled:text-white/30"
        >
          <motion.path
            :initial="false"
            :animate="{
              pathLength: props.modelValue ? 1 : 0,
              opacity: props.modelValue ? 1 : 0
            }"
            d="M1.00013 3.98401L3.08316 6.06707C3.41134 6.39526 3.94343 6.39526 4.27161 6.06708L9 1.3387"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </slot>
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
