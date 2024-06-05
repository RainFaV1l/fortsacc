<script setup>

import Header from "@/components/header/Header.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import {onMounted, ref} from "vue";
import {useInfiniteScroll} from "@vueuse/core";
import {useNewsStore} from "@/stores/NewsStore.js";
import News from "@/components/News.vue";
import {useRouter} from "vue-router";
import {useUserStore} from "@/stores/UserStore.js";

const newsStore = useNewsStore()
const userStore = useUserStore()

const router = useRouter()

const listEl = ref(null)

const fetchingData = ref(true)

onMounted(async () => {
  if(newsStore.currentPage === 1) {
    fetchingData.value = false
    userStore.isLoading = true
    newsStore.news = await newsStore.fetchNews()
    fetchingData.value = true
    userStore.isLoading = false
  }
})

useInfiniteScroll(listEl, async () => {
  fetchingData.value = false
  await newsStore.getNewsOnScroll()
  fetchingData.value = true
}, { distance: 10 })


</script>

<template>
    <div class="min-h-full flex flex-col" style="background-size: cover; background-position: center">
        <Header/>
        <main class="flex-auto border-b border-white border-opacity-10">
          <div class="container py-[100px]">
            <div class="flex flex-col gap-[50px]">
              <h1 class="text-5xl font-bold text-center">Новости для игры Fortnite</h1>
              <div class="flex flex-col gap-[30px]">
                <Transition>
                  <div class="grid grid-cols-4 grid-rows-2 gap-[30px] min-h-[700px] w-full">
                    <News v-for="(item, index) in newsStore.news" :key="item.id" :index="index" :item="item" @click="router.push({ name: 'showNews', params: { id: item.id } })"/>
                  </div>
                </Transition>
                <div class="h-7" ref="listEl"></div>
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
</style>