<template>
  <div style="padding: 10px;">
    registration
    
    {{ date }}
  </div>
</template>

<script lang="ts" setup>
import { dateLib } from 'shared/lib/dateLib';

const date = dateLib.format(new Date, 'dd.MM.yyyy');
</script>