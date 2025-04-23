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
  side?: 'top' | 'right' | 'bottom' | 'left';
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
      class="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80"
    />
    <DialogContent
      :class="
        cn(
          'bg-body data-[state=open]:animate-in data-[state=closed]:animate-out shadow-floating fixed z-50 flex flex-col gap-4 rounded-l-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-300',
          side === 'right' &&
            'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 sm:max-w-sm',
          side === 'left' &&
            'data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 sm:max-w-sm',
          side === 'top' &&
            'data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto',
          side === 'bottom' &&
            'data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto',
          props.class
        )
      "
      v-bind="{ ...forwarded, ...$attrs }"
    >
      <slot />

      <DialogClose
        class="focus:ring-ring data-[state=open]:bg-secondary hover:bg-tertiary focus-ring absolute top-3.5 right-3.5 flex size-5.5 cursor-pointer items-center justify-center rounded-md opacity-70 transition-all hover:opacity-100 focus-visible:opacity-100"
      >
        <PhX weight="bold" />
        <span class="sr-only">Close</span>
      </DialogClose>
    </DialogContent>
  </DialogPortal>
</template>
