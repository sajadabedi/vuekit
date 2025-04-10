<script setup lang="ts">
import { cn } from '@/lib/utils';
import { Primitive } from 'reka-ui';
import type { ButtonProps } from './Button.types';
import { buttonVariants } from '.';

defineProps<ButtonProps>();
</script>

<template>
  <Primitive
    data-slot="button"
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size }), $props.class)"
  >
    <slot />
  </Primitive>
</template>
