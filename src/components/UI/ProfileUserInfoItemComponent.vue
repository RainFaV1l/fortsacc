<template>
  <div style="background: url('/images/purchases/head-bg/bg.webp') no-repeat top; background-size: cover">
    <div class="container py-[100px] mx:py-[40px]">
      <div class="flex flex-col mx:flex-row gap-[200px] items-center mx:gap-[30px]">
        <div class="relative w-[217px]">
          <div class="absolute top-[-70px]">
            <div class="h-[217px] w-[217px] bg-[#151938] bg-opacity-[67%] rounded-full flex items-center justify-center">
              <div class="h-[185px] w-[185px]">
                <img class="h-full w-full rounded-full object-cover" src="/images/purchases/avatar/avatar.webp" alt="Аватарка">
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-[20px]">
          <h1 class="uppercase text-4xl roboto-bold">User name</h1>
          <!--<BalanceComponent/>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import BalanceComponent from "@/components/UI/BalanceComponent.vue";
</script>

<style scoped>

</style>