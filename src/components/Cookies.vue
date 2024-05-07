<script setup>

import ButtonComponent from "@/components/UI/ButtonComponent.vue";
import {useMainStore} from "@/stores/MainStore.js";

const mainStore = useMainStore()

</script>

<template>
  <div class="fixed bottom-[30px] left-[30px] z-30">
    <div class="flex flex-col items-start gap-[30px] bg-gradient-blue-light py-7 px-7 text-white rounded-[10px]">
      <p class="text-base w-[300px] font-semibold">This site uses cookies to store data. By continuing to use the site, you agree to work with dead files.</p>
      <ButtonComponent @click="mainStore.acceptCookies" class="py-[13px] px-[51px] text-base font-bold text-accent-dark-blue hover:text-white" type="white">Okay!</ButtonComponent>
    </div>
  </div>
</template>

<style scoped>

</style>