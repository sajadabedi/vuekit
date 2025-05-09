<script lang="ts" setup>
import { buttonVariants } from '@/components/button';
import { cn } from '@/lib/utils';
import { PhCaretRight } from '@phosphor-icons/vue';
import { RangeCalendarNext, type RangeCalendarNextProps, useForwardProps } from 'reka-ui';
import { computed, type HTMLAttributes } from 'vue';

const props = defineProps<RangeCalendarNextProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <RangeCalendarNext
    :class="
      cn(buttonVariants({ variant: 'ghost' }), 'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100', props.class)
    "
    v-bind="forwardedProps"
  >
    <slot>
      <PhCaretRight weight="bold" />
    </slot>
  </RangeCalendarNext>
</template>
