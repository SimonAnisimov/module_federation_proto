<template>
  <BaseLayout view="hHh lpR fFf">
    <BaseHeader>
      <q-toolbar
        ref="baseHeader"
        class="flex-visible flex h-[50px] flex-nowrap items-center border-0 border-b border-solid border-sanatorium-gray-lightness bg-white px-6 text-black"
      >
        <Logo />

        <BaseItem 
          v-for="(module, i) in mockModules"
          :key="i"
          :to="{ name: module.routerName }"
        >
          {{ module.name }}
        </BaseItem>
      </q-toolbar>
    </BaseHeader>

    <q-page-container class="overflow-hidden">
      <router-view />
    </q-page-container>
  </BaseLayout>
</template>

<script lang="ts" setup>
import { BaseLayout, BaseHeader, BaseItem} from 'shared/ui';
import { Logo } from './ui';

const mockModules = [
  {
    name: 'Касса',
    routerName: 'accounting',
  },
  {
    name: 'Размещение',
    routerName: 'reserve',
  }
] 
</script>