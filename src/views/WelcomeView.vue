<script setup>
import bg from '/images/welcome/bg_2x.webp';
import ButtonComponent from "@/components/UI/ButtonComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import IconComponent from "@/components/UI/IconComponent.vue";
import Header from "@/components/header/Header.vue";
import {useUserStore} from "@/stores/UserStore.js";

const url = `background: url(${bg});`;

const userStore = useUserStore()
</script>

<template>
  <div :style="url" style="background-size: cover; background-position: top;">
    <Header/>
    <div class="container pt-[66px]">
      <div class="flex flex-col 1000:flex-row items-center justify-between gap-[54px] pb-[100px] x:pb-[0]">
        <div class="w-full 1000:w-[40%] flex flex-col gap-[30px]">
          <h1 class="uppercase text-[30px] m:text-5xl font-extrabold leading-tight font-['Roboto']">Congratulations, <span class="text-accent-green">{{ userStore.user.first_name + ' ' + userStore.user.last_name }}</span></h1>
          <p class="text-[25px] m:text-[30px] manrope-medium">{{ userStore.user.email }}</p>
          <p class="text-[20px] m:text-2xl manrope-regular">If you entered an incorrect email, <br> please contact our support.</p>
          <div class="flex items-center gap-5">
            <IconComponent :h1="138" :w1="138" :h2="98" :w2="98" src="/images/welcome/earphone.svg"/>
            <div class="flex flex-col items-start gap-5">
              <div class="flex flex-col gap-[6px]">
                <h3 class="text-2xl manrope-regular">Write to support</h3>
                <p class="text-white text-[15px] text-opacity-60 font-light">You can also write to an online consultant,
                  <br> you can get the fastest answer here</p>
              </div>
              <ButtonComponent class="py-[11px] px-[38px]" type="blue">Ask a Question</ButtonComponent>
            </div>
          </div>
        </div>
        <div class="relative hidden x:block w-[80%] 1000:w-[60%] h-[700px]">
          <img class="absolute left-[0] 1260:left-[60px] h-full w-full" src="/images/welcome/characters_1x.webp" alt="characters">
        </div>
      </div>
    </div>
  </div>
  <FooterComponent/>
</template>

<style scoped>

</style>