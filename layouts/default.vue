<template>
  <div class="flex flex-col justify-between h-screen">
    <LayoutNavbar></LayoutNavbar>
    <div class="flex h-screen flex-col justify-between ">
      <slot />
      <div class="mt-2">
        <LayoutFooter></LayoutFooter>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
</script>

<style>
body {
  height: 100vh;
  @apply bg-[#FEFAE0];
  box-sizing: border-box;
}
</style>
