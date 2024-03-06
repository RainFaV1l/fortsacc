<script setup>
  import ReceiveItem from "/images/receive/item.svg";
  defineProps({
    item: {
      type: Object,
      required: true,
    }
  })
</script>

<template>
  <div class="relative w-1/4" :style="'background: url(' + ReceiveItem + ');'" style="background-size: cover; background-repeat: no-repeat">
    <p class="absolute left-1/2 -translate-x-1/2 text-[46px] text-accent-green manrope-bold -top-7">{{ item.number }}</p>
    <div class="text-center flex flex-col items-center gap-[19px] pt-[89px] pb-[60px] px-[34px]">
      <h3 class="text-[20px] manrope-bold">{{ item.name }}</h3>
      <p class="text-sm text-accent-light-blue font-medium">{{ item.description }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>