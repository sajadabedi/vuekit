import type { Meta, StoryObj } from '@storybook/vue3';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '.';
import { Home } from 'lucide-vue-next';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: {
      Sidebar,
      SidebarContent,
      SidebarHeader,
      SidebarGroup,
      SidebarGroupContent,
      SidebarGroupLabel,
      SidebarMenu,
      SidebarMenuButton,
      SidebarMenuItem,
      Home
    },
    template: `
      <Sidebar>
        <SidebarHeader>
          <div class="p-4">
            <span class="font-semibold">Sidebar Example</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <Home class="size-4" />
                      <span>Home</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    `
  })
};
