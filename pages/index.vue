<template>
  <div class="flex mx-auto items-center relative top-[120px]">
    <img
      src="assets/pictures/banner.jpg"
      class="opacity-50 rounded-lg absolute scale-[1]"
    />
    <div
      class="flex justify-center relative flex-col items-center m-10 gap-4 bg-white bg-opacity-40 py-4 rounded-lg"
    >
      <p class="font-bold text-7xl text-black text-center w-[750px]">
        Welcome Luneil Cafe
      </p>
      <p class="text-2xl">What would you like to do today?</p>
      <div class="flex gap-3">
        <NuxtLink to="/productlist">
          <button class="bg-luneil-yellow px-2 py-1 rounded-md">
            Calculate Ingredients
          </button>
        </NuxtLink>
        <NuxtLink to="/logorder">
          <button class="bg-luneil-yellow px-2 py-1 rounded-md">
            Log an Order
          </button>
        </NuxtLink>
        <NuxtLink to="/orderhistory">
          <button class="bg-luneil-yellow px-2 py-1 rounded-md">
          View Existing Orders
        </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
