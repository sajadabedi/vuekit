import type { Meta, StoryObj } from '@storybook/vue3'
import { Checkbox } from '.'
import { ref } from 'vue'
import { PhCheck } from '@phosphor-icons/vue'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

export const AllStates: Story = {
  render: () => ({
    components: { Checkbox },
    setup() {
      const checked = ref(true)
      const indeterminate = ref(true)
      return { checked, indeterminate }
    },
    template: `
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-2">
          <Checkbox />
          <label>Unchecked</label>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox v-model="checked" />
          <label>Checked</label>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox :indeterminate="indeterminate" />
          <label>Indeterminate</label>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox disabled />
          <label class="opacity-50">Disabled</label>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox disabled checked />
          <label class="opacity-50">Disabled Checked</label>
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
        <Checkbox v-model="checked">
          <PhCheck class="size-3.5" />
        </Checkbox>
        <label>With Custom Icon</label>
      </div>
    `
  })
}

export const FormGroup: Story = {
  render: () => ({
    components: { Checkbox },
    setup() {
      const items = ref([false, false, false])
      const allChecked = ref(false)
      
      function toggleAll() {
        const newState = !allChecked.value
        items.value = items.value.map(() => newState)
        allChecked.value = newState
      }

      return { items, allChecked, toggleAll }
    },
    template: `
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-2 pb-2 border-b">
          <Checkbox 
            v-model="allChecked"
            :indeterminate="items.some(Boolean) && !items.every(Boolean)"
            @update:model-value="toggleAll"
          />
          <label class="font-medium">Select All</label>
        </div>
        <div class="flex flex-col gap-2 pl-6">
          <div v-for="(_, i) in items" :key="i" class="flex items-center gap-2">
            <Checkbox v-model="items[i]" />
            <label>Item {{ i + 1 }}</label>
          </div>
        </div>
      </div>
    `
  })
}

export const WithDescription: Story = {
  render: () => ({
    components: { Checkbox },
    setup() {
      const checked = ref(false)
      return { checked }
    },
    template: `
      <div class="flex gap-2">
        <Checkbox v-model="checked" class="mt-1" />
        <div class="grid gap-1.5">
          <label class="font-medium">Accept terms and conditions</label>
          <p class="text-sm text-muted-foreground">
            You agree to our Terms of Service and Privacy Policy by checking this box.
          </p>
        </div>
      </div>
    `
  })
}
