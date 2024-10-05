<template>
  <div :class="['flex flex-col h-screen', isCollapsed ? 'w-20' : 'w-64']" class="bg-surface-100 dark:bg-surface-900 text-surface-700 dark:text-surface-300 transition-all duration-300">
    <!-- Toggle Sidebar Button -->
    <button
        @click="toggleSidebar"
        class="p-3 self-end text-white hover:bg-gray-700"
    >
      <i class="pi text-primary" :class="isCollapsed ? 'pi-chevron-right' : 'pi-chevron-left'"></i>
    </button>

    <!-- Menu List -->
    <ul class="space-y-2 mt-2">
      <li v-for="(item, index) in menuItems" :key="index" class="relative group">
        <!-- Main Menu Item -->
        <router-link
            :to="item.route"
            class="flex items-center p-3 cursor-pointer rounded-lg transition-colors"
            :class="mainMenuClass(item)"
        >
          <i :class="[isCollapsed ? 'text-2xl' : '', item.icon]"></i>
          <span v-if="!isCollapsed" class="ml-4">{{ item.label }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const isCollapsed = ref(false);
    const route = useRoute();

    const menuItems = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        route: '/home',
      },
      {
        label: 'Orders',
        icon: 'pi pi-fw pi-cog',
        route: '/orders',
      },
      {
        label: 'Inventory',
        icon: 'pi pi-fw pi-file',
        route: '/inventory',
      },
    ];

    const toggleSidebar = () => {
      isCollapsed.value = !isCollapsed.value;
    };

    const isRouteActive = (path) => {
      return route.path === path;
    };

    const mainMenuClass = (item) => {
      return [
        isRouteActive(item.route) ? 'text-primary' : 'hover:bg-surface-100 dark:hover:bg-surface-900',
        isCollapsed.value ? 'justify-center' : ''
      ];
    };

    return {
      isCollapsed,
      menuItems,
      toggleSidebar,
      mainMenuClass,
    };
  },
};
</script>

<style scoped>
</style>
