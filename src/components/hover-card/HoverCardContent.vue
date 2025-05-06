<script setup lang="ts">
import { cn } from '@/lib/utils';
import { HoverCardContent, type HoverCardContentProps, HoverCardPortal, useForwardProps } from 'reka-ui';
import { computed, type HTMLAttributes } from 'vue';

const props = withDefaults(defineProps<HoverCardContentProps & { class?: HTMLAttributes['class'] }>(), {
  sideOffset: 4
});

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <HoverCardPortal>
    <HoverCardContent
      v-bind="forwardedProps"
      :class="
        cn(
          'bg-elevated-on-dark shadow-floating z-50 w-64 rounded-md p-4 outline-hidden',
          // Animation in
          'motion-duration-300 data-[state=open]:motion-translate-y-in-[3%] data-[state=open]:motion-opacity-in-0',
          // Animation out
          'data-[state=closed]:motion-opacity-out-0 data-[state=closed]:motion-translate-y-out-[3%] data-[state=closed]:motion-duration-[50ms]',
          props.class
        )
      "
    >
      <slot />
    </HoverCardContent>
  </HoverCardPortal>
</template>
