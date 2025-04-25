<!-- <script setup lang="ts">
import { cn } from '@/lib/utils';
import { reactiveOmit } from '@vueuse/core';
import { DropdownMenuItem, type DropdownMenuItemProps, useForwardProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';

const props = withDefaults(
  defineProps<
    DropdownMenuItemProps & {
      class?: HTMLAttributes['class'];
      inset?: boolean;
      variant?: 'default' | 'critical';
    }
  >(),
  {
    variant: 'default'
  }
);

const delegatedProps = reactiveOmit(props, 'inset', 'variant');

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <DropdownMenuItem
    data-slot="dropdown-menu-item"
    :data-inset="inset ? '' : undefined"
    :data-variant="variant"
    v-bind="forwardedProps"
    :class="
      cn(
        `focus:bg-tertiary [&_svg]:shrink-3.5 relative flex cursor-default items-center gap-1.5 rounded-sm px-2 py-2 outline-hidden select-none has-[&>[data-slot=dropdown-menu-shortcut]]:opacity-50 data-[disabled]:pointer-events-none data-[disabled]:opacity-70 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-3.5`,
        props.class
      )
    "
  >
    <slot />
  </DropdownMenuItem>
</template> -->

<!--
focus:bg-accent focus:text-accent-foreground data-[variant=critical]:text-critical-foreground data-[variant=critical]:focus:bg-critical/10 dark:data-[variant=critical]:focus:bg-critical/40 data-[variant=critical]:focus:text-critical-foreground data-[variant=critical]:*:[svg]:!text-critical-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4
-->

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
