<script lang="ts" setup>
import { computed, isVNode } from 'vue';
import { BaseTable, BaseTableProps } from 'shared/ui';
import { AccountInfoModel } from '@shared/types';

defineOptions({
  name: 'CreateDiagnosisEditableTable',
});

console.log(BaseTable)

const rows = defineModel<AccountInfoModel[]>('rows');

const columns = computed(() => [
  {
    label: 'Имя',
    field: 'name',
    name: 'name',
    align: 'left',
    headerClasses: 'text-[12px]',
  },
  {
    label: 'Баланс',
    field: 'Balance',
    name: 'Balance',
    align: 'left',
    headerClasses: 'text-[12px]',
  },
]);
</script>

<template>
  <BaseTable :columns="columns" :rows="rows" class="CreateDiagnosisEditableTable" no-hover>
    <template #body="{ props }">
      <q-tr :props="props">
        <q-td key="name" :props="props" auto-width>
          {{ props.row.name }}
        </q-td>

        <q-td key="name" :props="props" auto-width>
          {{ props.row.balance.balance }}
        </q-td>
      </q-tr>
    </template>
  </BaseTable>
</template>
