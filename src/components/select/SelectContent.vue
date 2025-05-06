<script setup lang="ts">
import { cn } from '@/lib/utils';
import {
  SelectContent,
  type SelectContentEmits,
  type SelectContentProps,
  SelectPortal,
  SelectViewport,
  useForwardPropsEmits
} from 'reka-ui';
import { computed, type HTMLAttributes } from 'vue';
import { SelectScrollDownButton, SelectScrollUpButton } from '.';

defineOptions({
  inheritAttrs: false
});

const props = withDefaults(defineProps<SelectContentProps & { class?: HTMLAttributes['class'] }>(), {
  position: 'popper'
});
const emits = defineEmits<SelectContentEmits>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <SelectPortal>
    <SelectContent
      v-bind="{ ...forwarded, ...$attrs }"
      :class="
        cn(
          'bg-elevated-on-dark shadow-floating relative z-50 max-h-96 min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-md',
          // Animate in
          'data-[state=open]:motion-opacity-in-0 motion-duration-150 data-[state=open]:motion-translate-y-in-[-2%]',
          // Animate out
          'data-[state=closed]:motion-opacity-out-0 data-[state=closed]:motion-translate-y-out-[2%] data-[state=closed]:motion-duration-50',
          position === 'popper' &&
            'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
          props.class
        )
      "
    >
      <SelectScrollUpButton />
      <SelectViewport
        :class="
          cn(
            'p-1',
            position === 'popper' &&
              'h-[var(--reka-select-trigger-height)] w-full min-w-[var(--reka-select-trigger-width)] scroll-my-1'
          )
        "
      >
        <slot />
      </SelectViewport>
      <SelectScrollDownButton />
    </SelectContent>
  </SelectPortal>
</template>
