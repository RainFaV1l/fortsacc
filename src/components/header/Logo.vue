<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  h: {
    type: Number,
    required: true,
  },
  w: {
    type: Number,
    required: true,
  },
  fontSize: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <div class="flex items-center gap-4 cursor-pointer">
    <div :style="'height:' + h + 'px;' + 'width:' + w + 'px;'">
      <slot/>
    </div>
    <div class="uppercase lalezar-regular leading-normal" :style="'font-size:' + fontSize + 'px;'">{{ name }}</div>
  </div>
</template>