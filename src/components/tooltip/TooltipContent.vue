<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { TooltipContent, type TooltipContentEmits, type TooltipContentProps, TooltipPortal, useForwardPropsEmits } from 'reka-ui'
import { cn } from '@/lib/utils'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<TooltipContentProps & { class?: HTMLAttributes['class'] }>(), {
  sideOffset: 4,
})

const emits = defineEmits<TooltipContentEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <TooltipPortal>
    <TooltipContent v-bind="{ ...forwarded, ...$attrs }" :class="cn('z-50 overflow-hidden rounded-md bg-contrast px-2 py-1 text-sm text-white shadow-floating motion-preset-fade data-[state=closed]:motion-preset-fade-out data-[state=closed]:motion-duration-75 data-[side=bottom]:motion-slide-in-from-top-2 data-[side=left]:motion-slide-in-from-right-2 data-[side=right]:motion-slide-in-from-left-2 data-[side=top]:motion-slide-in-from-bottom-2 max-w-3xs', props.class)">
      <slot />
    </TooltipContent>
  </TooltipPortal>
</template>

<!-- motion-preset-fade z-50 overflow-hidden rounded-md bg-contrast px-2 py-1 text-sm text-white shadow-floating -->