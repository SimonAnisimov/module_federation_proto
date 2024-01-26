<script lang="ts" setup>
defineOptions({
  name: 'BaseLayout',
});

defineProps<{
  view: string;
}>();
</script>

<template>
  <div data-test-id="base-layout" class="BaseLayout">
    <q-layout :view="view">
      <slot />
    </q-layout>
  </div>
</template>
