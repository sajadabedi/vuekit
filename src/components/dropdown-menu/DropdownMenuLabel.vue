<script setup lang="ts">
import { cn } from '@/lib/utils';
import { reactiveOmit } from '@vueuse/core';
import { DropdownMenuLabel, type DropdownMenuLabelProps, useForwardProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';

const props = defineProps<DropdownMenuLabelProps & { class?: HTMLAttributes['class']; inset?: boolean }>();

type DelegatedProps = Omit<
  DropdownMenuLabelProps & { class?: HTMLAttributes['class']; inset?: boolean },
  'class' | 'inset'
>;
const delegatedProps = reactiveOmit(props, 'class', 'inset') as DelegatedProps;
const forwardedProps = useForwardProps(delegatedProps) as DelegatedProps;
</script>

<template>
  <DropdownMenuLabel
    data-slot="dropdown-menu-label"
    :data-inset="inset ? '' : undefined"
    v-bind="forwardedProps"
    :class="cn(`text-tertiary px-2 py-1.5 text-xs data-[inset]:pl-8`, props.class)"
  >
    <slot />
  </DropdownMenuLabel>
</template>
