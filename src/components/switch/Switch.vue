<script setup lang="ts">
import { cn } from '@/lib/utils';
import { SwitchRoot, type SwitchRootEmits, type SwitchRootProps, SwitchThumb, useForwardPropsEmits } from 'reka-ui';
import { computed, type HTMLAttributes } from 'vue';

const props = defineProps<SwitchRootProps & { class?: HTMLAttributes['class'] }>();

const emits = defineEmits<SwitchRootEmits>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <SwitchRoot
    data-slot="switch"
    v-bind="forwarded"
    :class="
      cn(
        'peer group data-[state=checked]:bg-accent focus-ring data-[state=unchecked]:bg-muted disabled:text-disabled inline-flex h-[1.15rem] w-7.5 shrink-0 items-center rounded-full bg-linear-to-b from-black/10 to-white/8 shadow-[0_0_0_1px_inset_var(--ui-shadow-ring)] transition-all outline-none disabled:cursor-not-allowed data-[state=checked]:from-white/10',
        props.class
      )
    "
  >
    <SwitchThumb
      data-slot="switch-thumb"
      :class="
        cn(
          'pointer-events-none block size-3.5 rounded-full bg-white shadow-md transition-transform group-disabled:opacity-30 data-[state=checked]:translate-x-[calc(100%-0.5px)] data-[state=unchecked]:translate-x-0.5'
        )
      "
    >
      <slot name="thumb" />
    </SwitchThumb>
  </SwitchRoot>
</template>

<!--
peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50
-->

<!--
'bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0'
-->
