<script lang="ts" setup>
import { cn } from '@/lib/utils';
import { RangeCalendarCellTrigger, type RangeCalendarCellTriggerProps, useForwardProps } from 'reka-ui';
import { computed, type HTMLAttributes } from 'vue';

const props = defineProps<RangeCalendarCellTriggerProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <RangeCalendarCellTrigger
    :class="
      cn(
        'h-8 w-8 p-0 font-normal data-[selected]:opacity-100',
        '[&[data-today]:not([data-selected])]:bg-accent [&[data-today]:not([data-selected])]:text-accent-foreground',
        // Selection Start
        'data-[selection-start]:bg-accent data-[selection-start]:focus:bg-accent',
        // Selection End
        'data-[selection-end]:bg-accent data-[selection-end]:focus:bg-accent',
        // Outside months
        'data-[outside-view]:text-disabled [&[data-outside-view][data-selected]]:text-tertiary data-[outside-view]:opacity-50 [&[data-outside-view][data-selected]]:opacity-30',
        // Disabled
        'data-[disabled]:text-disabled data-[disabled]:opacity-50',
        // Unavailable
        'data-[unavailable]:text-critical data-[unavailable]:line-through',
        props.class
      )
    "
    v-bind="forwardedProps"
  >
    <slot />
  </RangeCalendarCellTrigger>
</template>
