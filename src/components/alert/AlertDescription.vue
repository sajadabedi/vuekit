<script setup lang="ts">
import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
  class?: HTMLAttributes['class'];
}>();
</script>

<template>
  <div data-slot="description" :class="cn('col-start-2 grid justify-items-start gap-1 text-base z-10', props.class)">
    <slot />
  </div>
</template>
