<script setup>

import FooterComponent from "@/components/FooterComponent.vue";
import ProfileUserInfoItemComponent from "@/components/UI/ProfileUserInfoItemComponent.vue";
import ButtonComponent from "@/components/UI/ButtonComponent.vue";
import Header from "@/components/header/Header.vue";
import {useUserStore} from "@/stores/UserStore.js";

const appUrl = import.meta.env.VITE_APP_URL;
const userStore = useUserStore()
</script>

<template>
  <Header/>
  <ProfileUserInfoItemComponent/>
  <div style="background: url('/images/purchases/bg/bg.webp') no-repeat top; background-size: cover">
    <div class="container pt-[70px] pb-[181px]">
      <div class="flex flex-col gap-[30px]">
        <div class="flex flex-col gap-5">
          <h2 class="text-[30px] manrope-semibold">Affiliate program</h2>
          <p class="text-[15px] manrope-regular">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem</p>
        </div>
        <div class="flex flex-col mx:flex-row mx:items-center gap-[10px] mx:gap-[40px]">
          <p class="text-2xl manrope-medium mx:w-[13%]">Referral link:</p>
          <div class="flex flex-col sl:flex-row sl:items-center gap-[15px] mx:w-[87%]">
            <input class="text-[14px] px-[25px] py-[24px] bg-[rgba(17,16,11,.3)] border border-[#897CFF] rounded-[10px] w-[100%]" type="text" :value="appUrl + 'register/' + userStore.user.referral_link">
            <ButtonComponent class="py-[15px] mx:py-[22px] px-[50px] mx:px-[78px]" type="blue">Copy link</ButtonComponent>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterComponent/>
</template>

<style scoped>

</style>