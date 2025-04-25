<script setup lang="ts">
import { cn } from '@/lib/utils';
import { PhCaretRight } from '@phosphor-icons/vue';
import { DropdownMenuSubTrigger, type DropdownMenuSubTriggerProps, useForwardProps } from 'reka-ui';
import { computed, type HTMLAttributes } from 'vue';

const props = defineProps<DropdownMenuSubTriggerProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <DropdownMenuSubTrigger
    v-bind="forwardedProps"
    :class="
      cn(
        'focus:bg-tertiary data-[state=open]:bg-tertiary flex cursor-default items-center rounded-sm px-2 py-1.5 outline-hidden select-none',
        props.class
      )
    "
  >
    <slot />
    <PhCaretRight weight="bold" size="14" class="ml-6" />
  </DropdownMenuSubTrigger>
</template>
