<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="flex items-center flex-col gap-[19px] py-[30px] px-[44px] bg-indigo-950 rounded-[10px] border-4 border-indigo-900">
    <div class="uppercase text-center relative z-20">
      <p class="text-accent-green text-base font-bold">{{ item.type }}</p>
      <h4 class="jomhuria-regular text-[52px] leading-10">{{ item.name }}</h4>
    </div>
    <div class="relative">
      <div class="relative z-20 h-[250px] xl:h-auto">
        <img :src="item.image" alt="Иконка" class="h-full w-full object-contain">
      </div>
      <div class="z-10 absolute bottom-[78px] left-1/2 -translate-x-1/2 w-[241px] h-[174px] blur-[154px]" :style="'background:' + item.color + ';'"></div>
    </div>
  </div>
</template>