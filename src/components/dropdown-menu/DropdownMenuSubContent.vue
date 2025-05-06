<script setup lang="ts">
import { cn } from '@/lib/utils';
import {
  DropdownMenuSubContent,
  type DropdownMenuSubContentEmits,
  type DropdownMenuSubContentProps,
  useForwardPropsEmits
} from 'reka-ui';
import { computed, type HTMLAttributes } from 'vue';

const props = defineProps<DropdownMenuSubContentProps & { class?: HTMLAttributes['class'] }>();
const emits = defineEmits<DropdownMenuSubContentEmits>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <DropdownMenuSubContent
    v-bind="forwarded"
    :class="
      cn(
        'bg-elevated-on-dark shadow-floating z-50 max-h-[400px] min-w-32 overflow-x-hidden overflow-y-auto rounded-md p-1',
        // Animate in
        'data-[state=open]:motion-opacity-in-0 motion-duration-150 data-[state=open]:motion-translate-y-in-[-2%]',
        // Animate out
        'data-[state=closed]:motion-opacity-out-0 data-[state=closed]:motion-duration-100 data-[state=closed]:motion-translate-y-out-[-2%]',
        props.class
      )
    "
  >
    <slot />
  </DropdownMenuSubContent>
</template>
