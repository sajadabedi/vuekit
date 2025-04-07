<template>
  <div ref="referenceRef" class="inline-block" @mouseenter="show" @mouseleave="hide" @focus="show" @blur="hide">
    <slot />
    <AnimatePresence>
      <motion.div
        :animate="{ opacity: isOpen ? 1 : 0 }"
        :initial="{ opacity: 0 }"
        :exit="{ opacity: 0 }"
        :transition="{ duration: 0.2, ease: 'easeInOut' }"
        v-if="isOpen"
        ref="floatingRef"
        :style="floatingStyles"
        :class="cn(tooltipVariants({ side }), className)"
        role="tooltip"
      >
        {{ content }}
      </motion.div>
    </AnimatePresence>
  </div>
</template>

<script setup lang="ts">
import { tooltipVariants, type TooltipProps } from '@/components/tooltip'
import { cn } from '@/lib/utils'
import { autoUpdate, flip, offset, shift, size, useFloating } from '@floating-ui/vue'
import { AnimatePresence, motion } from 'motion-v'
import { onBeforeUnmount, ref } from 'vue'

const { content, side = 'top', className, delay = 200 } = defineProps<TooltipProps>()

const isOpen = ref(false)
const referenceRef = ref<HTMLElement | undefined>()
const floatingRef = ref<HTMLElement | undefined>()

const { floatingStyles } = useFloating(referenceRef, floatingRef, {
  placement: side,
  whileElementsMounted: (...args) => autoUpdate(...args, { animationFrame: true }),
  middleware: [
    offset(4),
    flip(),
    shift({ padding: 8 }),

    size({
      apply({ availableWidth, elements }) {
        Object.assign(elements.floating.style, {
          maxWidth: `${Math.min(availableWidth, 250)}px`,
          width: 'max-content'
        })
      }
    })
  ]
})

let timer: ReturnType<typeof setTimeout> | undefined

function clearTimer() {
  if (timer) {
    clearTimeout(timer)
    timer = undefined
  }
}

function show() {
  clearTimer()
  if (delay === 0) {
    isOpen.value = true
    return
  }
  timer = setTimeout(() => {
    isOpen.value = true
  }, delay)
}

function hide() {
  clearTimer()
  isOpen.value = false
}

onBeforeUnmount(() => {
  clearTimer()
})
</script>
