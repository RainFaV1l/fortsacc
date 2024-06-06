<script setup>
  defineProps({
    category: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <div class="bg-white rounded-full p-[5px] flex items-center gap-[10px]">
    <div class="size-4 rounded-full bg-[#604FFF]"></div>
    <p class="text-sm text-accent-dark-blue">{{ category }}</p>
  </div>
</template>

<style scoped>

</style>