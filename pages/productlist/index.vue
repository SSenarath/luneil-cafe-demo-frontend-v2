<template>
  <div class="flex flex-col w-full border">
    <p class="text-4xl font-bold text-center mt-4">Product List</p>
    <div class="my-5 justify-center flex gap-20 flex-row flex-wrap">
      <ContentProductcard
        v-for="each in productList"
        :name="each.name"
        :url="each.url"
        :image="each.image"
      ></ContentProductcard>
    </div>
  </div>
</template>

<script setup>
const productList = [
  {
    name: "Rolls",
    image: "/_nuxt/assets/pictures/rolls.jpg",
    url: "/productlist/rolls",
  },
  {
    name: "Pastries",
    image: "/_nuxt/assets/pictures/rolls.jpg",
    url: "/productlist/pastries",
  },
  {
    name: "Patties",
    image: "/_nuxt/assets/pictures/rolls.jpg",
    url: "/productlist/patties",
  },
  {
    name: "Cutlets",
    image: "/_nuxt/assets/pictures/rolls.jpg",
    url: "/productlist/cutlets",
  },
  {
    name: "Roti",
    image: "/_nuxt/assets/pictures/rolls.jpg",
    url: "/productlist/roti",
  },
  {
    name: "Hoppers",
    image: "/_nuxt/assets/pictures/rolls.jpg",
    url: "/productlist/hoppers",
  },
  {
    name: "Lunu Miris",
    image: "/_nuxt/assets/pictures/rolls.jpg",
    url: "/productlist/lunu-miris",
  },
  {
    name: "Seeni Sambal",
    image: "/_nuxt/assets/pictures/rolls.jpg",
    url: "/productlist/seeni-sambal",
  },
  {
    name: "Tempered Onion",
    image: "/_nuxt/assets/pictures/rolls.jpg",
    url: "/productlist/tempered-onion",
  },
  {
    name: "Coconut Sambal",
    image: "/_nuxt/assets/pictures/rolls.jpg",
    url: "/productlist/coconut-sambal",
  },
];
</script>
