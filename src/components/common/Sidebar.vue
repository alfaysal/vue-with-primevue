<template>
  <div class="flex w-full min-h-screen">
    <div class="w-full">
     <div class="h-16 relative flex justify-center items-center bg-surface-0 dark:bg-surface-900">
       <div class="flex items-center justify-center">
         <span class="pi pi-prime text-center text-4xl"></span>
       </div>
       <div class="bg-white rounded-full absolute -right-4 z-50 cursor-pointer ">
        <span class="pi pi-angle-left text-2xl w-8" @click="store.toggleSidebar()" v-if="store.sidebarIsExpanded"></span>
        <span class="pi pi-angle-right text-2xl w-8" @click="store.toggleSidebar()" v-else></span>
       </div>
     </div>

      <PanelMenu
          :model="items"
          pt:panel="border-surface-200 dark:border-surface-700 text-sm w-20 text-center"
          pt:headerContent="bg-surface-0 dark:bg-surface-900 rounded-md"
      >
        <template #item="{ item }">
          <div @click="changeStyle(item)" :class="selected === item.label ? 'bg-gray-100 text-primary': ''">
            <a :href="item.url" :target="item.target">
              <span :class="`${item.icon} text-2xl p-3`"/>
            </a>
          </div>
        </template>
      </PanelMenu>
    </div>
  </div>

</template>

<script setup>
import TieredMenu from 'primevue/tieredmenu';
import PanelMenu from 'primevue/panelmenu';
import { useLayoutStore } from '@/stores/layout.js'
const store = useLayoutStore();

import { useRouter } from 'vue-router';
import {reactive, ref} from "vue";
const router = useRouter();

const items = reactive([
  {
    label: 'Order',
    icon: 'pi pi-palette',
    items: [
      {
        label: 'List',
        icon: 'pi pi-list',
        command: () => {
          router.push('/orders');
        }
      },
    ]
  },
  {
    label: 'Inventory',
    icon: 'pi pi-home',
    command: () => {
      router.push('/inventory');
    }
  },
  {
    label: 'Customer',
    icon: 'pi pi-user',
    items: [
      {
        label: 'Vue.js',
        url: 'https://vuejs.org/'
      },
      {
        label: 'Vite.js',
        url: 'https://vuejs.org/'
      }
    ]
  }
]);
const myDiv = ref(null);
const selected = ref('Order')

const changeStyle = (item) => {
  selected.value = item.label;
}

</script>

<style scoped>

</style>