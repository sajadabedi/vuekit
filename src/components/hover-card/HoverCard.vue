<script setup lang="ts">
import {
  HoverCardRoot,
  useForwardPropsEmits,
  type HoverCardRootProps,
  type HoverCardRootEmits
} from 'reka-ui';
import type { ComputedRef } from 'vue';

const props = defineProps<HoverCardRootProps>();
const emits = defineEmits<HoverCardRootEmits>();

const forwarded: ComputedRef<any> = useForwardPropsEmits(props, emits);
</script>

<template>
  <HoverCardRoot v-bind="forwarded">
    <slot />
  </HoverCardRoot>
</template>
