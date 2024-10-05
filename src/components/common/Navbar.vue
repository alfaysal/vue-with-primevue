
<template>
  <div class="card">
    <div class="bg-surface-100 dark:bg-surface-900 h-16 grid grid-cols-12 gap-2">
      <div class="col-span-4 flex justify-center items-center tracking-wide">
        <h4 class="text-surface-700 dark:text-surface-0 uppercase text-xl">Business Suite</h4>
      </div>
      <div class="col-span-6">

      </div>
      <div class="col-span-2 flex justify-center items-center gap-4">
        <div>
          <Notification />
        </div>

        <div>
          <span class="font-bold text-xl" @click="toggleDark()">
            <i class="pi pi-sun text-surface-700 dark:text-surface-0"></i>
          </span>
        </div>
        <div>
          <Avatar @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
          <Menu ref="menu" id="overlay_menu" :model="profileItems" :popup="true">
            <template #item="{ item, props }">
              <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                <a :href="href" v-bind="props.action" @click="navigate">
                  <span :class="item.icon" />
                  <span class="ml-2">{{ item.label }}</span>
                </a>
              </router-link>
              <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                <span :class="item.icon" />
                <span class="ml-2">{{ item.label }}</span>
              </a>
            </template>
          </Menu>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Avatar from "primevue/avatar";
import Menu from "primevue/menu";
import ScrollPanel from "primevue/scrollpanel";
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark);
import { ref } from "vue";
import Notification from "@/components/common/Notification.vue";

console.log('here', isDark.value);
const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home'
  },
  {
    label: 'Features',
    icon: 'pi pi-star'
  },
  {
    label: 'Projects',
    icon: 'pi pi-search',
    items: [
      {
        label: 'Core',
        icon: 'pi pi-bolt',
        shortcut: '⌘+S'
      },
      {
        label: 'Blocks',
        icon: 'pi pi-server',
        shortcut: '⌘+B'
      },
      {
        label: 'UI Kit',
        icon: 'pi pi-pencil',
        shortcut: '⌘+U'
      },
      {
        separator: true
      },
      {
        label: 'Templates',
        icon: 'pi pi-palette',
        items: [
          {
            label: 'Apollo',
            icon: 'pi pi-palette',
            badge: 2
          },
          {
            label: 'Ultima',
            icon: 'pi pi-palette',
            badge: 3
          }
        ]
      }
    ]
  },
  {
    label: 'Contact',
    icon: 'pi pi-envelope',
    badge: 3
  }
]);
const menu = ref();
const scrollPanel = ref();
const profileItems = ref([
  {
    label: 'Profile',
    icon: 'pi pi-palette',
    route: '/orders'
  },
  {
    label: 'Programmatic',
    icon: 'pi pi-link',
    command: () => {
      router.push('/introduction');
    }
  },
  {
    label: 'External',
    icon: 'pi pi-home',
    url: 'https://vuejs.org/'
  }
]);

const toggle = (event) => {
  menu.value.toggle(event);
};

const toggle2 = (event) => {
  scrollPanel.value.toggle(event)
}

</script>
