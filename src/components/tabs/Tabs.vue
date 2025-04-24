<script setup lang="ts">
import type { TabsRootEmits, TabsRootProps } from 'reka-ui';
import { TabsRoot, useForwardPropsEmits } from 'reka-ui';
import type { ComputedRef } from 'vue';

const props = defineProps<TabsRootProps>();
const emits = defineEmits<TabsRootEmits>();

const forwarded: ComputedRef<any> = useForwardPropsEmits(props, emits);
</script>

<template>
  <TabsRoot v-bind="forwarded" class="flex flex-col gap-2">
    <slot />
  </TabsRoot>
</template>
