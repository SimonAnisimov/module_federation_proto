<template>
  <div style="padding: 10px;">
    accounting
    <br>
    <BaseButton color="primary" @click="alertFeatures">LogusButton1</BaseButton>

    <hr>

    <br>

    <div>
      <AccountTable :rows="state.list" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { BaseButton } from 'shared/ui';
import { alertFeatures } from '@features/alert';
import { useAccountModel } from './model';
import { AccountTable } from '@entities/account-table';

const { state, getSearchList } = useAccountModel();

getSearchList();
</script>