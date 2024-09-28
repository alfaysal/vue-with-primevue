import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout', () => {
  const sidebarIsExpanded = ref(true);
  const toggleSidebar = () => { sidebarIsExpanded.value = !sidebarIsExpanded.value;}

  return { sidebarIsExpanded, toggleSidebar }
})
