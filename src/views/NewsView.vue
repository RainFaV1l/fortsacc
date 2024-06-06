<script setup>

import Header from "@/components/header/Header.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import {onMounted, ref} from "vue";
import {useInfiniteScroll} from "@vueuse/core";
import {useNewsStore} from "@/stores/NewsStore.js";
import News from "@/components/News.vue";
import {onBeforeRouteLeave, useRouter} from "vue-router";
import {useUserStore} from "@/stores/UserStore.js";

const newsStore = useNewsStore()
const userStore = useUserStore()

const router = useRouter()

const listEl = ref(null)

const fetchingData = ref(true)

const show = ref(false)

onMounted(async () => {
  if(newsStore.currentPage === 1) {
    fetchingData.value = false
    userStore.isLoading = true
    newsStore.news = await newsStore.fetchNews()
    fetchingData.value = true
    userStore.isLoading = false
    show.value = true
  }
})

onBeforeRouteLeave((to, from, next) => {
  show.value = false
  setTimeout(() => next(), 10)
})

useInfiniteScroll(listEl, async () => {
  fetchingData.value = false
  await newsStore.getNewsOnScroll()
  fetchingData.value = true
}, { distance: 10 })


</script>

<template>
    <div class="min-h-full flex flex-col font-['Raleway']" style="background-size: cover; background-position: center">
        <Header/>
        <main class="flex-auto border-b border-white border-opacity-10">
          <div class="container py-[50px] md:py-[100px]">
            <div class="flex flex-col gap-[30px] md:gap-[50px]">
              <h1 class="text-3xl lg:text-5xl font-bold text-center">Новости для игры Fortnite</h1>
              <div class="flex flex-col gap-[20px] md:gap-[30px]">
                <Transition>
                  <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-rows-2 gap-[30px] min-h-[700px] w-full">
                    <News v-for="(item, index) in newsStore.news" :key="item.id" :index="index" :item="item" @click="router.push({ name: 'showNews', params: { id: item.id } })"/>
                  </div>
                </Transition>
                <div v-show="show" class="h-7" ref="listEl"></div>
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