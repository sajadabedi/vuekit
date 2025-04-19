<script setup lang="ts">
import { cn } from '@/lib/utils';
import { motion } from 'motion-v';
import { SwitchRoot, type SwitchRootEmits, type SwitchRootProps, useForwardPropsEmits } from 'reka-ui';
import { computed, type HTMLAttributes } from 'vue';

const props = defineProps<SwitchRootProps & { class?: HTMLAttributes['class'] }>();

const emits = defineEmits<SwitchRootEmits>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);

const thumbVariants = {
  checked: {
    x: '13.5px'
  },
  unchecked: {
    x: '2.5px'
  }
};
</script>

<template>
  <SwitchRoot
    data-slot="switch"
    v-bind="forwarded"
    :class="
      cn(
        'peer group data-[state=checked]:bg-accent focus-ring data-[state=unchecked]:bg-muted/60 inline-flex h-4.5 w-7.5 shrink-0 items-center rounded-full transition-colors outline-none',
        'shadow-[0_0_0_1px_inset_var(--ui-shadow-ring)]',
        'disabled:data-[state=checked]:bg-accent/60 disabled:text-disabled disabled:cursor-not-allowed',
        props.class
      )
    "
  >
    <motion.div
      data-slot="switch-thumb"
      :initial="false"
      :animate="props.modelValue ? 'checked' : 'unchecked'"
      :variants="thumbVariants"
      :class="cn('pointer-events-none absolute size-3.5 rounded-full bg-white shadow-md group-disabled:opacity-70')"
    >
      <slot name="thumb" />
    </motion.div>
  </SwitchRoot>
</template>
