<script lang="ts" setup>
defineOptions({
  name: 'BaseHeader',
});
</script>

<template>
  <q-header data-test-id="base-header">
    <slot />
  </q-header>
</template>
