import { Button } from '@/components/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/dropdown-menu';
import { Label } from '@/components/label';
import { SidebarInput } from '@/components/sidebar';
import AppSidebar from '@/stories/sidebar-story/AppSidebar.vue';
import SearchForm from '@/stories/sidebar-story/SearchForm.vue';
import VersionSwitcher from '@/stories/sidebar-story/VersionSwitcher.vue';
import { PhCaretDown, PhCheck, PhHouse, PhMagnifyingGlass, PhSlidersHorizontal, PhSquaresFour, PhUser } from '@phosphor-icons/vue';
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger
} from '.';

const meta = {
  title: 'Components/Sidebar',
  component: SidebarProvider,
  tags: ['autodocs']
} satisfies Meta<typeof SidebarProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: {
      SidebarProvider,
      Sidebar,
      SidebarContent,
      SidebarGroup,
      SidebarGroupLabel,
      SidebarGroupContent,
      SidebarMenu,
      SidebarMenuItem,
      SidebarMenuButton,
      SidebarTrigger,
      Button,
      PhHouse,
      PhSlidersHorizontal,
      PhUser
    },
    setup() {
      const items = [
        {
          title: 'Home',
          url: '#',
          icon: PhHouse
        },
        {
          title: 'Profile',
          url: '#',
          icon: PhUser
        },
        {
          title: 'Settings',
          url: '#',
          icon: PhSlidersHorizontal
        }
      ];
      return { items };
    },
    template: `
      <SidebarProvider>
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Menu</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem v-for="item in items" :key="item.title">
                    <SidebarMenuButton asChild>
                      <a :href="item.url">
                        <component :is="item.icon" class="w-4 h-4" />
                        <span>{{ item.title }}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <div class="p-8">
          <SidebarTrigger asChild>
            <Button variant="outline">Toggle Sidebar</Button>
          </SidebarTrigger>
        </div>
      </SidebarProvider>
    `
  })
};

export const Documentation: Story = {
  render: () => ({
    components: {
      SidebarProvider,
      Sidebar,
      SidebarContent,
      SidebarGroup,
      SidebarGroupLabel,
      SidebarGroupContent,
      SidebarMenu,
      SidebarMenuItem,
      SidebarMenuButton,
      SidebarTrigger,
      SidebarHeader,
      SidebarInset,
      AppSidebar,
      SearchForm,
      VersionSwitcher,
      Button,
      Label,
      SidebarInput,
      DropdownMenu,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuTrigger,
      PhCheck,
      PhCaretDown,
      PhSquaresFour,
      PhHouse,
      PhMagnifyingGlass,
      PhSlidersHorizontal,
      PhUser
    },
    setup() {
      const versions = ['1.0.1', '1.1.0-alpha', '2.0.0-beta1'];
      return { versions };
    },
    template: `
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header class="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger class="-ml-1" />
            <div class="flex flex-1 items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="text-sm font-medium">Building Your Application</span>
                <span class="text-sm text-muted-foreground">/</span>
                <span class="text-sm font-medium">Data Fetching</span>
              </div>
            </div>
          </header>
          <div class="flex flex-1 flex-col gap-4 p-4">
            <div class="grid auto-rows-min gap-4 md:grid-cols-3">
              <div class="aspect-video rounded-xl bg-muted/50" />
              <div class="aspect-video rounded-xl bg-muted/50" />
              <div class="aspect-video rounded-xl bg-muted/50" />
            </div>
            <div class="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
          </div>
        </SidebarInset>
      </SidebarProvider>
    `
  })
};
