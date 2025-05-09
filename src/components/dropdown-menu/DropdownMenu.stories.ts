import { Button } from '@/components';
import { PhBell, PhCaretRight, PhCheck, PhCloud, PhCreditCard, PhGear, PhUser } from '@phosphor-icons/vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from '.';

const meta: Meta<typeof DropdownMenu> = {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: {
      Button,
      DropdownMenu,
      DropdownMenuTrigger,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuShortcut,
      PhUser,
      PhCreditCard,
      PhGear,
      PhCloud
    },
    template: `
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button>Open Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem>
            New Team
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    `
  })
};

export const WithGroups: Story = {
  render: () => ({
    components: {
      Button,
      DropdownMenu,
      DropdownMenuTrigger,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuGroup,
      DropdownMenuLabel,
      DropdownMenuSeparator,
      DropdownMenuShortcut,
      PhUser,
      PhCreditCard,
      PhGear,
      PhCloud
    },
    template: `
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button>Open Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <PhUser weight="bold" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <PhCreditCard weight="bold" />
              <span>Billing</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <PhGear weight="bold" />
              <span>Settings</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <PhCloud weight="bold" />
              <span>Team</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    `
  })
};

export const WithSubmenus: Story = {
  render: () => ({
    components: {
      Button,
      DropdownMenu,
      DropdownMenuTrigger,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuSub,
      DropdownMenuSubTrigger,
      DropdownMenuSubContent,
      DropdownMenuShortcut,
      PhUser,
      PhCreditCard,
      PhGear,
      PhBell,
      PhCaretRight
    },
    template: `
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button>Open Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
           Profile
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              Notifications
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>
                Email Digest
              </DropdownMenuItem>
              <DropdownMenuItem>
                Push Notifications
              </DropdownMenuItem>
              <DropdownMenuItem>
                Text Messages
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuItem>
            Settings
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    `
  })
};

export const WithRadioGroups: Story = {
  render: () => ({
    components: {
      Button,
      DropdownMenu,
      DropdownMenuTrigger,
      DropdownMenuContent,
      DropdownMenuRadioGroup,
      DropdownMenuRadioItem,
      DropdownMenuLabel,
      PhCheck
    },
    setup() {
      return {
        selected: 'comfortable'
      };
    },
    template: `
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button>Open Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Display Density</DropdownMenuLabel>
          <DropdownMenuRadioGroup v-model="selected">
            <DropdownMenuRadioItem value="compact">
              Compact
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="comfortable">
              Comfortable
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    `
  })
};

export const WithCheckboxItems: Story = {
  render: () => ({
    components: {
      Button,
      DropdownMenu,
      DropdownMenuTrigger,
      DropdownMenuContent,
      DropdownMenuCheckboxItem,
      DropdownMenuLabel,
      PhCheck
    },
    setup() {
      return {
        showStatusBar: true,
        showActivityBar: false,
        showPanel: false
      };
    },
    template: `
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button>Open Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuCheckboxItem v-model="showStatusBar">
            Status Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem v-model="showActivityBar">
            Activity Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem v-model="showPanel">
            Panel
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    `
  })
};
