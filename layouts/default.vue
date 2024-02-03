<template>
    <div class="bg-[#FEFAE0] h-screen flex flex-col">
      <LayoutNavbar></LayoutNavbar>
      <div class="">
        <slot />
      </div>
      <div class="mt-auto">
        <LayoutFooter></LayoutFooter>
      </div>
    </div>
  </template>