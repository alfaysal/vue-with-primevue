<template>
  <div class="flex bg-surface-0 dark:bg-surface-800">
    <Sidebar :isCollapsed="isSidebarCollapsed" />
    <div class="flex-grow">
      <Navbar></Navbar>
      <div class="my-2 p-4">
        <slot name="content-header"></slot>
      </div>
      <div class="rounded-sm p-4">
        <slot name="content-body"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Sidebar from "@/components/common/sidebar.vue";
import Navbar from "@/components/common/Navbar.vue";

const isSidebarCollapsed = ref(false);
</script>

<style lang="scss" scoped>

</style>