<script setup lang="ts">
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/dropdown-menu';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/sidebar';
import { PhCheck, PhCaretDown, PhSquaresFour } from '@phosphor-icons/vue';
import { ref } from 'vue';
const props = defineProps<{
  versions: string[];
  defaultVersion: string;
}>();
const selectedVersion = ref(props.defaultVersion);
</script>
<template>
  <SidebarMenu>
    <SidebarMenuItem>
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <SidebarMenuButton
            size="lg"
            class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <div
              class="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg"
            >
              <PhSquaresFour class="size-4" />
            </div>
            <div class="flex flex-col gap-0.5 leading-none">
              <span class="font-semibold">Documentation</span>
              <span class="">v{{ selectedVersion }}</span>
            </div>
            <PhCaretDown class="ml-auto" />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-[--reka-dropdown-menu-trigger-width]" align="start">
          <DropdownMenuItem v-for="version in versions" :key="version" @select="selectedVersion = version">
            v{{ version }}
            <PhCheck v-if="version === selectedVersion" class="ml-auto" />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  </SidebarMenu>
</template>
