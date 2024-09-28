<script setup>
import Layout from "@/components/layout/layout.vue";
import HeaderSection from "@/components/layout/header-section.vue";
import Button from "primevue/button";
import OrderContent from "@/components/order/list.vue";
</script>

<template>
  <Layout>
    <template #content-header>
      <HeaderSection>
        <template #content>
          <div class="flex justify-between items-center">
            <div>
              <h2>Order List</h2>
            </div>

            <div>
              <Button severity="info">Click here</Button>
            </div>
          </div>
        </template>
      </HeaderSection>
    </template>
    <template #content-body>
      <OrderContent />
    </template>
  </Layout>
</template>

<style scoped>

</style>