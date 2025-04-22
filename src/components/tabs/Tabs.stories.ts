import type { Meta, StoryObj } from '@storybook/vue3';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '.';
import { Button, Input, Label } from '@/components';
import { ref } from 'vue';
import { PhUserCircle, PhLock } from '@phosphor-icons/vue';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      description: 'The currently active tab value',
      control: 'text',
      table: {
        type: { summary: 'string' }
      }
    },
    'onUpdate:modelValue': {
      description: 'Event emitted when the active tab changes',
      table: {
        type: { summary: '(value: string) => void' },
        category: 'events'
      }
    },
    class: {
      description: '(Optional) Additional CSS classes to apply to the tabs container',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'A tabs component that follows WAI-ARIA guidelines. Provides keyboard navigation and smooth transitions between content.'
      }
    }
  }
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const tabsContainerClass = 'w-[400px]';

export const Default: Story = {
  render: () => ({
    components: { Tabs, TabsList, TabsTrigger, TabsContent },
    setup() {
      const activeTab = ref('account');
      return { activeTab };
    },
    template: `
      <div class="${tabsContainerClass}">
        <Tabs v-model="activeTab">
          <TabsList>
            <TabsTrigger value="account">
              Account
            </TabsTrigger>
            <TabsTrigger value="password">
              <PhLock weight="bold" />
              Password
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <div class="space-y-4">
              <h4 class="text-sm font-medium">Account Settings</h4>
              <p class="text-sm text-tertiary">
                Update your account settings. Set your preferred language and timezone.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="password">
            <div class="space-y-4">
              <h4 class="text-sm font-medium">Password Settings</h4>
              <p class="text-sm text-tertiary">
                Change your password here. After saving, you'll be logged out.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    `
  })
};

export const WithForm: Story = {
  render: () => ({
    components: {
      Tabs,
      TabsList,
      TabsTrigger,
      TabsContent,
      Input,
      Label,
      Button
    },
    template: `
      <Tabs default-value="account" class="w-[400px]">
        <TabsList class="grid w-full grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div class="space-y-4">
            <div class="space-y-2">
              <Label>Name</Label>
              <Input />
            </div>
            <div class="space-y-2">
              <Label>Email</Label>
              <Input type="email" />
            </div>
            <Button>Save changes</Button>
          </div>
        </TabsContent>
        <TabsContent value="password">
          <div class="space-y-4">
            <div class="space-y-2">
              <Label>Current password</Label>
              <Input type="password" />
            </div>
            <div class="space-y-2">
              <Label>New password</Label>
              <Input type="password" />
            </div>
            <Button>Change password</Button>
          </div>
        </TabsContent>
      </Tabs>
    `
  })
};

export const Disabled: Story = {
  render: () => ({
    components: {
      Tabs,
      TabsList,
      TabsTrigger,
      TabsContent
    },
    template: `
      <Tabs default-value="active" class="w-[400px]">
        <TabsList>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="disabled" disabled>Disabled</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
        </TabsList>
        <TabsContent value="active">
          <p class="text-sm text-gray-500">This is the active tab panel.</p>
        </TabsContent>
        <TabsContent value="disabled">
          <p class="text-sm text-gray-500">This content is disabled.</p>
        </TabsContent>
        <TabsContent value="pending">
          <p class="text-sm text-gray-500">This is the pending tab panel.</p>
        </TabsContent>
      </Tabs>
    `
  })
};

export const WithIcon: Story = {
  render: () => ({
    components: {
      Tabs,
      TabsList,
      TabsTrigger,
      TabsContent,
      PhUserCircle,
      PhLock
    },
    template: `
      <Tabs default-value="account" class="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">
            <PhUserCircle weight="bold" />
            Account
          </TabsTrigger>
          <TabsTrigger value="password">
            <PhLock weight="bold" />
            Password
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div class="space-y-4">
            <h4 class="text-sm font-medium">Account Settings</h4>
            <p class="text-sm text-tertiary">
              Update your account settings. Set your preferred language and timezone.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="password">
          <div class="space-y-4">
            <h4 class="text-sm font-medium">Password Settings</h4>
            <p class="text-sm text-tertiary">
              Change your password here. After saving, you'll be logged out.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    `
  })
};
