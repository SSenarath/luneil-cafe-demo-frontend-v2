<template>
<div class="flex justify-center w-full flex-col items-center gap-10">
    <p class="text-4xl font-bold text-center w-full">{{ title }}</p>
    <div class="h-3/4 border w-3/5 bg-luneil-orange bg-opacity-50 rounded ">
    </div>
</div>

</template>

<script setup>

const router = useRoute()
const route = useRoute()
console.log(router.params.id)

const title = computed(() => {
    return router.params.id.split('-').join(" ").toUpperCase()
})

</script>