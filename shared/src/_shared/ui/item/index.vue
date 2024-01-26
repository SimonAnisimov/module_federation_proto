<template>
  <q-item data-test-id="base-item" class="BaseItem" v-bind="$attrs">
    <slot />
  </q-item>
</template>

<style lang="scss">
.q-item {
  min-height: 32px !important;
}
</style>
