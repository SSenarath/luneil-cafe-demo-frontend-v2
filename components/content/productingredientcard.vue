<template>
  <div
    class="border w-3/5 bg-luneil-orange bg-opacity-50 rounded-lg flex p-4 "
  >
    <div class="w-[99%] object-contain flex items-center ">
      <img :src="item.image" class="rounded-lg mb-4" />
    </div>

    <div class="ml-4 flex flex-col h-full border border-black p-4 rounded-lg">
      <div v-if="item.options[0] !== 'noOptions'" class="flex items-center" >
        <p class="font-bold mr-2">Options:</p>
        <el-button
          v-for="each in item.options"
          :key="each"
          :class="{ 'is-active': each === selectedOption }"
          @click="changeOption(each)"
          >{{ each }}</el-button
        >
      </div>
      <p class="font-bold text-xl my-2">
        Ingredient List for {{ item.baseQuantity*ratio }} {{ item.baseQuantityUnit }}
      </p>
      <ul class="list-disc ml-4 flex flex-col flex-wrap h-3/5 mb-4">
        <li v-for="each in item.ingredients[selectedOption]">
          <span>{{ Number((each.amount*ratio ).toFixed(2))}}</span> {{ each.ingredient }}
        </li>
      </ul>
      <div class="mt-auto mb-2">
        <p>
          If you want to recalculate to recalculate the ingredient quantities
          based on a specific number of items, please enter the number of items
          below and press recalculate
        </p>
        <div class="flex gap-4 mt-4">
          <el-input v-model="input" placeholder="Please enter quantity here" />
          <el-button @click="recalculate(input, item.baseQuantity)">Recalculate</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const input = ref()
const selectedOption = ref("");
const ratio = ref(1)

const changeOption = (option) => {
  selectedOption.value = option;
  ratio.value = 1
};

const recalculate  = (newQuantity, baseQuantity) => {
    ratio.value = newQuantity / baseQuantity
    input.value = ''
}

onMounted(() => {
  selectedOption.value = props.item.options[0];
});
</script>
