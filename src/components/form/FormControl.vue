<script lang="ts" setup>
import { cn } from '@/lib/utils';
import { Slot } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import { useFormField } from './useFormField';

const props = defineProps<{
  class?: HTMLAttributes['class'];
}>();
const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
</script>

<template>
  <Slot
    :id="formItemId"
    data-slot="form-control"
    :aria-describedby="!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`"
    :aria-invalid="!!error"
    :class="
      cn(
        '[&>svg]:text-tertiary relative grid grid-cols-[30px_1fr_30px] [&:has([data-slot=control]+svg)>[data-slot=control]]:pr-6.5 [&>[data-slot=control]]:col-span-full [&>[data-slot=control]]:row-start-1 [&>svg]:z-10 [&>svg]:row-start-1 [&>svg]:place-self-center [&>svg+[data-slot=control]]:pl-6.5 [&>svg:first-child]:col-start-1 [&>svg:last-child]:col-start-3',
        props.class
      )
    "
  >
    <slot />
  </Slot>
</template>
