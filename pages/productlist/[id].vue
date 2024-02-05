<template>
  <div class="flex justify-center w-full flex-col items-center gap-10 py-10">
    <p class="text-4xl font-bold text-center w-full">{{ title }}</p>
    <ContentProductingredientcard :item="item"></ContentProductingredientcard>
  </div>
</template>

<script setup>
const router = useRoute();
const route = useRoute();

const input = ref();

const list = {
  rolls: {
    image: "@/assets/pictures/rolls.jpg",
    options: ["Vegetable", "Fish"],
    baseQuantity: 30,
    baseQuantityUnit: "items",
    ingredients: {
      Vegetable: [
        { amount: 300, ingredient: "g veggie roll ingredient" },
        { amount: 2, ingredient: "g veggie roll ingredient" },
        { amount: 1, ingredient: " veggie roll ingredient" },
        { amount: 2, ingredient: "g veggie roll ingredient" },
        { amount: 400, ingredient: "g veggie roll ingredient" },
        { amount: 1, ingredient: "veggie roll ingredient" },
        { amount: 1 / 2, ingredient: "tsp veggie roll ingredient" },
        { amount: 200, ingredient: "ml veggie roll ingredient" },
        { amount: 100, ingredient: "g veggie roll ingredient" },
      ],
      Fish: [
        { amount: 300, ingredient: "g fish roll ingredient" },
        { amount: 2, ingredient: "g fish roll ingredient" },
        { amount: 1, ingredient: " fish roll ingredient" },
        { amount: 2, ingredient: "g fish roll ingredient" },
        { amount: 400, ingredient: "g fish roll ingredient" },
        { amount: 1, ingredient: "fish roll ingredient" },
        { amount: 1 / 2, ingredient: "tsp fish roll ingredient" },
        { amount: 200, ingredient: "ml fish roll ingredient" },
        { amount: 100, ingredient: "g fish roll ingredient" },
      ],
    },
  },
  pastries: {
    image: "@/assets/pictures/pastries.jpg",
    options: ["Chicken", "Fish"],
    baseQuantity: 20,
    baseQuantityUnit: "items",
    ingredients: {
      Chicken: [
        { amount: 250, ingredient: "g chicken pastry ingredient" },
        { amount: 3, ingredient: "g chicken pastry ingredient" },
        { amount: 1, ingredient: " chicken pastry ingredient" },
        { amount: 3, ingredient: "g chicken pastry ingredient" },
        { amount: 350, ingredient: "g chicken pastry ingredient" },
        { amount: 2, ingredient: "chicken pastry ingredient" },
        { amount: 1 / 2, ingredient: "tsp chicken pastry ingredient" },
        { amount: 150, ingredient: "ml chicken pastry ingredient" },
        { amount: 120, ingredient: "g chicken pastry ingredient" },
      ],
      Fish: [
        { amount: 180, ingredient: "g fish pastry ingredient" },
        { amount: 4, ingredient: "g fish pastry ingredient" },
        { amount: 2, ingredient: " fish pastry ingredient" },
        { amount: 2, ingredient: "g fish pastry ingredient" },
        { amount: 300, ingredient: "g fish pastry ingredient" },
        { amount: 1, ingredient: "fish pastry ingredient" },
        { amount: 1 / 4, ingredient: "tsp fish pastry ingredient" },
        { amount: 250, ingredient: "ml fish pastry ingredient" },
        { amount: 150, ingredient: "g fish pastry ingredient" },
      ],
    },
  },
  patties: {
    image: "@/assets/pictures/patties.jpg",
    options: ["Cheese", "Chicken", "Fish"],
    baseQuantity: 15,
    baseQuantityUnit: "items",
    ingredients: {
      Cheese: [
        { amount: 120, ingredient: "g cheese patties ingredient" },
        { amount: 2, ingredient: "tbsp cheese patties ingredient" },
        { amount: 1, ingredient: "cheese patties ingredient" },
        { amount: 150, ingredient: "g cheese patties ingredient" },
        { amount: 250, ingredient: "ml cheese patties ingredient" },
        { amount: 3, ingredient: "cheese patties ingredient" },
        { amount: 1, ingredient: "cheese patties ingredient" },
        { amount: 1 / 2, ingredient: "tsp cheese patties ingredient" },
        { amount: 100, ingredient: "g cheese patties ingredient" },
      ],
      Chicken: [
        { amount: 160, ingredient: "g chicken patties ingredient" },
        { amount: 3, ingredient: "tbsp chicken patties ingredient" },
        { amount: 1, ingredient: "chicken patties ingredient" },
        { amount: 180, ingredient: "g chicken patties ingredient" },
        { amount: 200, ingredient: "ml chicken patties ingredient" },
        { amount: 5, ingredient: "chicken patties ingredient" },
        { amount: 1.5, ingredient: "chicken patties ingredient" },
        { amount: 1 / 4, ingredient: "tsp chicken patties ingredient" },
        { amount: 130, ingredient: "g chicken patties ingredient" },
      ],
      Fish: [
        { amount: 120, ingredient: "g fish patties ingredient" },
        { amount: 2, ingredient: "tbsp fish patties ingredient" },
        { amount: 1, ingredient: "fish patties ingredient" },
        { amount: 150, ingredient: "g fish patties ingredient" },
        { amount: 250, ingredient: "ml fish patties ingredient" },
        { amount: 3, ingredient: "fish patties ingredient" },
        { amount: 1, ingredient: "fish patties ingredient" },
        { amount: 1 / 2, ingredient: "tsp fish patties ingredient" },
        { amount: 100, ingredient: "g fish patties ingredient" },
      ],
    },
  },
  cutlets: {
    image: "@/assets/pictures/cutlets.jpg",
    options: ["Cheese", "Chicken", "Fish"],
    baseQuantity: 15,
    baseQuantityUnit: "items",
    ingredients: {
      Cheese: [
        { amount: 120, ingredient: "g cheese cutlet ingredient" },
        { amount: 2, ingredient: "tbsp cheese cutlet ingredient" },
        { amount: 1, ingredient: "cheese cutlet ingredient" },
        { amount: 150, ingredient: "g cheese cutlet ingredient" },
        { amount: 250, ingredient: "ml cheese cutlet ingredient" },
        { amount: 3, ingredient: "cheese cutlet ingredient" },
        { amount: 1, ingredient: "cheese cutlet ingredient" },
        { amount: 1 / 2, ingredient: "tsp cheese cutlet ingredient" },
        { amount: 100, ingredient: "g cheese cutlet ingredient" },
      ],
      Chicken: [
        { amount: 160, ingredient: "g chicken cutlet ingredient" },
        { amount: 3, ingredient: "tbsp chicken cutlet ingredient" },
        { amount: 1, ingredient: "chicken cutlet ingredient" },
        { amount: 180, ingredient: "g chicken cutlet ingredient" },
        { amount: 200, ingredient: "ml chicken cutlet ingredient" },
        { amount: 5, ingredient: "chicken cutlet ingredient" },
        { amount: 1.5, ingredient: "chicken cutlet ingredient" },
        { amount: 1 / 4, ingredient: "tsp chicken cutlet ingredient" },
        { amount: 130, ingredient: "g chicken cutlet ingredient" },
      ],
      Fish: [
        { amount: 120, ingredient: "g cutlet patties ingredient" },
        { amount: 2, ingredient: "tbsp cutlet patties ingredient" },
        { amount: 1, ingredient: "cutlet patties ingredient" },
        { amount: 150, ingredient: "g cutlet patties ingredient" },
        { amount: 250, ingredient: "ml cutlet patties ingredient" },
        { amount: 3, ingredient: "cutlet patties ingredient" },
        { amount: 1, ingredient: "cutlet patties ingredient" },
        { amount: 1 / 2, ingredient: "tsp cutlet patties ingredient" },
        { amount: 100, ingredient: "g cutlet patties ingredient" },
      ],
    },
  },
  roti: {
    image: "@/assets/pictures/roti.jpg",
    options: ["Vegetable", "Fish", "Chicken"],
    baseQuantity: 5,
    baseQuantityUnit: "items",
    ingredients: {
      Vegetable: [
        { amount: 300, ingredient: "g veggie roti ingredient" },
        { amount: 2, ingredient: "g veggie roti ingredient" },
        { amount: 1, ingredient: " veggie roti ingredient" },
        { amount: 2, ingredient: "g veggie roti ingredient" },
        { amount: 400, ingredient: "g veggie roti ingredient" },
        { amount: 1, ingredient: "veggie roti ingredient" },
        { amount: 1 / 2, ingredient: "tsp veggie roti ingredient" },
        { amount: 200, ingredient: "ml veggie roti ingredient" },
        { amount: 100, ingredient: "g veggie roti ingredient" },
      ],
      Fish: [
        { amount: 300, ingredient: "g fish roti ingredient" },
        { amount: 2, ingredient: "g fish roti ingredient" },
        { amount: 1, ingredient: " fish roti ingredient" },
        { amount: 2, ingredient: "g fish roti ingredient" },
        { amount: 400, ingredient: "g fish roti ingredient" },
        { amount: 1, ingredient: "fish roti ingredient" },
        { amount: 1 / 2, ingredient: "tsp fish roti ingredient" },
        { amount: 200, ingredient: "ml fish roti ingredient" },
        { amount: 100, ingredient: "g fish roti ingredient" },
      ],
      Chicken: [
        { amount: 300, ingredient: "g chicken roti ingredient" },
        { amount: 2, ingredient: "g chicken roti ingredient" },
        { amount: 1, ingredient: " chicken roti ingredient" },
        { amount: 2, ingredient: "g chicken roti ingredient" },
        { amount: 400, ingredient: "g chicken roti ingredient" },
        { amount: 1, ingredient: "chicken roti ingredient" },
        { amount: 1 / 2, ingredient: "tsp chicken roti ingredient" },
        { amount: 200, ingredient: "ml chicken roti ingredient" },
        { amount: 100, ingredient: "g chicken roti ingredient" },
      ],
    },
  },
  hoppers: {
    image: "@/assets/pictures/hoppers.jpg",
    options: ["noOptions"],
    baseQuantity: 5,
    baseQuantityUnit: "items",
    ingredients: {
      noOptions: [
        { amount: 300, ingredient: "g hopper ingredient" },
        { amount: 2, ingredient: "g hopper ingredient" },
        { amount: 1, ingredient: " hopper ingredient" },
        { amount: 2, ingredient: "g hopper ingredient" },
        { amount: 400, ingredient: "g hopper ingredient" },
        { amount: 1, ingredient: "hopper ingredient" },
        { amount: 1 / 2, ingredient: "tsp hopper ingredient" },
        { amount: 200, ingredient: "ml hopper ingredient" },
        { amount: 100, ingredient: "g hopper ingredient" },
      ],
    },
  },
  "lunu-miris": {
    image: "@/assets/pictures/lunu-miris.jpg",
    options: ["noOptions"],
    baseQuantity: 300,
    baseQuantityUnit: "g",
    ingredients: {
        noOptions: [
          { amount: 300, ingredient: "g lunu miris ingredient" },
          { amount: 2, ingredient: "g lunu miris ingredient" },
          { amount: 1, ingredient: " lunu miris ingredient" },
          { amount: 2, ingredient: "g lunu mirisingredient" },
          { amount: 400, ingredient: "g lunu miris ingredient" },
          { amount: 1, ingredient: "lunu miris ingredient" },
          { amount: 1 / 2, ingredient: "tsp lunu miris ingredient" },
          { amount: 200, ingredient: "ml lunu miris ingredient" },
          { amount: 100, ingredient: "g lunu miris ingredient" },
        ],
    },
  },
  "seeni-sambal": {
    image: "@/assets/pictures/seeni-sambal.jpg",
    options: ["noOptions"],
    baseQuantity: 300,
    baseQuantityUnit: "g",
    ingredients: {
        noOptions: [
          { amount: 300, ingredient: "g seeni sambal ingredient" },
          { amount: 2, ingredient: "g seeni sambal ingredient" },
          { amount: 1, ingredient: " seeni sambal ingredient" },
          { amount: 2, ingredient: "g seeni sambal ingredient" },
          { amount: 400, ingredient: "g seeni sambal ingredient" },
          { amount: 1, ingredient: "seeni sambal ingredient" },
          { amount: 1 / 2, ingredient: "tsp seeni sambal ingredient" },
          { amount: 200, ingredient: "ml seeni sambal ingredient" },
          { amount: 100, ingredient: "g seeni sambal ingredient" },
        ],
    },
  },
  "coconut-sambal": {
    image: "@/assets/pictures/coconut-sambal.jpg",
    options: ["noOptions"],
    baseQuantity: 250,
    baseQuantityUnit: "g",
    ingredients: {
        noOptions: [
          { amount: 300, ingredient: "g coconut sambal ingredient" },
          { amount: 2, ingredient: "g coconut sambal ingredient" },
          { amount: 1, ingredient: " coconut sambal ingredient" },
          { amount: 2, ingredient: "g coconut sambal ingredient" },
          { amount: 400, ingredient: "g coconut sambal ingredient" },
          { amount: 1, ingredient: "coconut sambal ingredient" },
          { amount: 1 / 2, ingredient: "tsp coconut sambal ingredient" },
          { amount: 200, ingredient: "ml coconut sambal ingredient" },
          { amount: 100, ingredient: "g coconut sambal ingredient" },
        ],
    },
  },
};

const title = computed(() => {
  return router.params.id.split("-").join(" ").toUpperCase();
});

const ratio = ref(1);

const item = computed(() => {
  return list[router.params.id];
});

const recalculate = (newQuantity, baseQuantity) => {
  ratio.value = newQuantity / baseQuantity;
};
</script>
