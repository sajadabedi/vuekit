import { Label } from '@/components';
import type { Meta, StoryObj } from '@storybook/vue3';
import { computed, ref } from 'vue';
import { Checkbox } from '.';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllStates: Story = {
  render: () => ({
    components: { Checkbox, Label },
    setup() {
      const uncheckedState = ref(false);
      const checkedState = ref(true);
      const disabledState = ref(false);
      const disabledCheckedState = ref(true);

      return { uncheckedState, checkedState, disabledState, disabledCheckedState };
    },
    template: `
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-2">
          <Checkbox v-model="uncheckedState" id="checkbox-unchecked" />
          <Label for="checkbox-unchecked">Unchecked</Label>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox v-model="checkedState" id="checkbox-checked" />
          <Label for="checkbox-checked">Checked</Label>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox v-model="disabledState" id="checkbox-disabled" disabled />
          <Label for="checkbox-disabled" class="opacity-50">Disabled</Label>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox v-model="disabledCheckedState" id="checkbox-disabled-checked" disabled />
          <Label for="checkbox-disabled-checked" class="opacity-50">Disabled Checked</Label>
        </div>
      </div>
    `
  })
};

export const FormGroup: Story = {
  render: () => ({
    components: { Checkbox, Label },
    setup() {
      const items = ref([false, false, false]);
      const allChecked = computed(() => items.value.every(Boolean));
      const isIndeterminate = computed(() => items.value.some(Boolean) && !allChecked.value);

      function toggleAll(checked: boolean) {
        items.value = items.value.map(() => checked);
      }

      return { items, allChecked, isIndeterminate, toggleAll };
    },
    template: `
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-2 pb-2 border-b border-default">
          <Checkbox
            v-model="allChecked"
            :indeterminate="isIndeterminate"
            @update:model-value="toggleAll"
            id="checkbox-select-all"
          />
          <Label for="checkbox-select-all">Select All</Label>
        </div>
        <div class="flex flex-col gap-2 pl-6">
          <div v-for="(_, i) in items" :key="i" class="flex items-center gap-2">
            <Checkbox v-model="items[i]" :id="'checkbox-item-' + (i + 1)" />
            <Label :for="'checkbox-item-' + (i + 1)">Item {{ i + 1 }}</Label>
          </div>
        </div>
      </div>
    `
  })
};

export const WithDescription: Story = {
  render: () => ({
    components: { Checkbox, Label },
    setup() {
      const termsAccepted = ref(false);
      return { termsAccepted };
    },
    template: `
      <div class="flex gap-2">
        <Checkbox v-model="termsAccepted" id="checkbox-terms" />
        <div class="grid gap-1">
          <Label for="checkbox-terms">Accept terms and conditions</Label>
          <p class="text-secondary">
            You agree to our Terms of Service and Privacy Policy by checking this box.
          </p>
        </div>
      </div>
    `
  })
};
