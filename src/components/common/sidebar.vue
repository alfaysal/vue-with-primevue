<!-- src/components/Sidebar-old.vue -->
<template>
  <div :class="['flex flex-col h-screen', isCollapsed ? 'w-20' : 'w-64']" class="bg-gray-800 text-gray-200 transition-all duration-300">
    <!-- Toggle Sidebar Button -->
    <button
        @click="toggleSidebar"
        class="p-3 self-end text-white hover:bg-gray-700"
    >
      <i class="pi" :class="isCollapsed ? 'pi-chevron-right' : 'pi-chevron-left'"></i>
    </button>

    <!-- Menu List -->
    <ul class="space-y-2 mt-4">
      <li v-for="(item, index) in menuItems" :key="index" class="relative group">
        <!-- Main Menu Item -->
        <div
            @click="item.items && toggleSubMenu(item.label)"
            class="flex items-center p-3 cursor-pointer hover:bg-gray-700 rounded-lg transition-colors"
            :class="`${isCollapsed ? 'justify-center' : ''}`"
        >
          <i :class="[isCollapsed ? 'text-2xl' : '', item.icon]"></i>
          <span v-if="!isCollapsed" class="ml-4">{{ item.label }}</span>
          <i v-if="item.items && !isCollapsed" class="ml-auto pi pi-chevron-down"></i>
        </div>

        <!-- Nested Submenu -->
        <ul v-if="item.items && isSubMenuOpen(item.label)" class="pl-6 space-y-1">
          <li
              v-for="(subItem, subIndex) in item.items"
              :key="subIndex"
          >
            <router-link
                :to="subItem.route"
                class="flex items-center p-2 hover:bg-gray-700 rounded-md transition-colors"
                :class="[isCollapsed ? 'justify-center' : '', isRouteActive(subItem.route) ? 'bg-gray-600 text-primary' : '']"
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
import { ref } from 'vue';
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
            label: 'All Order',
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
      if (menuItem && menuItem.items) {
        return menuItem.items.some(subItem => subItem.route === route.path);
      }
      return false;
    };

    const isRouteActive = (path) => {
      return route.path === path;
    };

    return { isCollapsed, menuItems, toggleSidebar, toggleSubMenu, isSubMenuOpen, isRouteActive };
  },
};
</script>
