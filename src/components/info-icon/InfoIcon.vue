<template>
  <Tooltip :content="tooltip">
    <button type="button" :class="cn(infoIconVariants(), $attrs.class ?? '')" v-bind="$attrs">
      <svg width="16" height="16" viewBox="0 0 16 16" class="currentColor">
        <path
          opacity="0.15"
          d="M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8 6C8.55228 6 9 5.55228 9 5C9 4.44772 8.55228 4 8 4C7.44771 4 7 4.44772 7 5C7 5.55228 7.44771 6 8 6ZM7 7C6.58579 7 6.25 7.33579 6.25 7.75C6.25 8.16421 6.58579 8.5 7 8.5H7.24999V10.5C7.24999 10.9142 7.58578 11.25 7.99999 11.25C8.4142 11.25 8.74999 10.9142 8.74999 10.5V8C8.74999 7.44772 8.30227 7 7.74999 7H7Z"
          fill="currentColor"
        />
      </svg>
    </button>
  </Tooltip>
</template>

<script setup lang="ts">
import { Tooltip } from '@/components/tooltip'
import { cn } from '@/lib/utils'
import { infoIconVariants, type InfoProps } from '.'

defineProps<InfoProps>()
</script>
