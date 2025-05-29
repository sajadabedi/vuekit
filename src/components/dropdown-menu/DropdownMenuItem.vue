<script setup lang="ts">
import { cn } from '@/lib/utils';
import { DropdownMenuItem, type DropdownMenuItemProps, useForwardProps } from 'reka-ui';
import { computed, type HTMLAttributes } from 'vue';

const props = defineProps<DropdownMenuItemProps & { class?: HTMLAttributes['class']; inset?: boolean }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <DropdownMenuItem
    v-bind="forwardedProps"
    :class="
  cn(
    `relative flex items-center gap-1.5 px-2 py-2 cursor-default rounded-sm outline-hidden select-none`,
    // State
    `focus:bg-tertiary has-[&>[data-slot=dropdown-menu-shortcut]]:opacity-50 data-[inset]:pl-8 data-[disabled]:pointer-events-none data-[disabled]:opacity-50`,
    // Icon
    `[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-3.5 [&_svg]:shrink-3.5`,
    inset && 'pl-8',
    props.class
  )
    "
  >
    <slot />
  </DropdownMenuItem>
</template>
