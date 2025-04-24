<script setup lang="ts">
import {
  DialogRoot,
  useForwardPropsEmits,
  type DialogRootProps,
  type DialogRootEmits
} from 'reka-ui';
import type { ComputedRef } from 'vue';

const props = defineProps<DialogRootProps>();
const emits = defineEmits<DialogRootEmits>();

const forwarded: ComputedRef<any> = useForwardPropsEmits(props, emits);
</script>

<template>
  <DialogRoot v-bind="forwarded">
    <slot />
  </DialogRoot>
</template>
