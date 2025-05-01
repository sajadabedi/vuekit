<script lang="ts" setup>
import { buttonVariants } from '@/components/button';
import { cn } from '@/lib/utils';
import { PhCaretLeft } from '@phosphor-icons/vue';
import { CalendarPrev, type CalendarPrevProps, useForwardProps } from 'reka-ui';
import { computed, type HTMLAttributes } from 'vue';

const props = defineProps<CalendarPrevProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <CalendarPrev
    :class="
      cn(buttonVariants({ variant: 'ghost' }), 'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100', props.class)
    "
    v-bind="forwardedProps"
  >
    <slot>
      <PhCaretLeft class="size-3.5" weight="bold" />
    </slot>
  </CalendarPrev>
</template>
