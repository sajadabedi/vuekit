<template>
  <label :class="cn(labelVariants(), $attrs.class ?? '')" v-bind="$attrs">
    <slot />
  </label>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'
import { labelVariants, type LabelProps } from './index'

defineProps<LabelProps>()
</script>
