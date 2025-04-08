import type { Meta, StoryObj } from '@storybook/vue3'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '.'
import { Button } from '../button'
import { Input } from '../input'
import { Label } from '../label'

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: {
      Tabs,
      TabsList,
      TabsTrigger,
      TabsContent
    },
    template: `
      <Tabs default-value="account" class="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <p class="text-sm text-gray-500">
            Make changes to your account here. Click save when you're done.
          </p>
        </TabsContent>
        <TabsContent value="password">
          <p class="text-sm text-gray-500">
            Change your password here. After saving, you'll be logged out.
          </p>
        </TabsContent>
      </Tabs>
    `
  })
}

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
}

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
}
