<template>
  <div class="container">
    <div class="text-center flex items-center flex-col gap-[41px]">
      <h2 class="text-[32px] m:text-5xl font-['Roboto'] font-bold uppercase">Daily mystery <span class="text-accent-green">box giveaway</span>
      </h2>
      <div class="flex flex-col xl:flex-row items-center justify-between gap-[30px]">
        <div v-for="(item, index) in mysteryBoxItems" :key="index">
          <MysteryBoxItem v-if="index !== 1" :item="item"/>
          <div v-else class="flex items-center flex-col gap-[32px]">
            <MysteryBoxItem :item="item"/>
            <router-link :to="{ name: 'mysteryBox' }" class="hidden xl:block">
              <ButtonComponent class="py-[15px] px-[50px]" type="blue">Take participate</ButtonComponent>
            </router-link>
          </div>
        </div>
      </div>
      <router-link :to="{ name: 'mysteryBox' }" class="xl:hidden">
        <ButtonComponent class="py-[15px] px-[50px]" type="blue">Take participate</ButtonComponent>
      </router-link>
    </div>
  </div>
</template>

<script setup>
  import ButtonComponent from "@/components/UI/ButtonComponent.vue";
  import MysteryBoxItem from "@/components/MysteryBoxItem.vue";
  import {reactive} from "vue";

  const mysteryBoxItems = reactive([
    {name: 'mystery box', type: '', color: '#604FFF', image: '/images/mystery-box/mystery-box.webp'},
    {name: 'mystery box', type: '', color: '#4FF4FF', image: '/images/mystery-box/mystery-box.webp'},
    {name: 'mystery box', type: '', color: '#B24FFF', image: '/images/mystery-box/mystery-box.webp'},
  ])
</script>

<style scoped>

</style>