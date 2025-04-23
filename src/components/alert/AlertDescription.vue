<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { cn } from '@/lib/utils';

const props = defineProps<{
  class?: HTMLAttributes['class'];
}>();
</script>

<template>
  <div :class="cn('text-secondary col-start-2 grid justify-items-start gap-1 text-base', props.class)">
    <slot />
  </div>
</template>
