<script setup>
import PaymentHeader from "@/components/payment/PaymentHeader.vue";
import Header from "@/components/header/Header.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import cartIcon from "/images/cart/cart.svg";
import {ref} from "vue";
import BgImage from "@/assets/bg.webp";

const url = ref(`background: url(${BgImage});`)
</script>

<template>
  <div class="min-h-full flex flex-col" :style="url" style="background-size: cover; background-position: center">
    <Header/>
    <main class="flex-auto border-b border-white border-opacity-10">
      <div class="container py-[45px]">
        <PaymentHeader route="home" title="shopping <span class='text-accent-green'>cart</span>"/>
        <div class="py-[100px] flex flex-col items-center">
          <div class="h-24">
            <img :src="cartIcon" alt="Иконка" class="h-full w-full">
          </div>
          <div class="mt-[30px] flex flex-col items-center gap-4 text-center">
            <h2 class="text-4xl roboto-bold">No items in your cart 😨</h2>
            <p class="text-lg">Browse our products
              <router-link :to="{ name: 'home', hash: '#catalog' }"><span class="text-accent-green">here</span></router-link>
              !
            </p>
          </div>
        </div>
      </div>
    </main>
    <FooterComponent/>
  </div>
</template>

<style scoped>

</style>