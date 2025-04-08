<script setup lang="ts">
import { cn } from '@/lib/utils'
import { motion } from 'motion-v'
import type { CheckboxRootEmits, CheckboxRootProps } from 'reka-ui'
import { CheckboxIndicator, CheckboxRoot, useForwardPropsEmits } from 'reka-ui'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<CheckboxRootProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<CheckboxRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { type: 'spring', duration: 0.3, bounce: 0 },
      opacity: { duration: 0.1 }
    }
  }
}

const shape = {
  strokeWidth: 2,
  strokeLinecap: 'round',
  fill: 'transparent'
}
</script>

<template>
  <CheckboxRoot
    data-slot="checkbox"
    v-bind="forwarded"
    :class="
      cn(
        'peer bg-interactive shadow-input data-[state=checked]:bg-accent focused size-4 shrink-0 rounded-sm outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:text-white',
        props.class
      )
    "
  >
    <CheckboxIndicator
      data-slot="checkbox-indicator"
      class="flex items-center justify-center text-current transition-none"
    >
      <slot>
        <motion.svg
          width="10"
          height="8"
          viewBox="0 0 10 8"
          initial="hidden"
          :animate="forwarded.modelValue ? 'visible' : 'hidden'"
        >
          <motion.path
            d="M1.00013 3.98401L3.08316 6.06707C3.41134 6.39526 3.94343 6.39526 4.27161 6.06708L9 1.3387"
            stroke="currentColor"
            :variants="draw"
            :style="shape"
          />
        </motion.svg>
      </slot>
    </CheckboxIndicator>
  </CheckboxRoot>
</template>

<!-- aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive -->
