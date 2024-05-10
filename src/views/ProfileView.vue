<script setup>
import BenefitCartComponent from "@/components/UI/BenefitCartComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import BalanceComponent from "@/components/UI/BalanceComponent.vue";
import Header from "@/components/header/Header.vue";
import {useUserStore} from "@/stores/UserStore.js";

const userStore = useUserStore()
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
                <h3 class="uppercase roboto-bold text-[25px] 1100:text-4xl">{{ userStore.user.first_name + ' ' + userStore.user.last_name }}</h3>
                <p class="manrope-medium text-[14px]">example@info.com</p>
              </div>
              <BalanceComponent/>
            </div>
          </div>
          <div class="overflow-x-scroll w-full xs:w-[auto]">
            <div class="flex items-center gap-5 w-[830px]">
              <div class="flex flex-col gap-[10px] bg-[rgba(17,16,11,.3)] border border-[#897CFF] rounded-[5px] p-5 w-[260px]">
                <h4 class="text-[20px] roboto-bold">Name of product</h4>
                <div class="flex flex-col gap-[5px]">
                  <p class="text-white text-opacity-60 roboto-light text-[15px]">№ 235663</p>
                  <div class="flex items-center gap-[5px]">
                    <div class="h-[9px] w-[9px] bg-[#E99D2C] bg-opacity-20 rounded-full flex items-center justify-center">
                      <div class="h-[5px] w-[5px] bg-[#E99D2C] rounded-full"></div>
                    </div>
                    <p class="text-[15px] roboto-light">Paid</p>
                  </div>
                </div>
              </div>
              <div class="flex flex-col gap-[10px] bg-[rgba(17,16,11,.3)] border border-[#897CFF] rounded-[5px] p-5 w-[260px]">
                <h4 class="text-[20px] roboto-bold">Name of product</h4>
                <div class="flex flex-col gap-[5px]">
                  <p class="text-white text-opacity-60 roboto-light text-[15px]">№ 235663</p>
                  <div class="flex items-center gap-[5px]">
                    <div class="h-[9px] w-[9px] bg-[#E99D2C] bg-opacity-20 rounded-full flex items-center justify-center">
                      <div class="h-[5px] w-[5px] bg-[#E99D2C] rounded-full"></div>
                    </div>
                    <p class="text-[15px] roboto-light">Paid</p>
                  </div>
                </div>
              </div>
              <div class="flex flex-col gap-[10px] bg-[rgba(17,16,11,.3)] border border-[#897CFF] rounded-[5px] p-5 w-[260px]">
                <h4 class="text-[20px] roboto-bold">Name of product</h4>
                <div class="flex flex-col gap-[5px]">
                  <p class="text-white text-opacity-60 roboto-light text-[15px]">№ 235663</p>
                  <div class="flex items-center gap-[5px]">
                    <div class="h-[9px] w-[9px] bg-[#E99D2C] bg-opacity-20 rounded-full flex items-center justify-center">
                      <div class="h-[5px] w-[5px] bg-[#E99D2C] rounded-full"></div>
                    </div>
                    <p class="text-[15px] roboto-light">Paid</p>
                  </div>
                </div>
              </div>
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