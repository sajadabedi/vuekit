<script setup lang="ts">
import { cn } from '@/lib/utils';
import { PhCircle } from '@phosphor-icons/vue';
import {
  DropdownMenuItemIndicator,
  DropdownMenuRadioItem,
  type DropdownMenuRadioItemEmits,
  type DropdownMenuRadioItemProps,
  useForwardPropsEmits
} from 'reka-ui';
import { computed, type HTMLAttributes } from 'vue';

const props = defineProps<DropdownMenuRadioItemProps & { class?: HTMLAttributes['class'] }>();

const emits = defineEmits<DropdownMenuRadioItemEmits>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <DropdownMenuRadioItem
    data-slot="dropdown-menu-radio-item"
    v-bind="forwarded"
    :class="
      cn(
        `focus:bg-tertiary relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-6 outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,
        props.class
      )
    "
  >
    <span class="pointer-events-none absolute left-1 flex size-3.5 items-center justify-center">
      <DropdownMenuItemIndicator>
        <PhCircle class="fill-accent size-2" weight="fill" />
      </DropdownMenuItemIndicator>
    </span>
    <slot />
  </DropdownMenuRadioItem>
</template>
