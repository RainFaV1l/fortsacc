<script setup>
  import {ref} from "vue";
  import SkeletonImage from "@/components/Skeleton/SkeletonImage.vue";
  import SkeletonNews from "@/components/Skeleton/SkeletonNews.vue";
  import {formatDate} from "@/mixins/formatDate.js";
  import Category from "@/components/UI/news/Category.vue";

  defineProps({
    item: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    }
  })
  const imageLoad = ref(false)
</script>

<template>
  <div class="flex flex-col gap-4 cursor-pointer font-['Raleway'] bg-[#121533] p-[15px] md:p-0 rounded md:bg-transparent justify-between md:justify-start" :class="{ 'md:row-span-2 md:col-span-3' : index === 0}">
    <Transition>
      <div v-show="imageLoad" class="w-full">
        <img :src="item.path" @load="imageLoad = true" alt="Картинка" class="h-full w-full rounded object-cover">
      </div>
    </Transition>
    <Transition>
      <div v-show="!imageLoad" class="h-full w-full" :class="{'image z-10' : !imageLoad}">
        <SkeletonImage :index="index" v-show="!imageLoad"/>
      </div>
    </Transition>
    <Transition>
      <div class="flex flex-col items-start gap-2" v-show="imageLoad">
        <Category :category="item.category.name"/>
        <p class="uppercase font-bold text-xl mt-2">{{ item.name }}</p>
      </div>
    </Transition>
    <div class="flex items-center gap-[10px] text-sm md:text-lg">
      <span>{{ formatDate(item.created_at) }}</span>
      <span v-if="item.reading_time">•</span>
      <span v-if="item.reading_time">{{ item.reading_time }} min read</span>
    </div>
    <Transition>
      <div class="flex flex-col gap-2" v-show="!imageLoad">
        <SkeletonNews/>
      </div>
    </Transition>
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
  .image {
    background-color: #eee;
    transition: all .3s ease-in-out;
    animation: pulse-bg 1s infinite;
  }
  @keyframes pulse-bg {
    0% {
      background-color: rgb(209 213 219);
    }
    50% {
      background-color: rgb(107 114 128);
    }
    100% {
      background-color: rgb(209 213 219);
    }
  }
</style>