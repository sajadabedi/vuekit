<script setup lang="ts">
import { cn } from '@/lib/utils';
import { Label, type LabelProps } from 'reka-ui';
import { computed, type HTMLAttributes } from 'vue';
import { InfoIcon } from '@/components/info-icon';

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
        'flex items-center gap-0.5 text-base select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        props.class
      )
    "
  >
    <slot />
    <span v-if="optional" class="text-tertiary text-sm">(Optional)</span>
    <InfoIcon v-if="tooltip" :tooltip="tooltip" />
  </Label>
</template>
