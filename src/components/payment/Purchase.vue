<script setup>
import ButtonComponent from "@/components/UI/ButtonComponent.vue";
import {useCartStore} from "@/stores/CartStore.js";
import {XMarkIcon} from "@heroicons/vue/16/solid/index.js";
import Checkbox from "@/components/UI/Checkbox.vue";
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";

const cartStore = useCartStore()

const isChecked = ref(false)

const router = useRouter()

</script>

<template>
  <div class="border border-[#363C6F] bg-[#1C2147] rounded-[10px] flex flex-col">
    <div class="border-b border-[#363C6F] pt-[32px] px-[32px] pb-[24px] flex flex-col gap-5">
      <div class="relative flex justify-between items-center gap-7" v-for="product in cartStore.cart" :key="product.id">
        <div class="cursor-pointer relative border-[0.78px] border-[#363C6F] rounded-[3.91px] p-[13px]" @click="router.push({ name: 'product', params: { id: product.id } })">
          <div class="top-5 left-1/2 -translate-x-1/2 absolute w-[67.25px] h-[63.34px] bg-[#604FFF] bg-opacity-50 blur-[30px]"></div>
          <div class="h-[78.59px] w-[78.59px]">
            <img class="h-full w-full" :src="product.preview_image" alt="Товар">
          </div>
        </div>
        <div class="w-full">
          <h3 class="text-base manrope-extrabold">{{ product.name }} | <br> <span class="uppercase">stacked</span> <br> x{{ product.count }}</h3>
        </div>
        <div class="h-7 w-7">
          <XMarkIcon class="h-7 w-7 cursor-pointer justify-self-end" @click="cartStore.destroyCartItem(product.id)"/>
        </div>
      </div>
<!--      <div class="flex items-center gap-[21px] border border-[#363C6F] rounded-[10px] py-4 px-5">-->
<!--        <Checkbox name="discount" v-model="isChecked"/>-->
<!--        <div class="flex flex-col gap-[3px]">-->
<!--          <h4 class="text-[#77DEFF] text-sm manrope-bold"><span class="uppercase">fast delivery</span> + $10</h4>-->
<!--          <p class="text-accent-light-blue manrope-regular text-[12px]">Get your orders 5x faster!</p>-->
<!--        </div>-->
<!--      </div>-->
      <h3 class="uppercase text-center text-2xl manrope-extrabold text-[#9CFF4F]">total: $50</h3>
    </div>
    <div class="flex flex-col items-center gap-5 pt-6 pb-8 px-8">
      <div class="flex flex-col items-center gap-[12px] w-full">
        <p class="manrope-bold text-base uppercase">discount coupon</p>
        <input type="text" class="input placeholder:text-[#9197C2] py-[14px] px-5 w-full focus:border" placeholder="Enter coupon">
      </div>
      <ButtonComponent class="py-[13px] w-full" type="blue">Apply</ButtonComponent>
    </div>
  </div>
</template>

<style scoped>

</style>