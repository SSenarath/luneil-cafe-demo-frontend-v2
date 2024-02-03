<template>
  <div class="flex flex-col " :class="{'h-screen': route.path === '/' || route.name === 'productlist-id' }" >
    <LayoutNavbar></LayoutNavbar>
    <div class="flex h-full">
      <slot />
    </div>
    <div class="mt-auto">
      <LayoutFooter></LayoutFooter>
    </div>
  </div>
</template>

<script setup>

const route = useRoute()


</script>

<style>

body {
  height: 100vh;
  @apply bg-[#FEFAE0];
  box-sizing: border-box;
}


</style>