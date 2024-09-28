<template>
<!--  <div class="card">-->
    <Tabs value="0" v-model:value="selectedTab">
      <TabList>
        <Tab v-for="tab in tabs" :key="tab.title" :value="tab.value" @click="handleClick" class="text-sm break-after-all">
          {{ tab.title }}
          <Badge :value="tab.count" severity="info" class="text-surface-100 dark:text-surface-900"></Badge>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel :value="selectedTab">
          <component :is="selectedComponent"></component>
        </TabPanel>
      </TabPanels>
    </Tabs>
<!--  </div>-->
</template>

<script setup>
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import Badge from 'primevue/badge';

import PendingOrderList from "@/components/order/PendingOrderList.vue";
import ProcessingOrderList from "@/components/order/ProcessingOrderList.vue";
import {onMounted, ref, shallowRef} from "vue";

const selectedTab = ref('0');
const selectedComponent = shallowRef(PendingOrderList);

const handleClick = () => {
  selectedComponent.value = tabs.value[selectedTab.value].component;
}

const tabs = ref([
  {
    title: 'Pending Order',
    content: 'Pending Order data ',
    value: '0',
    count: 100,
    component: shallowRef(PendingOrderList)
  },
  {
    title: 'Processing Order',
    content: 'Processing Order data ',
    value: '1',
    count: 12,
    component: shallowRef(ProcessingOrderList)
  }
]);
</script>
