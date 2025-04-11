<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { cn } from '@/lib/utils';

const props = defineProps<{ class?: HTMLAttributes['class'] }>();
</script>

<template>
  <div
    data-slot="dialog-footer"
    :class="
      cn(
        'border-t-secondary flex flex-col-reverse gap-2 rounded-b-lg border-t bg-white/3 p-4 sm:flex-row sm:justify-end',
        props.class
      )
    "
  >
    <slot />
  </div>
</template>
