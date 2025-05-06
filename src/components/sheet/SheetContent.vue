<script setup lang="ts">
import { cn } from '@/lib/utils';
import { PhX } from '@phosphor-icons/vue';
import { reactiveOmit } from '@vueuse/core';
import {
  DialogClose,
  DialogContent,
  type DialogContentEmits,
  type DialogContentProps,
  DialogPortal,
  useForwardPropsEmits
} from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import SheetOverlay from './SheetOverlay.vue';

interface SheetContentProps extends DialogContentProps {
  class?: HTMLAttributes['class'];
  side?: 'right' | 'left';
}

defineOptions({
  inheritAttrs: false
});

const props = withDefaults(defineProps<SheetContentProps>(), {
  side: 'right'
});
const emits = defineEmits<DialogContentEmits>();

const delegatedProps = reactiveOmit(props, 'class', 'side');

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <DialogPortal>
    <SheetOverlay
      class="data-[state=open]:motion-opacity-in-0 data-[state=closed]:motion-opacity-out-0 motion-duration-100 fixed inset-0 z-50 bg-black/80"
    />
    <DialogContent
      :class="
        cn(
          'bg-body data-[state=open]:motion-opacity-in-0 data-[state=closed]:motion-opacity-out-0 shadow-floating data-[state=closed]:motion-duration-100 data-[state=open]:motion-duration-300 fixed z-50 flex flex-col gap-4',
          side === 'right' &&
            'data-[state=closed]:motion-translate-x-out-[10%] data-[state=open]:motion-translate-x-in-[10%] inset-y-0 right-0 h-full w-3/4 rounded-l-lg sm:max-w-sm',
          side === 'left' &&
            'data-[state=closed]:motion-translate-x-out-[-10%] data-[state=open]:motion-translate-x-in-[-10%] inset-y-0 left-0 h-full w-3/4 rounded-r-lg sm:max-w-sm',
          props.class
        )
      "
      v-bind="{ ...forwarded, ...$attrs }"
    >
      <slot />

      <DialogClose
        class="data-[state=open]:bg-secondary hover:bg-tertiary focus-ring absolute top-3.5 right-3.5 flex size-5.5 cursor-pointer items-center justify-center rounded-md opacity-70 transition-all hover:opacity-100 focus-visible:opacity-100"
      >
        <PhX weight="bold" />
        <span class="sr-only">Close</span>
      </DialogClose>
    </DialogContent>
  </DialogPortal>
</template>
