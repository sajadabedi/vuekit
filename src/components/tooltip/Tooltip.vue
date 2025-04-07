<template>
  <div ref="referenceRef" class="inline-block" @mouseenter="show" @mouseleave="hide" @focus="show" @blur="hide">
    <slot />
    <Transition
      enter-active-class="transition ease-out duration-[150ms]"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-[100ms]"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-1"
    >
      <div
        v-if="isOpen"
        ref="floatingRef"
        :style="floatingStyles"
        :class="cn(tooltipVariants({ side }), className)"
        role="tooltip"
      >
        {{ content }}
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { tooltipVariants, type TooltipProps } from '@/components/tooltip'
import { cn } from '@/lib/utils'
import { autoUpdate, flip, offset, shift, size, useFloating } from '@floating-ui/vue'
import { onBeforeUnmount, ref } from 'vue'

const { content, side = 'top', className, delay = 200 } = defineProps<TooltipProps>()

const isOpen = ref(false)
const referenceRef = ref<HTMLElement | undefined>()
const floatingRef = ref<HTMLElement | undefined>()

const { floatingStyles } = useFloating(referenceRef, floatingRef, {
  placement: side,
  whileElementsMounted: (...args) => autoUpdate(...args, { animationFrame: true }),
  middleware: [
    offset(8),
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
