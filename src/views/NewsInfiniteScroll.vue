<script setup>
  import News from "@/components/News.vue";
  import {useRouter} from "vue-router";
  import {useNewsStore} from "@/stores/NewsStore.js";

  const router = useRouter()

  const newsStore = useNewsStore()

</script>

<template>
  <News v-for="(item, index) in newsStore.news" :key="item.id" :index="index" :item="item" @click="router.push({ name: 'showNews', params: { id: item.id } })"/>
</template>

<style scoped>

</style>