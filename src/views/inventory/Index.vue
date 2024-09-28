<script setup>
import Layout from "@/components/layout/layout.vue";
import HeaderSection from "@/components/layout/header-section.vue";
import InventoryContent from "@/components/inventory/list.vue";
import Button from "primevue/button";
</script>

<template>
    <Layout>
      <template #content-header>
        <HeaderSection>
          <div class="flex justify-between items-center">
            <div>
              <h2 class="text-2xl">Inventory</h2>
            </div>

            <div>
              <Button severity="info">Click here</Button>
            </div>
          </div>
        </HeaderSection>
      </template>
      <template #content-body>
        <InventoryContent />
      </template>
    </Layout>
</template>

<style scoped>

</style>