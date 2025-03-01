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
        <div
            @click="item.items && toggleSubMenu(item.label)"
            class="flex items-center p-3 cursor-pointer rounded-lg transition-colors"
            :class="mainMenuClass(item)"
        >
          <i :class="[isCollapsed ? 'text-2xl' : '', item.icon]"></i>
          <span v-if="!isCollapsed" class="ml-4">{{ item.label }}</span>
          <i v-if="item.items && !isCollapsed" class="ml-auto pi pi-chevron-down"></i>
        </div>

        <!-- Nested Submenu -->
        <ul v-if="item.items && isSubMenuOpen(item.label) && !isCollapsed" class="pl-6 space-y-1">
          <li v-for="(subItem, subIndex) in item.items" :key="subIndex">
            <router-link
                :to="subItem.route"
                class="flex items-center p-2 rounded-md transition-colors"
                :class="subMenuClass(subItem)"
            >
              <i :class="subItem.icon"></i>
              <span v-if="!isCollapsed" class="ml-4">{{ subItem.label }}</span>
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const isCollapsed = ref(false);
    const openSubMenus = ref([]);
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
        items: [
          {
            label: 'All Orders',
            icon: 'pi pi-fw pi-user',
            route: '/orders',
          },
          {
            label: 'Account',
            icon: 'pi pi-fw pi-user-edit',
            route: '/settings/account',
          },
        ],
      },
      {
        label: 'Inventory',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Dashboard',
            icon: 'pi pi-fw pi-file-pdf',
            route: '/inventory',
          },
          {
            label: 'Reports',
            icon: 'pi pi-fw pi-chart-line',
            route: '/documents/reports',
          },
        ],
      },
    ];

    const toggleSidebar = () => {
      isCollapsed.value = !isCollapsed.value;
    };

    const toggleSubMenu = (label) => {
      if (openSubMenus.value.includes(label)) {
        openSubMenus.value = openSubMenus.value.filter(item => item !== label);
      } else {
        openSubMenus.value.push(label);
      }
    };

    const isSubMenuOpen = (label) => {
      return openSubMenus.value.includes(label) || isAnySubItemActive(label);
    };

    const isAnySubItemActive = (label) => {
      const menuItem = menuItems.find(item => item.label === label);
      return menuItem?.items?.some(subItem => subItem.route === route.path) || false;
    };

    const isRouteActive = (path) => {
      return route.path === path;
    };

    const mainMenuClass = (item) => {
      const isMenuSelected = isRouteActive(item.route) || isAnySubItemActive(item.label);
      return [
        isMenuSelected ? 'text-primary' : 'hover:bg-surface-100 dark:hover:bg-surface-900',
        isMenuSelected && isCollapsed.value ? 'bg-primary-500 text-white' : '',
        isCollapsed.value ? 'justify-center' : ''
      ];
    };

    const subMenuClass = (subItem) => {
      return [
        isRouteActive(subItem.route) ? 'text-primary' : 'hover:bg-surface-200 dark:hover:bg-surface-800',
        isCollapsed.value ? 'justify-center' : ''
      ];
    };

    return {
      isCollapsed,
      menuItems,
      toggleSidebar,
      toggleSubMenu,
      isSubMenuOpen,
      isRouteActive,
      mainMenuClass,
      subMenuClass
    };
  },
};
</script>

<style scoped>
</style>
