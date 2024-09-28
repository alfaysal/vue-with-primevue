
<template>
  <div class="card text-sm">
    <h2>from processing</h2>
    <DataTable :value="customers" paginator :rows="5" size="Normal" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem">
      <Column field="consignment_id" header="Name"></Column>
      <Column field="quantity" header="Country"></Column>
      <Column field="company" header="Company"></Column>
      <Column field="recipient_address" header="Representative"></Column>
      <Column field="invoice_id" header="Name"></Column>
    </DataTable>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const onMountedRef = onMounted(() => {
  console.log("call from processing order");
})

const customers = ref([
  {
    consignment_id: "amnjaakjnak",
    quantity: 12,
    company: 'fabrilife',
    recipient_address: "jashore chaugahcha",
    invoice_id: "9u8u8u8",
  }
]);

</script>
