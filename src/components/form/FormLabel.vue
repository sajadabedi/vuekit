<script lang="ts" setup>
import { Label } from '@/components';
import { cn } from '@/lib/utils';
import type { LabelProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import { useFormField } from './useFormField';

interface FormLabelProps extends LabelProps {
  class?: HTMLAttributes['class'];
  optional?: boolean;
  tooltip?: string;
}

const props = defineProps<FormLabelProps>();

const { error, formItemId } = useFormField();
</script>

<template>
  <Label 
    data-slot="form-label" 
    :data-error="!!error" 
    :class="cn('', props.class)" 
    :for="formItemId"
    :optional="props.optional"
    :tooltip="props.tooltip"
  >
    <slot />
  </Label>
</template>
