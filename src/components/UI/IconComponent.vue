<template>
  <div :style="`height: ${h1}px;` + `width: ${w1}px;`" class="rounded-full bg-[#11100B] bg-opacity-30 flex items-center justify-center">
    <div :style="`height: ${h2}px;` + `width: ${w2}px;`" class="rounded-full bg-[#363C6F] border border-accent-green drop-shadow-[0,4px,14.3,rgba(0,0,0,0.5)] flex items-center justify-center">
      <img :src="src" alt="Иконка">
    </div>
  </div>
</template>

<script setup>
  defineProps({
    h1: {
      type: Number,
      required: true
    },
    w1: {
      type: Number,
      required: true
    },
    h2: {
      type: Number,
      required: true
    },
    w2: {
      type: Number,
      required: true
    },
    src: {
      type: String,
      required: true,
    }
  })
</script>

<style scoped>

</style>