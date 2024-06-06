<script setup>

import Header from "@/components/header/Header.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import {onMounted, watch} from "vue";
import {useNewsStore} from "@/stores/NewsStore.js";
import {useRoute, useRouter} from "vue-router";
import {formatDate} from "@/mixins/formatDate.js";

const newsStore = useNewsStore()
const route = useRoute()
const router = useRouter()

const fetchNews = (id) => {
  newsStore.fetchShowNews(id);
};

onMounted(() => {
  fetchNews(route.params.id);
})

watch(
    () => route.params.id,
    (newId) => {
      fetchNews(newId);
    }
);

</script>

<template>
  <div class="min-h-full flex flex-col" style="background-size: cover; background-position: center">
    <Header/>
    <main class="flex-auto border-b border-white border-opacity-10 font-['Raleway']">
      <div class="container py-[50px] md:py-[100px]">
        <div class="flex items-center gap-3 text-sm md:text-lg">
          <router-link to="/">Home</router-link>
          <span>></span>
          <router-link to="/news">News</router-link>
          <span>></span>
          <router-link to="/">{{ newsStore.showNews.name }}</router-link>
        </div>
        <div class="flex flex-col gap-[30px] mt-[30px]">
          <Transition>
            <div class="md:h-[550px] w-full rounded" :class="{ 'image' : !newsStore.isLoading }">
              <img class="h-full w-full rounded object-cover" @load="newsStore.isLoading = true" :src="newsStore.showNews.path" alt="Изображение">
            </div>
          </Transition>
          <div class="flex flex-col gap-[15px] md:gap-[30px] border-b border-white pb-[30px]">
            <h2 class="text-[26px] md:text-[36px] lg:text-[48px] font-bold">{{ newsStore.showNews.name }}</h2>
            <div class="flex flex-col gap-[15px]" v-html="newsStore.showNews.description"></div>
          </div>
          <div class="flex flex-col gap-[30px]" v-if="newsStore.showNews.related && newsStore.showNews.related.length > 0">
            <h2 class="text-xl md:text-2xl lg:text-[32px] font-bold font-['Raleway']">Related Articles</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
              <div @click="router.push({ name: 'showNews', params: { id: news.id, } })" v-for="news in newsStore.showNews.related" :key="news.id" class="bg-[#121533] rounded p-[10px] flex flex-col gap-[10px] cursor-pointer">
                <div class="h-[160px] w-full">
                  <img class="h-full w-full rounded" :src="news.path" alt="Image">
                </div>
                <div class="flex flex-col items-start gap-[10px]">
                  <div class="bg-white rounded-full p-[5px] flex items-center gap-[10px]">
                    <div class="size-4 rounded-full bg-[#151938]"></div>
                    <p class="text-sm text-accent-dark-blue">{{ news.category.name }}</p>
                  </div>
                  <h3 class="text-lg font-bold">{{ news.name }}</h3>
                  <div class="flex items-center gap-[10px] text-sm">
                    <span>{{ formatDate(news.created_at) }}</span>
                    <span v-if="news.reading_time">•</span>
                    <span v-if="news.reading_time">{{ news.reading_time }} min read</span>
                  </div>
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