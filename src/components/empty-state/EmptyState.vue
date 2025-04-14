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
    <div class="mx-auto flex max-w-[420px] flex-col items-center text-center">
      <component :is="props.icon" weight="duotone" v-if="props.icon" class="mx-auto size-7" />
      <h3 class="text-base-bold mt-2" v-if="props.heading">{{ props.heading }}</h3>
      <div class="mt-2 text-sm">
        <slot />
      </div>
    </div>
  </div>
</template>
