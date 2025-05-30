<script setup lang="ts">
import {
    TooltipProvider,
    TooltipRoot,
    type TooltipRootEmits,
    type TooltipRootProps,
    useForwardPropsEmits,
} from "reka-ui";

const props = defineProps<TooltipRootProps>();
const emits = defineEmits<TooltipRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
    <TooltipProvider :delay-duration="500">
        <TooltipRoot v-bind="forwarded">
            <slot />
        </TooltipRoot>
    </TooltipProvider>
</template>
