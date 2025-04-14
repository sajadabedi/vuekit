<script setup lang="ts">
import type { Component } from 'vue';

interface Props {
  heading?: string;
  icon?: Component;
}

defineProps<Props>();
</script>

<template>
  <div class="text-secondary flex min-h-[400px] flex-col items-center justify-center p-8 text-center">
    <div class="mx-auto flex max-w-[420px] flex-col items-center gap-1 text-center">
      <component :is="icon" weight="duotone" v-if="icon" class="mx-auto size-7" />
      <h3 class="text-base-bold" v-if="heading">{{ heading }}</h3>
      <div class="flex flex-col items-center gap-4 text-sm">
        <slot />
      </div>
    </div>
  </div>
</template>
