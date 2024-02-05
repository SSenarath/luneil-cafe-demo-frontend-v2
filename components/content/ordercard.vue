<template>
    <div
      class="border bg-luneil-orange bg-opacity-50 rounded-lg flex p-4 w-1/3 flex-col gap-2"
    >
      <p><span class="font-bold">Name:</span> {{ props.item.name }}</p>
      <p><span class="font-bold">Date:</span> {{ props.item.date }}</p>
      <p><span class="font-bold">Time:</span> {{ props.item.time }}</p>
      <p><span class="font-bold">Order Details:</span></p>
      <ul class="list-disc ml-4">
        <li v-for="each in props.item.order">{{each.quantity}} {{each.option}} {{each.type}}</li>
      </ul>
    </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

onMounted(() => {
  console.log(props.item)
})
</script>
