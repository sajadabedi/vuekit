import type { Meta, StoryFn } from '@storybook/vue3'
import Button from './Button.vue'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'The visual style of the button',
      control: 'select',
      options: ['primary', 'secondary', 'ghost'],
      defaultValue: 'primary',
    },
    disabled: {
      description: 'Whether the button is disabled',
      control: 'boolean',
      defaultValue: false,
    },
    class: {
      description: 'Additional CSS classes to apply',
      control: 'text',
    },
    default: {
      description: 'Default slot content',
      control: 'text',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A flexible button component that supports multiple variants.',
      },
    },
  },
} satisfies Meta<typeof Button>

export default meta

// Template for all stories
const Template: StoryFn<typeof Button> = (args) => ({
  components: { Button },
  setup() {
    return { args }
  },
  template:
    '<Button v-bind="args"><template v-if="args.default">{{ args.default }}</template></Button>',
})

export const Primary = {
  render: Template,
  args: {
    variant: 'primary',
    default: 'Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary button is used for main actions.',
      },
    },
  },
}

export const Default = {
  render: Template,
  args: {
    variant: 'default',
    default: 'Default Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default button is used for secondary actions.',
      },
    },
  },
}

export const Ghost = {
  render: Template,
  args: {
    variant: 'ghost',
    default: 'Ghost Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Ghost button is used for subtle actions.',
      },
    },
  },
}

export const Critical = {
  render: Template,
  args: {
    variant: 'critical',
    default: 'Critical Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Critical button is used for actions that have high impact.',
      },
    },
  },
}

export const Disabled = {
  render: Template,
  args: {
    disabled: true,
    default: 'Disabled Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled state of the button.',
      },
    },
  },
}

export const WithCustomClass = {
  render: Template,
  args: {
    class: 'w-full',
    default: 'Full Width Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Button with custom classes applied.',
      },
    },
  },
}
