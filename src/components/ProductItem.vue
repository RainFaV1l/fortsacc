<script setup>
  defineProps({
    item: {
      type: Object,
      required: true,
    }
  })
  function formatPrice(price, currency) {
    return new Intl.NumberFormat('en-US', {style: 'currency', currency}).format(price);
  }
</script>

<template>
  <div v-if="!item.mini" class="relative px-[33px] py-[30px] flex flex-col gap-[34px] rounded-[10px] border-2 border-[#363C6F]" :style="'background: url(' + item.bg + ');'" style="background-size: cover">
    <div class="relative z-20 w-[274px] h-[274px]">
      <img :src="item.image" alt="Иконка" class="h-full w-full object-contain">
    </div>
    <div class="relative flex flex-col gap-[24px] z-20">
      <div class="flex items-center flex-col gap-[14px] text-center">
        <h4 class="font-['Roboto'] font-extrabold text-2xl uppercase">{{ item.name }}</h4>
        <p class="text-accent-light-blue text-base">{{ item.description }}</p>
      </div>
      <div class="flex items-center justify-between gap-4">
        <button class="button-fill gradient-green text-[#1C2147] py-[13px] px-[70px] hover:text-white">Buy</button>
        <p class="text-[22px] manrope-extrabold text-[#4FF4FF]">{{ formatPrice(item.price, 'ETH') }}</p>
      </div>
    </div>
  </div>
  <div v-else class="relative px-[26px] py-[25px] flex flex-col gap-[17px] bg-[#1C2147] rounded-[10px] border-2 border-[#363C6F]" :style="'background: url(' + item.color + ');'" style="background-size: cover">
    <div class="relative z-20 w-[201px] h-[201px]">
      <img :src="item.image" alt="Иконка" class="h-full w-full object-contain">
    </div>
    <div class="relative flex flex-col gap-[17px] z-20">
      <div class="flex items-center flex-col gap-[9px] text-center">
        <h4 class="font-['Roboto'] font-extrabold text-2xl uppercase">{{ item.name }}</h4>
        <p class="text-accent-light-blue text-base">{{ item.description }}</p>
      </div>
      <div class="flex items-center justify-between gap-4">
        <RouterLink :to="{ name: 'product', params: { id: item.id } }"><button class="button-fill gradient-green text-[#1C2147] py-[12px] px-[40px] hover:text-white">Buy</button></RouterLink>
        <p class="text-base] manrope-extrabold text-[#9CFF4F]">{{ formatPrice(item.price, 'ETH') }}</p>
      </div>
    </div>
  </div>
</template>