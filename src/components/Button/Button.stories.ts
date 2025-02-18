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
      options: ['primary', 'secondary', 'ghost', 'outline', 'link'],
      defaultValue: 'primary',
    },
    size: {
      description: 'The size of the button',
      control: 'select',
      options: ['sm', 'md', 'lg'],
      defaultValue: 'md',
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
        component:
          'A flexible button component that supports multiple variants and sizes.',
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
    default: 'Primary Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary button is used for main actions.',
      },
    },
  },
}

export const Secondary = {
  render: Template,
  args: {
    variant: 'secondary',
    default: 'Secondary Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Secondary button is used for secondary actions.',
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

export const Outline = {
  render: Template,
  args: {
    variant: 'outline',
    default: 'Outline Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Outline button is used for secondary actions with a border.',
      },
    },
  },
}

export const Link = {
  render: Template,
  args: {
    variant: 'link',
    default: 'Link Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Link button is used for navigation actions.',
      },
    },
  },
}

export const Small = {
  render: Template,
  args: {
    size: 'sm',
    default: 'Small Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Small size button for compact spaces.',
      },
    },
  },
}

export const Medium = {
  render: Template,
  args: {
    size: 'md',
    default: 'Medium Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Medium size button for standard use.',
      },
    },
  },
}

export const Large = {
  render: Template,
  args: {
    size: 'lg',
    default: 'Large Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Large size button for prominent actions.',
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
