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
        `focus:bg-tertiary [&_svg]:shrink-3.5 relative flex cursor-default items-center gap-1.5 rounded-sm px-2 py-2 outline-hidden select-none has-[&>[data-slot=dropdown-menu-shortcut]]:opacity-50 data-[disabled]:pointer-events-none data-[disabled]:opacity-70 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-3.5`,
        inset && 'pl-8',
        props.class
      )
    "
  >
    <slot />
  </DropdownMenuItem>
</template>
