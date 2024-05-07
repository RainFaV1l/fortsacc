<script setup>
import ButtonComponent from "@/components/UI/ButtonComponent.vue";
import {useProductStore} from "@/stores/ProductStore.js";

const productStore = useProductStore()

</script>

<template>
  <div class="container">
    <div class="flex flex-col items-center gap-[32px]">
      <h2 class="text-5xl font-['Roboto'] font-bold uppercase">Product <span class="text-accent-green">category</span></h2>
      <div class="flex items-center gap-[14px]">
        <ButtonComponent @click="productStore.setCategory({ id: null })" :class="{ active : !productStore.category.id }" class="py-[14px] px-5" type="blue" :border="true">All</ButtonComponent>
        <ButtonComponent @click="productStore.setCategory(category)" :class="{ active : productStore.category.id === category.id }" class="py-[14px] px-5" type="blue" :border="true" v-for="category in productStore.categories" :key="category.id">{{ category.name }}</ButtonComponent>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>