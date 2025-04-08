<template>
  <label :class="cn(labelVariants(), $attrs.class ?? '')" v-bind="$attrs">
    <slot /> <InfoIcon content="content" />
  </label>
</template>

<script setup lang="ts">
import { InfoIcon } from '@/components'
import { cn } from '@/lib/utils'
import { labelVariants, type LabelProps } from './index'

defineProps<LabelProps>()
</script>
