<script lang="ts" setup>
import { cn } from '@/lib/utils';
import { type HTMLAttributes } from 'vue';
import { useFormField } from './useFormField';

const props = defineProps<{
  class?: HTMLAttributes['class'];
}>();

const { formMessageId, error } = useFormField();
</script>

<template>
  <p v-if="error" :id="formMessageId" data-slot="form-message" :class="cn('text-critical text-sm', props.class)">
    {{ error }}
  </p>
</template>
