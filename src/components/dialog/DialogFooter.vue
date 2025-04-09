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
        'border-t-secondary rounded-b-r-lg rounded-b-l-lg flex flex-col-reverse gap-2 overflow-hidden border-t bg-white/3 p-4 sm:flex-row sm:justify-end',
        props.class
      )
    "
  >
    <slot />
  </div>
</template>
