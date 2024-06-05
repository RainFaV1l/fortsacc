<script setup>

import Header from "@/components/header/Header.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import {onMounted} from "vue";
import {useNewsStore} from "@/stores/NewsStore.js";
import {useRoute} from "vue-router";

const newsStore = useNewsStore()
const route = useRoute()

onMounted(() => {
  newsStore.fetchShowNews(route.params.id)
})
</script>

<template>
  <div class="min-h-full flex flex-col" style="background-size: cover; background-position: center">
    <Header/>
    <main class="flex-auto border-b border-white border-opacity-10">
      <div class="container py-[100px]">
        <div class="flex items-center gap-3">
          <router-link to="/">Home</router-link>
          <span>></span>
          <router-link to="/news">News</router-link>
          <span>></span>
          <router-link to="/">{{ newsStore.showNews.name }}</router-link>
        </div>
        <div class="flex flex-col gap-[30px] mt-[30px]">
          <Transition>
            <div class="h-[550px] w-full rounded" :class="{ 'image' : !newsStore.isLoading }">
              <img class="h-full w-full rounded object-cover" @load="newsStore.isLoading = true" :src="newsStore.showNews.path" alt="Изображение">
            </div>
          </Transition>
          <div class="flex flex-col gap-[30px] border-b border-white pb-[30px]">
            <h1 class="text-[48px] font-bold">{{ newsStore.showNews.name }}</h1>
            <div class="flex flex-col gap-[15px]" v-html="newsStore.showNews.description"></div>
          </div>
        </div>
      </div>
    </main>
    <FooterComponent/>
  </div>
</template>

<style scoped>
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

  p, .image {
    animation: pulse-bg 1s infinite;
    transition: all .3s ease-in-out;
  }
  @keyframes pulse-bg {
    0% {
      background-color: #eee;
    }
    50% {
      background-color: #eaeaea;
    }
    100% {
      background-color: #eee;
    }
  }
</style>