<script setup lang="ts">
import { cn } from '@/lib/utils';
import { PhCaretDown } from '@phosphor-icons/vue';
import { SelectIcon, SelectTrigger, type SelectTriggerProps, useForwardProps } from 'reka-ui';
import { computed, type HTMLAttributes } from 'vue';

const props = defineProps<SelectTriggerProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <SelectTrigger
    data-slot="select-trigger"
    v-bind="forwardedProps"
    :class="
      cn(
        `bg-elevated-on-dark shadow-input data-[placeholder]:text-placeholder [&_svg:not([class*='text-'])]:text-muted-foreground hover:bg-secondary/70 flex w-fit items-center justify-between gap-2 rounded-md px-3 py-2 whitespace-nowrap transition-[color,box-shadow,background] data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2`,
        // validation
        'aria-invalid:border-critical aria-invalid:ring-(--ui-color-bg-red-muted)',
        // focus
        'focus-ring-input',
        // disabled
        'disabled:bg-disabled disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none',
        // state-opened
        '[&[data-state=open]>[data-slot=icon]]:rotate-180',
        // Icon
        `[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-200 [&_svg:not([class*='size-'])]:size-3.5`,
        props.class
      )
    "
  >
    <slot />
    <SelectIcon as-child>
      <PhCaretDown weight="bold" data-slot="icon" />
    </SelectIcon>
  </SelectTrigger>
</template>
