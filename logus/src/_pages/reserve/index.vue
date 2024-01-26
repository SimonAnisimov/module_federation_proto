<template>
  <div style="padding: 10px;">
    reserve
    <br>
    <BaseButton color="secondary" @click="alertFeatures">SharedAlert</BaseButton>
  </div>
</template>

<script lang="ts" setup>
import { BaseButton } from 'shared/ui';
import { alertFeatures } from 'shared/features/alert';
</script>