<script setup>
import IconComponent from "@/components/UI/IconComponent.vue";

defineProps({
  src: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
})
</script>

<template>
  <div class="relative h-[360px] w-[55%] m:w-[32%] cursor-pointer">
    <div class="absolute top-0 left-1/2 -translate-x-1/2">
      <IconComponent :src="src" :w2="92" :h2="92" :h1="128" :w1="128"/>
    </div>
    <div class="mt-[64px] bg-[rgba(17,16,11,.3)] border border-[#897CFF] pt-[80px] pb-[33px] px-[21px] rounded-[5px]">
      <p class="text-center text-xl manrope-medium">{{ name }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>