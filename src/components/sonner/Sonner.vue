<script lang="ts" setup>
import { Toaster as Sonner, type ToasterProps } from 'vue-sonner';

const props = defineProps<ToasterProps>();
</script>

<template>
  <Sonner
    class="toaster group"
    v-bind="props"
    :style="{
      '--normal-bg': 'var(--background-color-elevated-on-dark)',
      '--normal-text': 'var(--text-color-default)',
      '--normal-border': 'var(--border-color-default)'
    }"
  />
</template>
