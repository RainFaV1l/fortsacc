<script setup>
  import {ref} from "vue";
  import SkeletonImage from "@/components/Skeleton/SkeletonImage.vue";
  import SkeletonNews from "@/components/Skeleton/SkeletonNews.vue";

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
  <div class="flex flex-col gap-4 cursor-pointer" :class="{ 'row-span-2 col-span-3' : index === 0}">
    <Transition>
      <div v-show="imageLoad" class="h-full w-full" :class="{ 'h-[500px]' : index === 0 }">
        <img :src="item.path" @load="imageLoad = true" alt="Картинка" class="h-full w-full rounded object-cover">
      </div>
    </Transition>
    <Transition>
      <div v-show="!imageLoad" class="h-full w-full" :class="{ 'h-[500px]' : index === 0, 'image z-10' : !imageLoad, 'h-[200px]' : !imageLoad && index !== 0 }">
        <SkeletonImage :index="index" v-show="!imageLoad"/>
      </div>
    </Transition>
    <Transition>
      <div class="flex flex-col gap-2" v-show="imageLoad">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <p class="text-white text-opacity-60">Объявлено: {{ item.created_at }} 4 апр 2024</p>
          <p class="text-accent-green">{{ item.category.name }}</p>
        </div>
        <p class="uppercase font-bold">{{ item.name }}</p>
      </div>
    </Transition>
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