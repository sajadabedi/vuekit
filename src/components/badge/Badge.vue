<template>
  <span :class="cn(badgeVariants({ color }), $attrs.class ?? '')" v-bind="$attrs">
    <slot />
  </span>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'
import { badgeVariants, type BadgeProps } from '.'

withDefaults(defineProps<BadgeProps>(), {
  color: 'stone'
})
</script>
