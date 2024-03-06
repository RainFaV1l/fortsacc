<script setup>
  defineProps({
    item: {
      type: Object,
      required: true
    }
  })
</script>

<template>
  <div class="flex flex-col gap-[5px]">
    <h3 class="text-[28px] manrope-extrabold">{{ item.name }}</h3>
    <p class="text-accent-light-blue text-sm manrope-medium">{{ item.description }}</p>
  </div>
  <div class="h-full w-[1px] bg-white bg-opacity-10" v-if="item.index < item.count"></div>
</template>