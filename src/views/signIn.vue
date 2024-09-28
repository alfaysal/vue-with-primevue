<template>
  <div class="flex justify-center items-center w-full h-screen">
    <Card class="w-96">
      <template #title>
        <h2 class="text-center">Sign In</h2>
      </template>
<!--      <template #subtitle>Card subtitle</template>-->
      <template #content>
        <div class="flex flex-col gap-2">
          <div class="flex flex-col">
            <label for="username">Username</label>
            <InputText id="username" v-model="value" aria-describedby="username-help" />
<!--            <small id="username-help" class="text-red-700">Enter your username to reset your password.</small>-->
          </div>

          <div class="flex flex-col mt-2">
            <label for="username">Password</label>
            <InputText id="username" v-model="value" aria-describedby="username-help" />
<!--            <small id="username-help" class="text-red-700">Enter your username to reset your password.</small>-->
          </div>
        </div>
      </template>
      <template #footer>
        <div class="flex gap-4 mt-1">
<!--          <Button label="Cancel" severity="secondary" outlined class="w-full" />-->
          <Button label="Save" class="w-full" />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import Card from "primevue/card";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
</script>
