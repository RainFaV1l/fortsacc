npm<script setup>
  import ButtonComponent from "@/components/UI/ButtonComponent.vue";
  import {useProductStore} from "@/stores/ProductStore.js";
  import {useCartStore} from "@/stores/CartStore.js";
  import {useRouter} from "vue-router";

  const productStore = useProductStore()
  const cartStore = useCartStore()

  const router = useRouter()

  defineProps({
    item: {
      type: Object,
      required: true,
    }
  })

</script>

<template>
  <div v-if="!item.mini" @click="router.push({ name: 'product', params: { id: item.id } })" class="relative cursor-pointer px-[33px] py-[30px] flex flex-col gap-[34px] rounded-[10px] border-2 border-[#363C6F]" :style="'background: url(' + item.bg + ');'" style="background-size: cover">
    <div class="relative z-20 w-[100%] h-[274px]">
      <img :src="item.preview_image" alt="Иконка" class="h-full w-full object-contain">
    </div>
    <div class="relative flex flex-col gap-[24px] z-20">
      <div class="flex items-center flex-col gap-[14px] text-center">
        <h4 class="font-['Roboto'] font-extrabold text-2xl uppercase h-[70px]">{{ item.name }}</h4>
        <p class="text-accent-light-blue text-base">{{ item.short_description }}</p>
      </div>
      <div class="flex items-center justify-between gap-4" @click.stop>
        <ButtonComponent v-if="!cartStore.getCartItem(item.id)" class="text-[#1C2147] py-[13px] px-[70px] hover:text-white" type="green" @click="cartStore.setCart(item)">Buy</ButtonComponent>
        <ButtonComponent v-if="cartStore.getCartItem(item.id)" class="text-[#1C2147] py-[13px] px-[30px] hover:text-white w-[150px]" type="green" @click="cartStore.setCart(item)">In cart | {{ cartStore.getCartItem(item.id)?.count }}</ButtonComponent>
        <p class="text-[22px] manrope-extrabold text-[#4FF4FF]">{{ productStore.formatPrice(item.price, item.currency) }}</p>
      </div>
    </div>
  </div>
  <div v-else @click="router.push({ name: 'product', params: { id: item.id } })" class="cursor-pointer relative px-[26px] py-[25px] flex flex-col gap-[17px] bg-[#1C2147] rounded-[10px] border-2 border-[#363C6F]" :style="'background: url(' + item.color + ');'" style="background-size: cover">
    <div class="relative z-20 w-[100%] h-[201px]">
      <img :src="item.preview_image" alt="Иконка" class="h-full w-full object-contain">
    </div>
    <div class="relative flex flex-col gap-[17px] z-20">
      <div class="flex items-center flex-col gap-[9px] text-center">
        <h4 class="font-['Roboto'] font-extrabold text-2xl uppercase h-[70px]">{{ item.name }}</h4>
        <p class="text-accent-light-blue text-base">{{ item.short_description }}</p>
      </div>
      <div class="flex items-center justify-between gap-4" @click.stop>
        <ButtonComponent v-if="!cartStore.getCartItem(item.id)" @click="cartStore.setCart(item)" class="text-[#1C2147] py-[12px] px-[40px] hover:text-white" type="green">Buy</ButtonComponent>
        <ButtonComponent v-if="cartStore.getCartItem(item.id)" @click="cartStore.setCart(item)" class="text-[#1C2147] py-[12px] px-[20px] w-[130px] hover:text-white" type="green">In cart | {{ cartStore.getCartItem(item.id)?.count }}</ButtonComponent>
        <p class="text-base] manrope-extrabold text-[#9CFF4F]">{{ productStore.formatPrice(item.price, item.currency) }}</p>
      </div>
    </div>
  </div>
</template>