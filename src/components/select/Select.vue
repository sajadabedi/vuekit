<script setup lang="ts">
import {
  SelectRoot,
  useForwardPropsEmits,
  type SelectRootProps,
  type SelectRootEmits
} from 'reka-ui';
import type { ComputedRef } from 'vue';

const props = defineProps<SelectRootProps>();
const emits = defineEmits<SelectRootEmits>();

const forwarded: ComputedRef<any> = useForwardPropsEmits(props, emits);
</script>

<template>
  <SelectRoot v-bind="forwarded">
    <slot />
  </SelectRoot>
</template>
