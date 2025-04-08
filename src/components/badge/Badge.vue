<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import { cn } from '@/lib/utils'
import { Primitive } from 'reka-ui'
import { computed, type HTMLAttributes } from 'vue'
import { type BadgeVariants, badgeVariants } from '.'

const props = defineProps<PrimitiveProps & {
  color?: BadgeVariants['color']
  class?: HTMLAttributes['class']
}>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <Primitive
    data-slot="badge"
    :class="cn(badgeVariants({ color: props.color }), props.class)"
    v-bind="delegatedProps"
  >
    <slot />
  </Primitive>
</template>
