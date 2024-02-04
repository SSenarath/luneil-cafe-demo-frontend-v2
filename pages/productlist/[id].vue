<template>
  <div class="flex justify-center w-full flex-col items-center gap-10">
    <p class="text-4xl font-bold text-center w-full">{{ title }}</p>
    <ContentProductingredientcard :item="item"></ContentProductingredientcard>
  </div>
</template>

<script setup>
const router = useRoute();
const route = useRoute();

const input = ref();
console.log(router.params.id);

const list = {
  rolls: {
    image: "/_nuxt/assets/pictures/rolls.jpg",
    options: ["Vegetable", "Fish"],
    baseQuantity: 30,
    ingredients: {
      Vegetable: [
        { amount: 300, ingredient: "g veggie roll ingredient 1" },
        { amount: 2, ingredient: "g veggie roll ingredient 2" },
        { amount: 1, ingredient: " veggie roll ingredient 3" },
        { amount: 2, ingredient: "g veggie roll ingredient 4" },
        { amount: 400, ingredient: "g veggie roll ingredient 5" },
        { amount: 1, ingredient: "veggie roll ingredient 6" },
        { amount: 1 / 2, ingredient: "tsp veggie roll ingredient 7" },
        { amount: 200, ingredient: "ml veggie roll ingredient 8" },
        { amount: 100, ingredient: "g veggie roll ingredient 9" },
        { amount: 0, ingredient: "veggie roll ingredient 10" },
      ],
      Fish: [
        { amount: 300, ingredient: "g fish roll ingredient 1" },
        { amount: 2, ingredient: "g fish roll ingredient 2" },
        { amount: 1, ingredient: " fish roll ingredient 3" },
        { amount: 2, ingredient: "g fish roll ingredient 4" },
        { amount: 400, ingredient: "g fish roll ingredient 5" },
        { amount: 1, ingredient: "fish roll ingredient 6" },
        { amount: 1 / 2, ingredient: "tsp fish roll ingredient 7" },
        { amount: 200, ingredient: "ml fish roll ingredient 8" },
        { amount: 100, ingredient: "g fish roll ingredient 9" },
        { amount: 0, ingredient: "fish roll ingredient 10" },
      ],
    },
  },
};

const title = computed(() => {
  return router.params.id.split("-").join(" ").toUpperCase();
});

const item = computed(() => {
    return list[router.params.id]
})

console.log(item.value)
</script>
