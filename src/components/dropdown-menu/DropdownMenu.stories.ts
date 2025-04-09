import { Button } from '@/components'
import { PhBell, PhCaretRight, PhCheck, PhCloud, PhCreditCard, PhGear, PhUser } from '@phosphor-icons/vue'
import type { Meta, StoryObj } from '@storybook/vue3'
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
} from '.'

const meta: Meta<typeof DropdownMenu> = {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

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
          <Button variant="outline">Open Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <PhUser class="size-4" />
            <span>Profile</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <PhCreditCard class="size-4" />
            <span>Billing</span>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <PhGear class="size-4" />
            <span>Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <PhCloud class="size-4" />
            <span>New Team</span>
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    `
  })
}

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
          <Button variant="outline">Open Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <PhUser class="size-4" />
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <PhCreditCard class="size-4" />
              <span>Billing</span>
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <PhGear class="size-4" />
              <span>Settings</span>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <PhCloud class="size-4" />
              <span>Team</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    `
  })
}

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
          <Button variant="outline">Open Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <PhUser class="size-4" />
            <span>Profile</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <PhBell class="size-4" />
              <span>Notifications</span>
              <PhCaretRight class="ml-auto size-4" />
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>
                <span>Email Digest</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Push Notifications</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Text Messages</span>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuItem>
            <PhGear class="size-4" />
            <span>Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    `
  })
}

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
      }
    },
    template: `
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="outline">Open Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Display Density</DropdownMenuLabel>
          <DropdownMenuRadioGroup v-model="selected">
            <DropdownMenuRadioItem value="compact">
              <PhCheck class="size-4" />
              <span>Compact</span>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="comfortable">
              <PhCheck class="size-4" />
              <span>Comfortable</span>
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    `
  })
}

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
      }
    },
    template: `
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="outline">Open Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuCheckboxItem v-model="showStatusBar">
            <PhCheck class="size-4" />
            <span>Status Bar</span>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem v-model="showActivityBar">
            <PhCheck class="size-4" />
            <span>Activity Bar</span>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem v-model="showPanel">
            <PhCheck class="size-4" />
            <span>Panel</span>
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    `
  })
}
