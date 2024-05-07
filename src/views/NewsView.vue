<script setup>

import Header from "@/components/header/Header.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import mainImage from "/public/images/news/main.jpg";

</script>

<template>
    <div class="min-h-full flex flex-col" :style="url" style="background-size: cover; background-position: center">
        <Header/>
        <main class="flex-auto border-b border-white border-opacity-10">
          <div class="container py-[100px]">
            <div class="flex flex-col gap-[50px]">
              <h1 class="text-5xl font-bold text-center">Новости для игры Fortnite</h1>
              <div class="flex flex-col gap-[30px]">
                <div class="grid grid-cols-4 grid-rows-2 gap-[30px]">
                  <div class="col-span-3 row-span-2 flex flex-col gap-4 cursor-pointer">
                    <div class="h-full w-full">
                      <img :src="mainImage" alt="Картинка" class="h-full w-full rounded object-cover">
                    </div>
                    <div class="flex flex-col gap-2">
                      <p class="text-white text-opacity-60">Объявлено: 4 апр 2024</p>
                      <p class="uppercase font-bold">Праздник фонарей Фортнайт 2024</p>
                    </div>
                  </div>
                  <div class="flex flex-col gap-4 cursor-pointer">
                    <div class="h-2/3 w-full">
                      <img :src="mainImage" alt="Картинка" class="h-full w-full rounded object-cover">
                    </div>
                    <div class="flex flex-col gap-2">
                      <p class="text-white text-opacity-60">Объявлено: 4 апр 2024</p>
                      <p class="uppercase font-bold">Праздник фонарей Фортнайт 2024</p>
                    </div>
                  </div>
                  <div class="flex flex-col gap-4 cursor-pointer">
                    <div class="h-2/3 w-full">
                      <img :src="mainImage" alt="Картинка" class="h-full w-full rounded object-cover">
                    </div>
                    <div class="flex flex-col gap-2">
                      <p class="text-white text-opacity-60">Объявлено: 4 апр 2024</p>
                      <p class="uppercase font-bold">Праздник фонарей Фортнайт 2024</p>
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-4 gap-[30px]">
                  <div class="flex flex-col gap-4 cursor-pointer">
                    <div class="h-2/3 w-full">
                      <img :src="mainImage" alt="Картинка" class="h-full w-full rounded object-cover">
                    </div>
                    <div class="flex flex-col gap-2">
                      <p class="text-white text-opacity-60">Объявлено: 4 апр 2024</p>
                      <p class="uppercase font-bold">Праздник фонарей Фортнайт 2024</p>
                    </div>
                  </div>
                  <div class="flex flex-col gap-4 cursor-pointer">
                    <div class="h-2/3 w-full">
                      <img :src="mainImage" alt="Картинка" class="h-full w-full rounded object-cover">
                    </div>
                    <div class="flex flex-col gap-2">
                      <p class="text-white text-opacity-60">Объявлено: 4 апр 2024</p>
                      <p class="uppercase font-bold">Праздник фонарей Фортнайт 2024</p>
                    </div>
                  </div>
                  <div class="flex flex-col gap-4 cursor-pointer">
                    <div class="h-2/3 w-full">
                      <img :src="mainImage" alt="Картинка" class="h-full w-full rounded object-cover">
                    </div>
                    <div class="flex flex-col gap-2">
                      <p class="text-white text-opacity-60">Объявлено: 4 апр 2024</p>
                      <p class="uppercase font-bold">Праздник фонарей Фортнайт 2024</p>
                    </div>
                  </div>
                  <div class="flex flex-col gap-4 cursor-pointer">
                    <div class="h-2/3 w-full">
                      <img :src="mainImage" alt="Картинка" class="h-full w-full rounded object-cover">
                    </div>
                    <div class="flex flex-col gap-2">
                      <p class="text-white text-opacity-60">Объявлено: 4 апр 2024</p>
                      <p class="uppercase font-bold">Праздник фонарей Фортнайт 2024</p>
                    </div>
                  </div>
                  <div class="flex flex-col gap-4 cursor-pointer">
                    <div class="h-2/3 w-full">
                      <img :src="mainImage" alt="Картинка" class="h-full w-full rounded object-cover">
                    </div>
                    <div class="flex flex-col gap-2">
                      <p class="text-white text-opacity-60">Объявлено: 4 апр 2024</p>
                      <p class="uppercase font-bold">Праздник фонарей Фортнайт 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <FooterComponent/>
    </div>
</template>

<style scoped>

</style>