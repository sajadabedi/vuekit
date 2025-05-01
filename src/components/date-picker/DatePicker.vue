<script setup lang="ts">
import { cn } from '@/lib/utils';

import { Calendar } from '@/components/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/popover';
import { DateFormatter, type DateValue, getLocalTimeZone } from '@internationalized/date';
import { PhCalendar } from '@phosphor-icons/vue';
import { ref } from 'vue';

const df = new DateFormatter('en-US', {
  dateStyle: 'long'
});

const value = ref<DateValue>();
</script>

<template>
  <Popover data-slot="control">
    <PopoverTrigger as-child>
      <button
        :class="cn('control-base flex h-8.5 w-[250px] items-center justify-start text-left', !value && 'text-tertiary')"
      >
        <PhCalendar class="mr-2" weight="bold" />
        {{ value ? df.format(value.toDate(getLocalTimeZone())) : 'Pick a date' }}
      </button>
    </PopoverTrigger>
    <PopoverContent class="w-auto p-0">
      <Calendar v-model="value" initial-focus />
    </PopoverContent>
  </Popover>
</template>
