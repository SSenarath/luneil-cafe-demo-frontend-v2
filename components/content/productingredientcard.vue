<template>
    <div
      class="h-3/4 border w-3/5 bg-luneil-orange bg-opacity-50 rounded-lg flex p-4 "
    >
      <img :src="item.image" class="w-1/2 rounded-lg" />
      <div class="ml-4 flex flex-col h-full border border-black p-4 rounded-lg">
        <div class="flex items-center">
            <p class="font-bold mr-2">Options:</p> 
            <el-button v-for="each in item.options" :key="each">{{ each }}</el-button>
        </div>
        <p class="font-bold text-xl my-2">Ingredient List for {{item.baseQuantity}} items</p>
        <ul class="list-disc ml-4 flex flex-col flex-wrap h-3/5">
          <li v-for="each in item.ingredients['Vegetable']"><span>{{ each.amount }}</span> {{ each.ingredient }}</li>
        </ul>
        <div class='mt-auto mb-2'>
          <p>
            If you want to recalculate to recalculate the ingredient quantities
            based on a specific number of items, please enter the number of
            items below and press recalculate
          </p>
          <div class="flex gap-4 mt-4">
            <el-input
              v-model="input"
              placeholder="Please enter quantity here"
            />
            <el-button>Recalculate</el-button>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
const props = defineProps({
  item: {
        type: Object,
        required: true
    },
  
})

console.log(props.item)
</script>
