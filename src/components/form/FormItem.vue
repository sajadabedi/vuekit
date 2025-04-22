<script lang="ts" setup>
import { cn } from '@/lib/utils';
import { useId } from 'reka-ui';
import { type HTMLAttributes, provide } from 'vue';
import { FORM_ITEM_INJECTION_KEY } from './injectionKeys';

const props = defineProps<{
  class?: HTMLAttributes['class'];
}>();

const id = useId();
provide(FORM_ITEM_INJECTION_KEY, id);
</script>

<template>
  <div
    :class="
      cn(
        '[&>svg]:text-tertiary [&:has([data-slot=control]+svg)>[data-slot=control]]:pr-6.5 [&>[data-slot=control]]:col-span-full [&>svg]:z-10',
        // Layout
        'relative isolate grid grid-cols-[30px_1fr_30px] gap-1',
        // Validation
        'data-[error=true]:[&_[data-slot=control]]:shadow-error',
        // Icon General
        '[&>svg]:row-start-2 [&>svg]:place-self-center',
        // left icon
        '[&>svg+[data-slot=control]]:pl-6.5 [&>svg:first-child]:col-start-1',
        // right icon
        '[&>svg:last-child]:col-start-3',
        // Label
        '[&>[data-slot=form-label]]:col-span-full [&>[data-slot=form-label]]:row-start-1',
        // Input
        '[&>[data-slot=control]]:row-start-2',
        // Messages
        '[&>p]:col-span-full',
        props.class
      )
    "
  >
    <slot />
  </div>
</template>

<!--

:class="
      cn(
        '[&>svg]:text-tertiary relative grid grid-cols-[30px_1fr_30px] [&:has([data-slot=control]+svg)>[data-slot=control]]:pr-6.5 [&>[data-slot=control]]:col-span-full [&>[data-slot=control]]:row-start-1 [&>svg]:z-10 [&>svg]:row-start-1 [&>svg]:place-self-center [&>svg+[data-slot=control]]:pl-6.5 [&>svg:first-child]:col-start-1 [&>svg:last-child]:col-start-3',
        props.class
      )
    "

-->
