<template>
  <q-btn
    class="BaseButton"
    data-test-id="base-button"
    :disable="props.disable"
    :label="props.label"
    :color="props.color"
    no-caps
    unelevated
    :ripple="false"
    :loading="loading"
  >
    <slot />
  </q-btn>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'BaseButton',
});

const props = defineProps<{
  color?: 'primary' | 'secondary' | 'link';
  disable?: boolean;
  label?: string;
  loading?: boolean;
}>();
</script>