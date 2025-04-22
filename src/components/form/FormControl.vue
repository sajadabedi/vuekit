<script lang="ts" setup>
import { cn } from '@/lib/utils';
import { Slot } from 'reka-ui';
import { useFormField } from './useFormField';

const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
</script>

<template>
  <Slot
    :id="formItemId"
    data-slot="control"
    :aria-describedby="!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`"
    :aria-invalid="!!error"
  >
    <slot />
  </Slot>
</template>
