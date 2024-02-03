<template>
  <div
    class="bg-luneil-orange bg-opacity-50 rounded-lg p-2 cursor-pointer"
    @click="navigateTo(`${props.url}`)"
  >
    <img :src="props.image" class="rounded-lg h-48 w-48" />
    <p class="text-center font-bold mt-2 bg-black bg-opacity-40 rounded-lg">
      {{ props.name }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
})
</script>
