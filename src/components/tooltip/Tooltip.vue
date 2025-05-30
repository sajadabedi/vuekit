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
      <div
        v-if="isOpen"
        ref="floatingRef"
        :style="floatingStyles"
        :class="cn('motion-preset-fade z-50 overflow-hidden rounded-md bg-contrast px-2 py-1 text-sm text-white shadow-floating', props.class)"
        role="tooltip"
      >
        {{content}}
      </div>
  </div>
</template>

<script setup lang="ts">
import type { TooltipProps } from '@/components/tooltip';
import { cn } from '@/lib/utils';
import { autoUpdate, flip, offset, shift, size, useFloating } from '@floating-ui/vue';
import { onBeforeUnmount, ref } from 'vue';

const {content, ...props} = defineProps<TooltipProps>()

const isOpen = ref(false)
const referenceRef = ref<HTMLElement | undefined>()
const floatingRef = ref<HTMLElement | undefined>()

const { floatingStyles } = useFloating(referenceRef, floatingRef, {
  placement: 'top',
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
