<script lang="ts" setup>
import { cn } from '@/lib/utils';
import { useField } from 'vee-validate';
import { type HTMLAttributes, provide, computed } from 'vue';
import { FORM_ITEM_INJECTION_KEY } from './injectionKeys';

const props = defineProps<{
  class?: HTMLAttributes['class'];
  name?: string;
}>();

const { errorMessage, value } = useField(() => props.name ?? '');

const id = computed(() => `${props.name}-form-item`);
provide(FORM_ITEM_INJECTION_KEY, { id: id.value, error: errorMessage });
</script>

<template>
  <div data-slot="form-item" :class="cn('isolate grid gap-1', props.class)" :data-error="!!errorMessage">
    <slot />
  </div>
</template>
