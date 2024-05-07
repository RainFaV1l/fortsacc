<script setup>
  import {ArrowUpIcon} from "@heroicons/vue/16/solid/index.js";
  import {useMainStore} from "@/stores/MainStore.js";
  import {onBeforeUnmount, onMounted} from "vue";

  const mainStore = useMainStore()

  const scrollButton = () => {
    const scrollPosition = window.scrollY;
    const triggerPosition = 600; // Расстояние прокрутки для отображения кнопки (в пикселях)
    if (scrollPosition > triggerPosition) {
      mainStore.showUp = true
      return
    }
    mainStore.$state.showUp = false
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Слушаем событие scroll при монтировании компонента
  onMounted(() => {
    window.addEventListener('scroll', scrollButton);
  });

  // Отписываемся от события scroll при удалении компонента
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', scrollButton);
  });
</script>

<template>
  <button @scroll="scrollButton" @click="scrollToTop"
          type="button" class="fixed right-[30px] bottom-[30px] h-[60px] w-[60px]
          bg-gradient-blue-light text-white rounded-full justify-center
          flex items-center hover:bg-[#432EF6FF] transition-all duration-300"
          :style="mainStore.showUp ? 'visibility: visible; opacity: 1;' : 'visibility: hidden; opacity: 0;'">
    <ArrowUpIcon class="h-6 w-6"/>
  </button>
</template>

<style scoped>

</style>