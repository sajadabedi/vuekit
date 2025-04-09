<script lang="ts" setup>
import { cn } from '@/lib/utils';
import { type HTMLAttributes } from 'vue';
import { useFormField } from './useFormField';

const props = defineProps<{
  class?: HTMLAttributes['class'];
}>();

const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
</script>

<template>
  <div
    :id="formItemId"
    data-slot="form-control"
    :aria-describedby="!error ? formDescriptionId : `${formDescriptionId} ${formMessageId}`"
    :aria-invalid="!!error"
    :class="cn('relative', props.class)"
  >
    <slot />
  </div>
</template>
