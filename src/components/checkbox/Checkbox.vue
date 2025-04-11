<script setup lang="ts">
import { cn } from '@/lib/utils';
import { motion } from 'motion-v';
import type { CheckboxRootEmits, CheckboxRootProps } from 'reka-ui';
import { CheckboxIndicator, CheckboxRoot, useForwardPropsEmits } from 'reka-ui';
import { computed, onMounted, onUnmounted, ref, type HTMLAttributes } from 'vue';

const props = defineProps<CheckboxRootProps & { class?: HTMLAttributes['class'] }>();
const emits = defineEmits<CheckboxRootEmits>();

// TODO: Add indeterminate support.
// TODO: Add disabled support when it's selected.

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);

const isFirstRender = ref(true);
const timeoutId = ref<number>();

onMounted(() => {
  // Wait a tick to prevent initial animation
  timeoutId.value = setTimeout(() => {
    isFirstRender.value = false;
  }, 0);
});

onUnmounted(() => {
  if (timeoutId.value) {
    clearTimeout(timeoutId.value);
  }
});
</script>

<template>
  <CheckboxRoot
    data-slot="checkbox"
    v-bind="forwarded"
    :class="
      cn(
        'group bg-interactive shadow-input data-[state=checked]:bg-accent focus-ring hover:bg-muted/40 data-[state=checked]:disabled:bg-disabled disabled:text-tertiary size-4.5 shrink-0 rounded-sm text-white transition-all duration-300 outline-none disabled:cursor-not-allowed disabled:opacity-70',
        props.class
      )
    "
  >
    <CheckboxIndicator data-slot="checkbox-indicator" class="flex items-center justify-center text-current">
      <slot>
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
          <motion.path
            :initial="{ pathLength: 0, opacity: 0 }"
            :animate="{ pathLength: props.modelValue ? 1 : 0, opacity: props.modelValue ? 1 : 0 }"
            :transition="{ duration: isFirstRender ? 0 : 0.2, ease: 'easeOut' }"
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
