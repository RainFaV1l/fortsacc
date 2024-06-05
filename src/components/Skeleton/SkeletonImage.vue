<script setup>
  defineProps({
    index: {
      type: Number,
      required: true
    }
  })
</script>

<template>
  <div class="h-full w-full bg-white bg-opacity-50 rounded image" :class="{ 'h-[500px]' : index === 0, 'h-[200px]' : index !== 0}"></div>
</template>

<style scoped>
  .image {
    animation: pulse-bg 1s infinite;
    transition: all .3s ease-in-out;
  }
  @keyframes pulse-bg {
    0% {
      background-color: #eee;
    }
    50% {
      background-color: #eaeaea;
    }
    100% {
      background-color: #eee;
    }
  }
</style>