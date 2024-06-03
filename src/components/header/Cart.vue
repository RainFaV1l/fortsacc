<script setup>
import IconCart from "@/components/icons/IconCart.vue";
import {useCartStore} from "@/stores/CartStore.js";

const cartStore = useCartStore()
</script>

<template>
  <div class="relative h-5 w-5 flex items-center cursor-pointer">
    <IconCart class="h-5 w-5"/>
    <div v-show="cartStore.cart.length > 0" class="absolute h-[6px] w-[6px] rounded-full bg-accent-green top-0 right-0 text-[8px] text-accent-dark-blue text-center"></div>
  </div>
</template>