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
          pt:panel="border-surface-200 dark:border-surface-700 text-sm"
      >
        <template #item="{ item }">
          <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
            <a class="flex items-center cursor-pointer text-surface-700 dark:text-surface-0 px-4 py-2" :href="href" @click="navigate">
              <span :class="`${item.icon} text-sm`" />
              <span class="ml-2" v-if="store.sidebarIsExpanded">{{ item.label }}</span>
            </a>
          </router-link>
          <a v-else :class="[store.sidebarIsExpanded ? '' : 'left-4', 'flex items-center cursor-pointer text-surface-700 dark:text-surface-0 px-4 py-2']" :href="item.url" :target="item.target">
            <span :class="`${item.icon} text-xl`" />
            <span class="ml-2" v-if="store.sidebarIsExpanded">{{ item.label }}</span>
            <span v-if="item.items" class="pi pi-angle-down text-primary ml-auto" />
          </a>
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
import {ref} from "vue";
const router = useRouter();

const items = ref([
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

</script>

<style lang="scss" scoped>

</style>