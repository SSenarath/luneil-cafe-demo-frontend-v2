<template>
  <div class="flex  w-full flex-col items-center gap-10 py-10">
    <NuxtLink to="/logorder" class="ml-auto mr-4">
      <el-button >Create New Order</el-button>
    </NuxtLink>
    <p class="text-4xl font-bold text-center w-full">Order History</p>
    <ContentOrdercard v-for="each in orders" :item="each"></ContentOrdercard>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useOrdersStore } from "~/stores/OrderStore";
const orderStore = useOrdersStore();

const orders = computed(() => {
    console.log(orderStore.getOrderedList())
    return orderStore.getOrderedList()
})

</script>
