<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { cn } from '@/lib/utils';

const props = defineProps<{ class?: HTMLAttributes['class'] }>();
</script>

<template>
  <div :class="cn('border-secondary mt-auto flex flex-col gap-2 rounded-b-lg border-t bg-white/3 p-4', props.class)">
    <slot />
  </div>
</template>
