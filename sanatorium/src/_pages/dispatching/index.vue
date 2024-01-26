<template>
  <div style="padding: 10px;">
    dispatching
    <br>
    <BaseButton color="warning" @click="alertFeatures">SanatoriumAlertFromShared</BaseButton>
  </div>
</template>

<script lang="ts" setup>
import { BaseButton } from 'shared/ui';
import { alertFeatures } from 'shared/features';
</script>