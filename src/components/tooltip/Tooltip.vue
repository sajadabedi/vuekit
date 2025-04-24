<template>
  <div
    ref="referenceRef"
    class="flex place-content-center"
    @mouseenter="show"
    @mouseleave="hide"
    @focus="show"
    @blur="hide"
  >
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
        :class="cn(tooltipVariants({ side: props.side }), props.class)"
        role="tooltip"
      >
        {{ props.content }}
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

const props = defineProps<TooltipProps>()

const isOpen = ref(false)
const referenceRef = ref<HTMLElement | undefined>()
const floatingRef = ref<HTMLElement | undefined>()

const { floatingStyles } = useFloating(referenceRef, floatingRef, {
  placement: props.side ?? 'top',
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
  if (props.delay === 0) {
    isOpen.value = true
    return
  }
  timer = setTimeout(() => {
    isOpen.value = true
  }, props.delay ?? 200)
}

function hide() {
  clearTimer()
  isOpen.value = false
}

onBeforeUnmount(() => {
  clearTimer()
})
</script>
