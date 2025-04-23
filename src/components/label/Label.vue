<script setup lang="ts">
import { InfoIcon } from '@/components/info-icon';
import { cn } from '@/lib/utils';
import { Label, type LabelProps } from 'reka-ui';
import { computed, type HTMLAttributes } from 'vue';

interface ExtendedLabelProps extends LabelProps {
  class?: HTMLAttributes['class'];
  optional?: boolean;
  tooltip?: string;
}

const props = defineProps<ExtendedLabelProps>();

const delegatedProps = computed(() => {
  const { class: _, optional, tooltip, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <Label
    data-slot="label"
    v-bind="delegatedProps"
    :class="
      cn(
        'group-data-[disabled=true]:text-disabled peer-disabled:text-disabled flex items-center gap-0.5 text-base select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-70 peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        props.class
      )
    "
  >
    <slot />
    <span v-if="optional" class="text-tertiary text-sm">(Optional)</span>
    <InfoIcon v-if="tooltip" :tooltip="tooltip" />
  </Label>
</template>
