import type { Meta, StoryObj } from '@storybook/vue3';
import { useMagicKeys, watchDebounced } from '@vueuse/core';
import { ref } from 'vue';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator
} from './index';

const meta = {
  title: 'Components/Command',
  component: CommandDialog,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof CommandDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

const kbdClasses =
  'pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100';

export const Default: Story = {
  render: () => ({
    setup() {
      return { kbdClasses };
    },
    template: `
      <p class="text-sm">
        Press
        <kbd :class="kbdClasses" class="border-0 font-sans">
            <span class="text-xs">⌘</span>j
        </kbd>
      </p>
    `
  })
};

export const DialogExample: Story = {
  name: 'Dialog Usage',
  render: (args) => ({
    components: {
      CommandDialog,
      CommandEmpty,
      CommandGroup,
      CommandInput,
      CommandItem,
      CommandList,
      CommandSeparator
    },
    setup() {
      const open = ref(false);

      const { Meta_J, Ctrl_J } = useMagicKeys({
        passive: false,
        onEventFired(e) {
          if (e.key === 'j' && (e.metaKey || e.ctrlKey)) e.preventDefault();
        }
      });

      watchDebounced(
        [Meta_J, Ctrl_J],
        (v) => {
          if (v[0] || v[1]) {
            open.value = !open.value;
          }
        },
        { debounce: 100, maxWait: 200 } // Adjust debounce/maxWait as needed
      );

      return { args, open, kbdClasses };
    },
    template: `
      <div>
        <p class="text-sm">
        Press
        <kbd :class="kbdClasses" class="border-0 font-sans">
            <span class="text-xs">⌘</span>J
        </kbd>
      </p>
        <CommandDialog v-model:open="open">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem value="calendar">
                Action center
              </CommandItem>
              <CommandItem value="search-emoji">
                Pulse
              </CommandItem>
              <CommandItem value="calculator">
                invoices
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem value="profile">
                Customers
              </CommandItem>
              <CommandItem value="billing">
                Billing
              </CommandItem>
              <CommandItem value="settings">
                Settings
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </div>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `
<script setup lang="ts">
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command' // Adjust path as needed

import { useMagicKeys, watchDebounced } from '@vueuse/core'
import { ref } from 'vue'

const open = ref(false)
const kbdClasses = "pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100";

const { Meta_J, Ctrl_J } = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.key === 'j' && (e.metaKey || e.ctrlKey))
      e.preventDefault()
  },
})

watchDebounced(
  [Meta_J, Ctrl_J],
  (v) => {
    if (v[0] || v[1])
      open.value = !open.value
  },
  { debounce: 100, maxWait: 200 } // Adjust debounce/maxWait as needed
)
</script>

<template>
  <div>
    <CommandDialog v-model:open="open">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          <CommandItem value="calendar">
            Dashboard
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  </div>
</template>`
      }
    }
  }
};
