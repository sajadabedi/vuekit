<script lang="ts" setup>
import { buttonVariants } from '@/components/button';
import { cn } from '@/lib/utils';
import { CalendarCellTrigger, type CalendarCellTriggerProps, useForwardProps } from 'reka-ui';
import { computed, type HTMLAttributes } from 'vue';

const props = defineProps<CalendarCellTriggerProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <CalendarCellTrigger
    :class="
      cn(
        buttonVariants({ variant: 'ghost' }),
        'hover:bg-muted h-8 w-8 cursor-default p-0 font-normal',
        // Not selected
        '[&[data-today]:not([data-selected])]:text-accent dark:[&[data-today]:not([data-selected])]:text-orange-400',
        // Selected
        'data-[selected]:bg-accent data-[selected]:hover:bg-accent data-[selected]:focus:bg-accent data-[selected]:text-white data-[selected]:opacity-100 data-[selected]:hover:text-white data-[selected]:focus:text-white',
        // Disabled
        'data-[disabled]:text-disabled data-[disabled]:opacity-50',
        // Unavailable
        'data-[unavailable]:text-critical data-[unavailable]:line-through',
        // Outside months
        'data-[outside-view]:text-disabled [&[data-outside-view][data-selected]]:bg-accent/50 data-[outside-view]:opacity-50 [&[data-outside-view][data-selected]]:text-white [&[data-outside-view][data-selected]]:opacity-30',
        props.class
      )
    "
    v-bind="forwardedProps"
  >
    <slot />
  </CalendarCellTrigger>
</template>
