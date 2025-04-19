<script setup lang="ts">
import { cn } from '@/lib/utils';
import { computed } from 'vue';
import type { EmptyStateProps } from '.';

const props = defineProps<EmptyStateProps>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;
  return delegated;
});
</script>

<template>
  <div
    data-slot="empty-state"
    :class="cn('text-secondary flex min-h-14 flex-col items-center justify-center p-8 text-center', props.class)"
    v-bind="delegatedProps"
  >
    <div class="mx-auto flex max-w-[420px] flex-col items-center gap-1.5 text-center">
      <component :is="props.icon" weight="duotone" v-if="props.icon" class="mx-auto size-7" />
      <div class="flex flex-col gap-0.5 text-sm">
        <h3 class="text-base-bold" v-if="props.heading">{{ props.heading }}</h3>
        <slot />
      </div>
    </div>
  </div>
</template>
