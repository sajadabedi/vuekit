<script setup lang="ts">
import { cn } from '@/lib/utils';
import {
  DropdownMenuContent,
  type DropdownMenuContentEmits,
  type DropdownMenuContentProps,
  DropdownMenuPortal,
  useForwardPropsEmits
} from 'reka-ui';
import { computed, type HTMLAttributes } from 'vue';

const props = withDefaults(defineProps<DropdownMenuContentProps & { class?: HTMLAttributes['class'] }>(), {
  sideOffset: 4
});
const emits = defineEmits<DropdownMenuContentEmits>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <DropdownMenuPortal>
    <DropdownMenuContent
      v-bind="forwarded"
      :class="
        cn(
          'bg-elevated-on-dark shadow-floating z-50 max-h-[400px] min-w-32 overflow-x-hidden overflow-y-auto rounded-md p-1',
          // Animate in
          'data-[state=open]:motion-opacity-in-0 motion-duration-150',
          // Animate out
          'data-[state=closed]:motion-opacity-out-0 data-[state=closed]:motion-duration-100 data-[state=closed]:motion-translate-y-out-[-2%]',
          props.class
        )
      "
    >
      <slot />
    </DropdownMenuContent>
  </DropdownMenuPortal>
</template>
