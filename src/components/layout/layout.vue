<template>
<!--  <div class="bg-gray-100 h-screen">-->
<!--    <div class="grid grid-cols-12">-->
<!--      <div :class="store.sidebarIsExpanded ? 'col-span-2' : 'col-span-1'">-->
<!--        <Sidebar></Sidebar>-->
<!--      </div>-->
<!--      <div :class="store.sidebarIsExpanded ? 'col-span-10' : 'col-span-11'">-->
<!--        <Navbar></Navbar>-->
<!--        <div class="m-4 bg-white">-->
<!--          <slot name="content-header"></slot>-->
<!--        </div>-->
<!--        <div class="m-4 p-4 rounded-sm bg-white">-->
<!--          <slot name="content-body"></slot>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->

  <div class="bg-gray-100 h-screen">
    <div class="flex">
      <div :class="store.sidebarIsExpanded ? 'w-52' : 'w-16'">
        <Sidebar></Sidebar>
      </div>
      <div class="w-full">
        <Navbar></Navbar>
        <div class="m-4">
          <slot name="content-header"></slot>
        </div>
        <div class="m-4 rounded-sm">
          <slot name="content-body"></slot>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import Navbar from "@/components/common/Navbar.vue";
import Sidebar from "@/components/common/Sidebar.vue";
import OrderList from "@/components/order/list.vue";

import { useLayoutStore } from '@/stores/layout.js'
const store = useLayoutStore();

</script>
