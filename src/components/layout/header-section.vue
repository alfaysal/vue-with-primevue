<template>
  <Card
      pt:root:class="flex flex-col rounded-md shadow-md bg-surface-0 dark:bg-surface-900 text-surface-700 dark:text-surface-0"
      pt:body="p-3"
  >
    <template #content>
      <slot></slot>
    </template>
  </Card>
</template>

<script setup>
import Card from 'primevue/card';

import { useLayoutStore } from '@/stores/layout.js'
const store = useLayoutStore();

</script>
