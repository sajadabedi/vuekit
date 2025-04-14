import { Label } from '@/components/label';
import type { Meta, StoryObj } from '@storybook/vue3';
import { Textarea } from '.';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { Textarea },
    template: '<Textarea placeholder="Type your message here." />'
  })
};

export const WithLabel: Story = {
  render: () => ({
    components: { Textarea, Label },
    template: `
      <div class="grid gap-2">
        <Label for="message">Your message</Label>
        <Textarea id="message" placeholder="Type your message here." />
      </div>
    `
  })
};

export const Disabled: Story = {
  render: () => ({
    components: { Textarea },
    template: '<Textarea disabled placeholder="Type your message here." />'
  })
};

export const WithText: Story = {
  render: () => ({
    components: { Textarea },
    template: '<Textarea model-value="This is a textarea with text." placeholder="Type your message here." />'
  })
};
