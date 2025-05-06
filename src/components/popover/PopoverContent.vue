<script setup lang="ts">
import { cn } from '@/lib/utils';
import {
  PopoverContent,
  type PopoverContentEmits,
  type PopoverContentProps,
  PopoverPortal,
  useForwardPropsEmits
} from 'reka-ui';
import { computed, type HTMLAttributes } from 'vue';

defineOptions({
  inheritAttrs: false
});

const props = withDefaults(defineProps<PopoverContentProps & { class?: HTMLAttributes['class'] }>(), {
  align: 'center',
  sideOffset: 4
});
const emits = defineEmits<PopoverContentEmits>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <PopoverPortal>
    <PopoverContent
      v-bind="{ ...forwarded, ...$attrs }"
      :class="
        cn(
          'bg-elevated-on-dark text-default shadow-floating z-50 w-72 rounded-md p-4 outline-none',
          // Animate in
          'motion-duration-150 data-[state=open]:motion-opacity-in-0 data-[state=open]:motion-translate-y-in-[-1%]',
          // Animate out
          'data-[state=closed]:motion-opacity-in-0 data-[state=closed]:motion-translate-y-in-[1%]',
          props.class
        )
      "
    >
      <slot />
    </PopoverContent>
  </PopoverPortal>
</template>
