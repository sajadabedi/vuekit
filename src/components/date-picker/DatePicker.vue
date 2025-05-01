<script setup lang="ts">
import { cn } from '@/lib/utils';

import { Calendar } from '@/components/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/popover';
import { DateFormatter, type DateValue, getLocalTimeZone } from '@internationalized/date';
import { PhCalendar, PhCalendarBlank } from '@phosphor-icons/vue';
import { useVModel } from '@vueuse/core';
import type { HTMLAttributes } from 'vue';

interface Props {
  modelValue?: DateValue;
  placeholder?: string;
  class?: HTMLAttributes['class'];
  name?: string;
  disabled?: boolean;
  required?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: 'Pick a date',
  disabled: false,
  required: false
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: DateValue | undefined): void;
  (e: 'change', value: DateValue | undefined): void;
}>();

const value = useVModel(props, 'modelValue', emit);

const df = new DateFormatter('en-US', {
  dateStyle: 'long'
});
</script>

<template>
  <Popover data-slot="control">
    <PopoverTrigger as-child>
      <button
        type="button"
        :name="name"
        :disabled="disabled"
        :aria-required="required"
        :class="
          cn(
            'control-base flex h-8.5 w-full items-center justify-start text-left',
            !value && 'text-tertiary',
            disabled && 'cursor-not-allowed opacity-50',
            props.class
          )
        "
      >
        <PhCalendar v-if="value" class="mr-2" weight="bold" />
        <PhCalendarBlank v-else class="mr-2" weight="bold" />
        {{ value ? df.format(value.toDate(getLocalTimeZone())) : props.placeholder }}
      </button>
    </PopoverTrigger>
    <PopoverContent class="w-auto p-0">
      <Calendar v-model="value" initial-focus :disabled="disabled" />
    </PopoverContent>
  </Popover>
</template>
