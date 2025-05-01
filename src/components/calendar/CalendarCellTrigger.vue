<script lang="ts" setup>
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/button';
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
        '[&[data-today]:not([data-selected])]:bg-tertiary [&[data-today]:not([data-selected])]:text-blue-500',
        // Selected
        'data-[selected]:bg-accent data-[selected]:hover:bg-accent data-[selected]:focus:bg-accent data-[selected]:text-white data-[selected]:opacity-100 data-[selected]:hover:text-white data-[selected]:focus:text-white',
        // Disabled
        'data-[disabled]:text-disabled data-[disabled]:opacity-50',
        // Unavailable
        'data-[unavailable]:text-destructive-foreground data-[unavailable]:line-through',
        // Outside months
        'data-[outside-view]:text-muted-foreground [&[data-outside-view][data-selected]]:bg-accent/50 [&[data-outside-view][data-selected]]:text-muted-foreground data-[outside-view]:opacity-50 [&[data-outside-view][data-selected]]:opacity-30',
        props.class
      )
    "
    v-bind="forwardedProps"
  >
    <slot />
  </CalendarCellTrigger>
</template>
