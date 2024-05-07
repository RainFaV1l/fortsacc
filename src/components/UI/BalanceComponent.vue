<script setup>

import ButtonComponent from "@/components/UI/ButtonComponent.vue";
</script>

<template>
  <div class="flex items-center gap-[30px]">
    <div class="flex items-center gap-[15px]">
      <div class="h-5 w-5">
        <img class="h-full w-full" src="/images/profile/wallet.svg" alt="Иконка">
      </div>
      <p class="text-lg manrope-regular">120 $</p>
    </div>
    <ButtonComponent class="py-3 px-[43px]" type="blue">Top up balance</ButtonComponent>
  </div>
</template>

<style scoped>

</style>