<template>
  <div class="flex flex-col w-full">
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
    image: "@/assets/pictures/rolls.jpg",
    url: "/productlist/rolls",
  },
  {
    name: "Pastries",
    image: "@/assets/pictures/pastries.jpg",
    url: "/productlist/pastries",
  },
  {
    name: "Patties",
    image: "@/assets/pictures/patties.jpg",
    url: "/productlist/patties",
  },
  {
    name: "Cutlets",
    image: "@/assets/pictures/cutlets.jpg",
    url: "/productlist/cutlets",
  },
  {
    name: "Roti",
    image: "@/assets/pictures/roti.jpg",
    url: "/productlist/roti",
  },
  {
    name: "Hoppers",
    image: "@/assets/pictures/hoppers.jpg",
    url: "/productlist/hoppers",
  },
  {
    name: "Lunu Miris",
    image: "@/assets/pictures/lunu-miris.jpg",
    url: "/productlist/lunu-miris",
  },
  {
    name: "Seeni Sambal",
    image: "@/assets/pictures/seeni-sambal.jpg",
    url: "/productlist/seeni-sambal",
  },
  {
    name: "Coconut Sambal",
    image: "@/assets/pictures/coconut-sambal.jpg",
    url: "/productlist/coconut-sambal",
  },
];
</script>
