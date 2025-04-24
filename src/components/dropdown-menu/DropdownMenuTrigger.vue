<script setup lang="ts">
import { DropdownMenuTrigger, type DropdownMenuTriggerProps, useForwardProps } from 'reka-ui';
import type { ComputedRef } from 'vue';

const props = defineProps<DropdownMenuTriggerProps>();

const forwarded: ComputedRef<any> = useForwardProps(props);
</script>

<template>
  <DropdownMenuTrigger class="outline-none" v-bind="forwarded">
    <slot />
  </DropdownMenuTrigger>
</template>
