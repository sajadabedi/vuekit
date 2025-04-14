import type { Meta, StoryObj } from '@storybook/vue3';
import { useMagicKeys, watchDebounced } from '@vueuse/core';
import { ref, watch } from 'vue';
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
  component: CommandDialog, // Use CommandDialog as the main component for the story context
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {} // No args needed for this specific example
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
      <p class="text-sm text-muted-foreground">
        This is the Command component set. See the 'Dialog Usage' story for an interactive example.
        Press
        <kbd :class="kbdClasses">
            <span class="text-xs">⌘</span>J
        </kbd>
         or
        <kbd :class="kbdClasses">
            <span class="text-xs">Ctrl</span>J
        </kbd>
         in the 'Dialog Usage' story.
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

      // Expose refs and methods to the template
      return { args, open, kbdClasses };
    },
    template: `
      <div>
        <p class="text-sm text-muted-foreground">
          Press
          <kbd :class="kbdClasses">
            <span class="text-xs">⌘</span>J
          </kbd>
          or
          <kbd :class="kbdClasses">
            <span class="text-xs">Ctrl</span>J
          </kbd>
          to open/close the command dialog.
        </p>
        <CommandDialog v-model:open="open">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem value="calendar">
                Calendar
              </CommandItem>
              <CommandItem value="search-emoji">
                Search Emoji
              </CommandItem>
              <CommandItem value="calculator">
                Calculator
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem value="profile">
                Profile
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
    <p class="text-sm text-muted-foreground">
      Press
      <kbd :class="kbdClasses">
        <span class="text-xs">⌘</span>J
      </kbd>
      or
      <kbd :class="kbdClasses">
        <span class="text-xs">Ctrl</span>J
      </kbd>
       to open/close the command dialog.
    </p>
    <CommandDialog v-model:open="open">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem value="calendar">
            Calendar
          </CommandItem>
          <CommandItem value="search-emoji">
            Search Emoji
          </CommandItem>
          <CommandItem value="calculator">
            Calculator
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem value="profile">
            Profile
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
</template>`
      }
    }
  }
};
