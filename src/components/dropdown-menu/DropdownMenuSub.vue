<script setup lang="ts">
import { DropdownMenuSub, type DropdownMenuSubEmits, type DropdownMenuSubProps, useForwardPropsEmits } from 'reka-ui';
import type { ComputedRef } from 'vue';

const props = defineProps<DropdownMenuSubProps>();
const emits = defineEmits<DropdownMenuSubEmits>();

const forwarded: ComputedRef<any> = useForwardPropsEmits(props, emits);
</script>

<template>
  <DropdownMenuSub v-bind="forwarded">
    <slot />
  </DropdownMenuSub>
</template>
