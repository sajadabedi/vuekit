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
        v-if="isVisible"
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
import { flip, offset, shift, useFloating } from '@floating-ui/vue'
import { ref } from 'vue'

const { content, side = 'top', className } = defineProps<TooltipProps>()

const isVisible = ref(false)
const referenceRef = ref<HTMLElement | null>(null)
const floatingRef = ref<HTMLElement | null>(null)

const { floatingStyles } = useFloating(referenceRef, floatingRef, {
  placement: side,
  middleware: [offset(8), flip(), shift()]
})

function show() {
  isVisible.value = true
}

function hide() {
  isVisible.value = false
}
</script>
