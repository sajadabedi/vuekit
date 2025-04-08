import { Label } from '@/components'
import { PhCheck } from '@phosphor-icons/vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import { computed, ref } from 'vue'
import { Checkbox } from '.'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

export const AllStates: Story = {
  render: () => ({
    components: { Checkbox, Label },
    setup() {
      const checked = ref(true)
      const indeterminate = ref(true)
      return { checked, indeterminate }
    },
    template: `
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-2">
          <Checkbox id="221" />
          <Label for="221">Unchecked</Label>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox v-model="checked" id="aa" />
          <Label for="aa">Checked</Label>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox disabled id="bb" />
          <Label for="bb" class="opacity-50">Disabled</Label>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox disabled checked id="cc" />
          <Label class="opacity-50">Disabled Checked</Label>
        </div>
      </div>
    `
  })
}

export const CustomIcon: Story = {
  render: () => ({
    components: { Checkbox, PhCheck },
    setup() {
      const checked = ref(true)
      return { checked }
    },
    template: `
      <div class="flex items-center gap-2">
        <Checkbox v-model="checked" id="terms">
          <PhCheck weight="bold" class="text-white" />
        </Checkbox>
        <Label for="terms">With Custom Icon</Label>
      </div>
    `
  })
}

export const FormGroup: Story = {
  render: () => ({
    components: { Checkbox, Label },
    setup() {
      const items = ref([false, false, false])
      const allChecked = computed(() => items.value.every(Boolean))
      const isIndeterminate = computed(() => items.value.some(Boolean) && !allChecked.value)

      function toggleAll(checked: boolean) {
        items.value = items.value.map(() => checked)
      }

      return { items, allChecked, isIndeterminate, toggleAll }
    },
    template: `
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-2 pb-2 border-b">
          <Checkbox
            v-model="allChecked"
            :indeterminate="isIndeterminate"
            @update:model-value="toggleAll"
          />
          <Label tooltip="Click to select all" for="terms">Select All</Label>
        </div>
        <div class="flex flex-col gap-2 pl-6">
          <div v-for="(_, i) in items" :key="i" class="flex items-center gap-2">
            <Checkbox v-model="items[i]" id="terms" />
            <Label for="terms">Item {{ i + 1 }}</Label>
          </div>
        </div>
      </div>
    `
  })
}

export const WithDescription: Story = {
  render: () => ({
    components: { Checkbox, Label },
    setup() {
      const checked = ref(false)
      return { checked }
    },
    template: `
      <div class="flex gap-2">
        <Checkbox v-model="checked" id="terms" />
        <div class="grid gap-1">
          <Label tooltip="Tooltip" for="terms">Accept terms and conditions</Label>
          <p class="text-secondary">
            You agree to our Terms of Service and Privacy Policy by checking this box.
          </p>
        </div>
      </div>
    `
  })
}
