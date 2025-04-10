<script setup lang="ts">
import { cn } from '@/lib/utils';
import { reactiveOmit } from '@vueuse/core';
import { ChevronRight } from 'lucide-vue-next';
import { DropdownMenuSubTrigger, type DropdownMenuSubTriggerProps, useForwardProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';

const props = defineProps<DropdownMenuSubTriggerProps & { class?: HTMLAttributes['class']; inset?: boolean }>();

type DelegatedProps = Omit<
  DropdownMenuSubTriggerProps & { class?: HTMLAttributes['class']; inset?: boolean },
  'class' | 'inset'
>;
const delegatedProps = reactiveOmit(props, 'class', 'inset') as DelegatedProps;
const forwardedProps = useForwardProps(delegatedProps) as DelegatedProps;
</script>

<template>
  <DropdownMenuSubTrigger
    data-slot="dropdown-menu-sub-trigger"
    v-bind="forwardedProps"
    :class="
      cn(
        'focus:bg-tertiary data-[state=open]:bg-tertiary flex cursor-default items-center rounded-sm px-2 py-1.5 outline-hidden select-none data-[inset]:pl-8',
        props.class
      )
    "
  >
    <slot />
    <ChevronRight class="ml-auto size-4" />
  </DropdownMenuSubTrigger>
</template>
