<script setup lang="ts">
import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
  class?: HTMLAttributes['class'];
}>();
</script>

<template>
  <div :class="cn('col-start-2 line-clamp-1 min-h-4 text-base-bold tracking-tight z-10', props.class)">
    <slot />
  </div>
</template>
