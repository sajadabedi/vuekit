<script setup lang="ts">
import { cn } from '@/lib/utils';
import { TabsTrigger, type TabsTriggerProps, useForwardProps } from 'reka-ui';
import { computed, type HTMLAttributes } from 'vue';

const props = defineProps<TabsTriggerProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <TabsTrigger
    data-slot="tabs-trigger"
    v-bind="forwardedProps"
    :class="
      cn(
        `group data-[state=active]:text-default text-secondary inline-flex h-full flex-1 items-center justify-center gap-1.5 border border-transparent p-0.5 font-medium whitespace-nowrap outline-none`,
        // disabled
        'disabled:pointer-events-none disabled:opacity-70',
        // Active
        'data-[state=active]:font-medium data-[state=active]:shadow-[0px_1px_0px_0px_var(--border-color-accent)]',
        // icon
        `[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,
        // focus
        'focus-visible:[&+*]:bg-tertiary',
        props.class
      )
    "
  >
    <div class="group-hover:bg-tertiary h-full w-full rounded-md px-3 pt-1.5">
      <slot />
    </div>
  </TabsTrigger>
</template>
