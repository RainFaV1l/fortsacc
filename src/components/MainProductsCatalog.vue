<script setup>
import ProductItem from "@/components/ProductItem.vue";
import ButtonComponent from "@/components/UI/ButtonComponent.vue";
import {useProductStore} from "@/stores/ProductStore.js";

const productStore = useProductStore();

</script>

<template>
  <div class="container" id="catalog">
    <div class="flex items-center flex-col gap-[29px]">
      <div v-if="(productStore.products.length > 0 && !productStore.category.id) || (productStore.getProductsByCategory.length > 0 && productStore.category.id)">
        <div class="grid grid-cols-1 gap-[26px] xxl:grid-cols-4 xs:grid-cols-3 mx:grid-cols-2" v-if="!productStore.category.id">
          <ProductItem v-for="(item, index) in productStore.products" :key="index" :item="{ ...item, mini: true }"/>
        </div>
        <div class="grid grid-cols-1 gap-[26px] xxl:grid-col-4 xs:grid-cols-3 mx:grid-cols-2" v-else>
          <ProductItem v-for="(item, index) in productStore.getProductsByCategory" :key="index" :item="{ ...item, mini: true }"/>
        </div>
      </div>
      <div v-else class="py-[50px] font-bold text-xl">
        Unfortunately, the goods are out of stock :(
      </div>
      <ButtonComponent v-if="(productStore.products.length > 10 && !productStore.category.id) || (productStore.getProductsByCategory.length > 10 && productStore.category.id)" class="py-[15px] px-[41px]" type="blue" :border="true">Show more</ButtonComponent>
    </div>
  </div>
</template>

<style scoped>

</style>