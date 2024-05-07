<script setup>
import SliderBg from "@/assets/slider-bg.webp";
import ButtonComponent from "@/components/UI/ButtonComponent.vue";
import {useRouter} from "vue-router";
const router = useRouter()
defineProps({
  item: {
    type: Object,
    required: true
  }
})
function formatPrice(price, currency) {
  return new Intl.NumberFormat('en-US', {style: 'currency', currency}).format(price);
}
</script>

<template>
  <div class="flex justify-center" >
    <div class="relative h-[435px] w-[320px]">
      <div class="absolute z-20 flex flex-col justify-center items-center h-full w-full gap-[30px]">
        <div class="h-[241px] w-[241px]">
          <img class="h-full w-full object-contain" :src="item.image" alt="Иконка">
        </div>
        <div class="flex flex-col items-center gap-[21px]">
          <div class="flex flex-col gap-[13px] text-center">
            <h3 class="text-[20px] font-['roboto'] font-extrabold uppercase">{{ item.name }}</h3>
            <p class="text-accent-light-blue text-[14px]">{{ item.description }}</p>
          </div>
          <div class="flex items-center gap-[32px]">
            <ButtonComponent @click="router.push({ name: 'product', params: { id: item.id } })" class="py-[12px] px-[60px] text-[#1C2147] hover:text-white" type="green">More</ButtonComponent>
            <p class="text-[#4FF4FF] font-[20px]">{{ formatPrice(item.price, 'ETH') }}</p>
          </div>
        </div>
      </div>
      <div class="absolute left-1/2 -translate-x-1/2 top-0 h-full w-full object-cover z-10">
        <img :src="SliderBg" alt="Фон" class="rounded h-full w-full">
      </div>
    </div>
  </div>
</template>