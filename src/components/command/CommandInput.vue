<script setup lang="ts">
import { cn } from '@/lib/utils';
import { PhMagnifyingGlass } from '@phosphor-icons/vue';
import { ListboxFilter, type ListboxFilterProps, useForwardProps } from 'reka-ui';
import { computed, type HTMLAttributes } from 'vue';
import { useCommand } from '.';

defineOptions({
  inheritAttrs: false
});

const props = defineProps<
  ListboxFilterProps & {
    class?: HTMLAttributes['class'];
  }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);

const { filterState } = useCommand();
</script>

<template>
  <div class="border-secondary flex items-center border-b px-3" cmdk-input-wrapper>
    <PhMagnifyingGlass weight="bold" size="12" class="text-tertiary mr-1 h-3.5" />
    <ListboxFilter
      v-bind="{ ...forwardedProps, ...$attrs }"
      v-model="filterState.search"
      auto-focus
      :class="
        cn(
          'placeholder:text-placeholder flex h-10 w-full rounded-md bg-transparent py-3 outline-none disabled:cursor-not-allowed disabled:opacity-50',
          props.class
        )
      "
    />
  </div>
</template>
