<script setup>
import BenefitCartComponent from "@/components/UI/BenefitCartComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import BalanceComponent from "@/components/UI/BalanceComponent.vue";
import Header from "@/components/header/Header.vue";
import {useUserStore} from "@/stores/UserStore.js";
import Order from "@/components/profile/Order.vue";
import {useOrderStore} from "@/stores/OrderStore.js";

const userStore = useUserStore()
const orderStore = useOrderStore()

console.log(orderStore.orders)
</script>

<template>
  <Header/>
  <div style="background-size: cover; background: url('/images/profile/bg/bg.webp') top;">
    <div class="bg-[#0C0C1D] drop-shadow-[0,4px,49px,rgba(0,0,0,25%)] py-[27px]">
      <div class="container">
        <div class="flex flex-col xs:flex-row items-center gap-[40px]">
          <div class="flex flex-col m:flex-row m:items-center gap-5 w-full xs:w-[55%]">
            <div class="h-[139px] w-[139px]">
              <img class="h-full w-full rounded-full object-cover" src="/images/profile/avatar.svg" alt="Аватарка">
            </div>
            <div class="flex flex-col gap-5">
              <div class="flex flex-col gap-[1px]">
              <span class="uppercase roboto-bold text-[25px] 1100:text-4xl">{{ userStore.user.first_name + ' ' + userStore.user.last_name }}</span>
                <p class="manrope-medium text-[14px]">example@info.com</p>
              </div>
              <!--<BalanceComponent/>-->
            </div>
          </div>
          <div class="overflow-x-scroll w-full xs:w-[auto] profile-scroll">
            <div class="flex items-center gap-5 w-[830px]">
              <Order/>
              <Order/>
              <Order/>
              <Order/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container pt-[80px] pb-[60px]">
      <div class="flex flex-col mx:flex-row items-center gap-[0px] mx:gap-[30px]">
        <BenefitCartComponent @click="$router.push({ name: 'affiliate' })" src="/images/profile/affiliate.svg" name="Affiliate program"/>
        <BenefitCartComponent @click="$router.push({ name: 'purchases' })" src="/images/profile/cart.svg" name="My purchases"/>
        <BenefitCartComponent src="/images/profile/support.svg" name="Support"/>
      </div>
    </div>
  </div>
  <FooterComponent/>
</template>

<style scoped>

</style>