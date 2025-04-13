import type { Meta, StoryObj } from '@storybook/vue3';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription } from '.';
import { Button, Input, Label } from '@/components';

const meta: Meta<typeof Sheet> = {
  title: 'Components/Sheet',
  component: Sheet,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: {
      Sheet,
      SheetTrigger,
      SheetContent,
      SheetHeader,
      SheetFooter,
      SheetTitle,
      SheetDescription,
      Button
    },
    template: `
      <Sheet>
        <SheetTrigger>
          <Button>Open Sheet</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div class="p-4">
              content goes here
            </div>
          <SheetFooter>
            <Button>Save changes</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    `
  })
};

export const Side: Story = {
  render: () => ({
    components: {
      Sheet,
      SheetTrigger,
      SheetContent,
      SheetHeader,
      SheetFooter,
      SheetTitle,
      SheetDescription,
      Button,
      Input,
      Label
    },
    template: `
      <div class="grid gap-2">
        <Sheet>
          <SheetTrigger>
            <Button>Open Left Sheet</Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <div class="p-4">
              content goes here
            </div>
            <SheetFooter>
              <Button>Save changes</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
        <Sheet>
          <SheetTrigger>
            <Button>Open Right Sheet</Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <div class="p-4">
              content goes here
            </div>
            <SheetFooter>
              <Button>Save changes</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    `
  })
};
