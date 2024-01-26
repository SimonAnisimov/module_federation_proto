<script lang="ts" setup>
import { QTable, QTableProps } from 'quasar';
import { computed, ref } from 'vue';
import { localStorageLib } from '@shared/lib';

defineOptions({
  name: 'BaseTable',
});

const componentProps = defineProps<{
  rows?: QTableProps['rows'];
  columns: QTableProps['columns'];
  rowKey?: QTableProps['rowKey'];
  title?: string;
  noDataLabel?: string;
  selection?: 'multiple' | 'single' | 'none';
  noHover?: boolean;
  tableClass?: string;
  tableStyle?: string;
  tableIsScrolled?: boolean;
  tableHeaderStyle?: string;
  selectedRowsLabel?: (numberOfRow: number) => string;
  visibleColumns?: string[];
  selected?: QTableProps['selected'];
  expanded?: QTableProps['expanded'];
  columnsFilter?: boolean;
  tableName?: string;
  loadingMoreItems?: boolean;
}>();
const emit = defineEmits<{
  (e: 'update:selected', selected: QTableProps['selected']): void;
  (e: 'update:expanded', expanded: QTableProps['expanded']): void;
  (e: 'update:visibleColumns', newVal: string[]): void;
  (e: 'load-on-scroll', done: (stop?: boolean) => void): void;
}>();

const useSelected = (newSelected: Readonly<QTableProps['selected']>) => {
  emit('update:selected', newSelected as QTableProps['selected']);
};

const selected = defineModel<QTableProps['expanded']>('selected');
const expanded = defineModel<QTableProps['selected']>('expanded');
const table = ref<QTable>();

const availableColumns = computed(() =>
  componentProps.columns
    .filter((column) => column.label)
    .map((column) => ({
      label: column.label,
      value: column.name,
    }))
);

const getVisibleColumns = localStorageLib.getByKey(componentProps.tableName)?.visibleColumns;

const visibleColumnsModel = ref(getVisibleColumns || componentProps.columns.map((item) => item.name));
const updateVisibleColumns = (newVal: string[]) => {
  visibleColumnsModel.value = newVal;

  const payload = {
    visibleColumns: newVal,
  };

  if (componentProps.tableName) localStorageLib.setByKey(componentProps.tableName, payload);

  emit('update:visibleColumns', newVal);
};

defineExpose({ table }); // write table methods

const canLoadMore = ref(true);

const tableScrollEl = computed(() => table.value?.$el.querySelector('.q-table__middle'));
const onScroll = () => {
  if (!canLoadMore.value) return;

  if (tableScrollEl.value.scrollHeight === tableScrollEl.value.clientHeight) return;

  if (tableScrollEl.value.scrollTop >= tableScrollEl.value.scrollHeight - tableScrollEl.value.clientHeight - 40) {
    canLoadMore.value = false;

    emit('load-on-scroll', () => {
      canLoadMore.value = true;
    });
  }
};
</script>

<template>
  <div data-test-id="base-table" class="BaseTable">
    <q-scroll-observer :debounce="100" :scroll-target="tableScrollEl" @scroll="onScroll" />

    <q-table
      ref="table"
      v-model:selected="selected"
      v-model:expanded="expanded"
      :class="[
        { 'no-hover': componentProps.noHover },
        componentProps.tableClass,
        { 'table-is-scrolled': componentProps.tableIsScrolled },
        { 'has-filter': componentProps.columnsFilter },
      ]"
      :columns="componentProps.columns"
      :no-data-label="noDataLabel"
      :row-key="componentProps.rowKey"
      :rows="componentProps.rows"
      :rows-per-page-options="[0]"
      :selected-rows-label="selectedRowsLabel"
      :selection="componentProps.selection"
      :style="componentProps.tableStyle"
      :table-header-style="componentProps.tableHeaderStyle"
      :title="componentProps.title"
      class="bg-transparent"
      flat
      hide-pagination
      :visible-columns="componentProps.visibleColumns || visibleColumnsModel"
      @update:selected="useSelected"
    >
      <template v-if="$slots['header-selection']" #header-selection="headerPros">
        <slot :props="headerPros" name="header-selection" />
      </template>

      <template v-if="$slots['body-selection']" #body-selection="scope">
        <slot :props="scope" name="body-selection" />
      </template>

      <template v-if="$slots.body" #body="props">
        <slot :props="props" name="body" />
      </template>

      <template #no-data="{ message }">
        <div class="full-width row flex-center text-grey-8 q-gutter-sm">
          <span>
            {{ message }}
          </span>
        </div>
      </template>
    </q-table>
  </div>
</template>

<style lang="scss">
$rowHeight: 40px;
.table-is-scrolled {
  position: absolute !important;
  height: 100% !important;
  width: 100% !important;

  .q-table__container {
    height: 100%;
  }

  thead tr th {
    position: sticky;
    z-index: 20;
    top: 0;
    background: white;
    font-size: 14px;
  }
}

.BaseTable {
  position: relative;
  .q-table__middle::-webkit-scrollbar {
    width: 10px;
    height: 6px;
  }

  /* Handle */
  .q-table__middle::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 5px;
    margin-top: 40px;
  }

  /* Handle on hover */
  .q-table__middle::-webkit-scrollbar-thumb:hover {
    background: var(--primary-darkness);
  }

  .q-table {
    tr,
    td {
      min-height: $rowHeight;
      height: $rowHeight;
      margin: 0;
      padding: 5px 16px;
      font-size: 14px;
    }
  }

  .no-hover {
    tr:hover {
      td:before {
        display: none;
      }
    }
  }

  .q-table__bottom {
    display: none;
  }
  .selected-row {
    background: var(--background);
  }
  .has-filter {
    tr {
      th:last-child {
        padding-right: 30px;
      }
      td:last-child {
        padding-right: 30px;
      }
    }
  }
}
</style>
