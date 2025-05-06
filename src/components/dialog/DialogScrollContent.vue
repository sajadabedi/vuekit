<script setup lang="ts">
import { cn } from '@/lib/utils';
import { PhX } from '@phosphor-icons/vue';
import {
  DialogClose,
  DialogContent,
  type DialogContentEmits,
  type DialogContentProps,
  DialogOverlay,
  DialogPortal,
  useForwardPropsEmits
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
      class="bg-contrast/80 data-[state=open]:motion-opacity-in-0 data-[state=open]:motion-duration-100 data-[state=closed]:motion-opacity-out-0 data-[state=closed]:motion-duration-75 fixed inset-0 z-50"
    >
      <DialogContent
        :class="
          cn(
            'bg-body relative z-50 my-8 grid w-full max-w-lg gap-4 p-6 shadow-lg duration-200 sm:rounded-lg md:w-full',
            props.class
          )
        "
        v-bind="forwarded"
        @pointer-down-outside="
          (event) => {
            const originalEvent = event.detail.originalEvent;
            const target = originalEvent.target as HTMLElement;
            if (originalEvent.offsetX > target.clientWidth || originalEvent.offsetY > target.clientHeight) {
              event.preventDefault();
            }
          }
        "
      >
        <slot />

        <DialogClose class="hover:bg-secondary absolute top-4 right-4 rounded-md p-0.5 transition-colors">
          <PhX weight="bold" />
          <span class="sr-only">Close</span>
        </DialogClose>
      </DialogContent>
    </DialogOverlay>
  </DialogPortal>
</template>
