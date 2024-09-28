<template>
  <div>
    <Button label="Create" @click="visible = true" />
    <Dialog v-model:visible="visible" modal header="Create Order" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
      <div class="grid grid-cols-6 gap-2">
        <div class="col-span-3">
          <div class="flex flex-col">
            <label for="username">Product</label>
            <InputText id="username" v-model="value" aria-describedby="username-help" />
            <!--            <small id="username-help" class="text-red-700">Enter your username to reset your password.</small>-->
          </div>
        </div>

        <div class="col-span-3">
          <div class="flex flex-col">
            <label for="username">Phone</label>
            <InputText id="username" v-model="value" aria-describedby="username-help" />
            <!--            <small id="username-help" class="text-red-700">Enter your username to reset your password.</small>-->
          </div>
        </div>

        <div class="col-span-3">
          <div class="flex flex-col">
            <label for="username">Name</label>
            <InputText id="username" v-model="value" aria-describedby="username-help" />
            <!--            <small id="username-help" class="text-red-700">Enter your username to reset your password.</small>-->
          </div>
        </div>

        <div class="col-span-3">
          <div class="flex flex-col">
            <label for="username">City</label>
            <InputText id="username" v-model="value" aria-describedby="username-help" />
            <!--            <small id="username-help" class="text-red-700">Enter your username to reset your password.</small>-->
          </div>
        </div>

        <div class="col-span-3">
          <div class="flex flex-col">
            <label for="username">Zone</label>
            <InputText id="username" v-model="value" aria-describedby="username-help" />
            <!--            <small id="username-help" class="text-red-700">Enter your username to reset your password.</small>-->
          </div>
        </div>

        <div class="col-span-3">
          <div class="flex flex-col">
            <label for="username">Area</label>
            <InputText id="username" v-model="value" aria-describedby="username-help" />
            <!--            <small id="username-help" class="text-red-700">Enter your username to reset your password.</small>-->
          </div>
        </div>

        <div class="col-span-6">
          <div class="flex flex-col">
            <label for="username">Address</label>
            <Textarea v-model="value" rows="5" cols="30" />
          </div>
        </div>
      </div>

      <div class="col-span-3 mt-2">
        <Button label="Create" @click="visible = true" />
      </div>

    </Dialog>
  </div>
</template>

<script setup>
import Button from "primevue/button";
import Dialog from "primevue/dialog"
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea"

import {ref} from "vue";
const visible = ref(false);
const value = ref("");

</script>

<style lang="scss" scoped>

</style>