<script setup>
import Header from "@/components/header/Header.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import {onMounted, ref} from "vue";
import BgImage from "@/assets/bg.webp";
import ButtonComponent from "@/components/UI/ButtonComponent.vue";

const url = ref(`background: url(${BgImage});`)

onMounted(() => {
  const body = document.querySelector('body')
  const app = document.querySelector('#app')
  const wrapper = document.querySelector('.wrapper')
  body.style.height = '100%';
  app.style.height = '100%';
  wrapper.style.height = '100%';
})

</script>

<template>
  <div class="min-h-full flex flex-col" :style="url" style="background-size: cover; background-position: center">
    <Header/>
    <main class="flex-auto border-b border-white border-opacity-10 h-full flex justify-center items-center">
      <div class="container py-[45px]">
        <div class="flex flex-col items-center gap-[30px]">
          <div class="flex flex-col gap-4 text-center">
            <h2 class="text-7xl font-bold">404</h2>
            <p class="text-lg">Page not found :(</p>
          </div>
          <router-link :to="{ name: 'home' }"><button-component type="blue" class="py-[15px] px-[50px]">Go back home</button-component></router-link>
        </div>
      </div>
    </main>
    <FooterComponent/>
  </div>
</template>

<style scoped>

</style>