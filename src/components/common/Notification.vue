<template>
  <div class="relative">
    <span  @click="toggleNotification">
      <i class="pi pi-bell text-xl text-surface-700 dark:text-surface-0">
      </i>
    </span>

    <div
        v-if="showNotificationSection"
         class="absolute top-12 right-0 bg-surface-100 dark:bg-surface-900 shadow-lg rounded-lg w-80 p-2 z-50"
    >
      <div class="flex justify-between items-center mb-3">
        <h3 class="text-surface-700 dark:text-surface-0 font-semibold self-end">Notifications</h3>
        <Button icon="pi pi-times" class="p-button-rounded p-button-text" @click="toggleNotification" />
      </div>
      <div class="max-h-52 overflow-y-auto text-xs">
        <div v-if="notifications.length">
          <div v-for="(notification, index) in notifications" :key="index" class="mb-2">
            <Card
                pt:body="p-3"
                class="text-xs"
            >
              <template #content>
                <div class="">
                  <p class="text-sm">{{ notification.message }}</p>
                </div>
              </template>
            </Card>
          </div>
        </div>
        <p v-else class="text-gray-500">No notifications available</p>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue';
import Card from 'primevue/card';
import Button from 'primevue/button';

export default {
  components: {
    Card,
    Button,
  },
  setup() {
    const notifications = ref([
      {title: 'Success', message: 'Your action was successful!'},
      {title: 'Warning', message: 'This is a warning notification.'},
      {title: 'Info', message: 'Here is some information.'},
      {title: 'Error', message: 'There was an error processing your request.'},
      {title: 'Update', message: 'Your profile has been updated.'},
      // Add more notifications to test scrolling
    ]);
    const showNotificationSection = ref(false);

    const toggleNotification = () => {
      showNotificationSection.value = !showNotificationSection.value;
    };

    const dismissNotification = (index) => {
      notifications.value.splice(index, 1);
    };

    return {
      notifications,
      showNotificationSection,
      toggleNotification,
      dismissNotification,
    };
  },
};
</script>

<style scoped>
</style>
