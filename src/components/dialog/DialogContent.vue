<script setup lang="ts">
import { cn } from '@/lib/utils';
import { PhX } from '@phosphor-icons/vue';
import {
  DialogClose,
  DialogContent,
  type DialogContentEmits,
  type DialogContentProps,
  DialogPortal,
  useForwardPropsEmits,
  DialogOverlay
} from 'reka-ui';
import { computed, type HTMLAttributes } from 'vue';

const props = defineProps<DialogContentProps & { class?: HTMLAttributes['class'] }>();
const emits = defineEmits<DialogContentEmits>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <DialogPortal>
    <DialogOverlay
      class="bg-backdrop data-[state=open]:motion-opacity-in-0 data-[state=open]:motion-duration-100 data-[state=closed]:motion-opacity-out-0 data-[state=closed]:motion-duration-75 fixed inset-0 z-50"
    />
    <DialogContent
      v-bind="forwarded"
      :class="
        cn(
          'bg-body shadow-floating fixed z-50 grid w-full max-w-[70vh] gap-2.5 rounded-lg duration-200 sm:max-w-lg',
          // Center
          'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
          // Animation in
          'motion-duration-300 data-[state=open]:motion-opacity-in-0 data-[state=open]:motion-scale-in-95 data-[state=open]:motion-blur-in-sm',
          // Animation out
          'data-[state=closed]:motion-opacity-out-0 data-[state=closed]:motion-duration-100',
          props.class
        )
      "
    >
      <slot />

      <DialogClose
        class="focus-ring hover:bg-tertiary absolute top-3 right-3 flex size-5.5 place-items-center justify-center rounded-md transition-all disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
      >
        <PhX weight="bold" />
        <span class="sr-only">Close</span>
      </DialogClose>
    </DialogContent>
  </DialogPortal>
</template>
