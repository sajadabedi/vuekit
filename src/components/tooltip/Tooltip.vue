<!-- <template>
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
</template> -->

<script setup lang="ts">
import {
    TooltipRoot,
    TooltipProvider,
    type TooltipRootEmits,
    type TooltipRootProps,
    useForwardPropsEmits,
} from "reka-ui";

const props = defineProps<TooltipRootProps>();
const emits = defineEmits<TooltipRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
    <TooltipProvider>
        <TooltipRoot v-bind="forwarded">
            <slot />
        </TooltipRoot>
    </TooltipProvider>
</template>
