<script lang="ts" setup>
import { QOptionGroupProps } from 'quasar';
import { ref } from 'vue';

defineOptions({
  name: 'BaseOptionGroup',
});

const props = defineProps<{
  options: QOptionGroupProps['options'];
  inline?: boolean;
  type?: 'checkbox' | 'toggle' | 'radio';
  leftLabel?: boolean;
  disable?: boolean;
  name?: string;
}>();
const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: QOptionGroupProps['modelValue']): void;
}>();

const optionGroup = defineModel<QOptionGroupProps>('modelValue');

const errorState = ref();

const isSelected = (option: unknown): boolean => {
  if (Array.isArray(optionGroup.value)) return optionGroup.value.includes(option);

  return optionGroup.value === option;
};
</script>

<template>
  <div data-test-id="base-option-group" class="BaseOptionGroup">
    <q-option-group
      v-model="optionGroup"
      :disable="disable"
      :inline="inline"
      :left-label="leftLabel"
      :options="options"
      :type="type"
      class="ml-0 flex-wrap"
      :class="{ 'rounded border border-sanatorium-error px-2 py-1': errorState }"
      dense
    >
      <template #label="opt">
        <slot name="label" :opt="opt" />

        <div v-if="!$slots.label" :class="isSelected(opt.value) ? 'text-sanatorium-primary' : 'text-[#212121]'">
          {{ opt.label }}
        </div>
      </template>
    </q-option-group>
  </div>
</template>

<style lang="scss">
.BaseOptionGroup {
  .q-option-group {
    display: flex;
    gap: 8px;
    flex-direction: column;
  }

  .q-option-group--inline {
    flex-direction: row;
  }

  .inline {
    display: inline-flex !important;
  }

  .q-radio__bg {
    color: var(--primary) !important;
  }

  .q-option-group {
    display: flex;
    column-gap: 8px;
    div {
      margin-left: 0;
    }
  }

  .q-radio__inner {
    font-size: 32px !important;
  }

  .q-radio__label {
    padding-left: 8px;
    font-size: 14px;
  }

  .q-checkbox {
    display: inline-flex !important;
  }

  .q-checkbox__bg,
  .q-checkbox__inner--indet .q-checkbox__bg {
    background: white !important;
    border: 1px solid var(--border) !important;
  }

  .q-checkbox__inner--truthy .q-checkbox__bg,
  .q-checkbox__inner--indet .q-checkbox__bg {
    border-color: var(--primary) !important;
  }

  .q-checkbox__truthy {
    color: var(--primary) !important;
  }

  .fit {
    width: 82% !important;
    height: 71% !important;
  }

  .absolute-full,
  .fullscreen,
  .fixed-full {
    top: 2.3px;
    right: 0;
    bottom: 0;
    left: 1px;
  }
}
</style>
