<script setup>
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import BgProducts from '@/assets/bg-products.webp';
import FooterComponent from "@/components/FooterComponent.vue";
import {onBeforeRouteLeave} from "vue-router";
import MysteryBoxComponent from "@/components/MysteryBoxComponent.vue";
import PopularProductsComponent from "@/components/PopularProductsComponent.vue";
import ProductsCategory from "@/components/ProductsCategory.vue";
import MainProductsCatalog from "@/components/MainProductsCatalog.vue";
import AboutComponent from "@/components/AboutComponent.vue";
import MainBannerComponent from "@/components/MainBannerComponent.vue";
import {onMounted} from "vue";
import {useProductStore} from "@/stores/ProductStore.js";

onBeforeRouteLeave((to, from, next) => {

  window.scrollTo(0, 0);

  next();

})

const productStore = useProductStore()

onMounted(async () => {
    await productStore.fetchProducts()
    await productStore.fetchCategories();
})

</script>

<template>
  <div>
    <main>
      <MainBannerComponent/>
      <MysteryBoxComponent/>
      <div class="pt-[142px] flex items-center flex-col gap-[32px]">
        <div class="w-full flex flex-col gap-[200px]" :style="'background: url(' + BgProducts + ');'" style="background-size: cover; background-repeat: no-repeat">
          <PopularProductsComponent/>
          <ProductsCategory/>
        </div>
        <MainProductsCatalog/>
      </div>
      <AboutComponent/>
    </main>
    <FooterComponent/>
  </div>
</template>

<style>
  .startBannerSwiper .swiper-slide div {
    filter: brightness(0.9);
  }
  .startBannerSwiper .swiper-slide.swiper-slide-active div {
    filter: brightness(1);
  }
  /*.startBannerSwiper .swiper-slide:nth-child(1) {
    rotate: -8deg;
    scale: 0.9;
  }
  .startBannerSwiper .swiper-slide:nth-child(3) {
    rotate: 8deg;
    scale: 0.9;
  }
  .startBannerSwiper .swiper-slide.swiper-slide-active {
    rotate: 0deg;
    scale: 1;
  }
  .startBannerSwiper .swiper-slide.swiper-slide-prev {
    rotate: -8deg;
    scale: 1;
  }
  .startBannerSwiper .swiper-slide.swiper-slide-next {
    rotate: 8deg;
    scale: 1;
  }*/
</style>