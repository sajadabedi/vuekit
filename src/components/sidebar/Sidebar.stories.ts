import { Button } from '@/components/button';
import type { Meta, StoryObj } from '@storybook/vue3';
import { Home, Settings, User } from 'lucide-vue-next';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
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
      Home,
      Settings,
      User
    },
    setup() {
      const items = [
        {
          title: 'Home',
          url: '#',
          icon: Home
        },
        {
          title: 'Profile',
          url: '#',
          icon: User
        },
        {
          title: 'Settings',
          url: '#',
          icon: Settings
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
