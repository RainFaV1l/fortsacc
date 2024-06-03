<script setup>
import ProductItem from "@/components/ProductItem.vue";
import {Swiper, SwiperSlide} from "swiper/vue";
import {onMounted, reactive, ref} from "vue";
import {EffectCoverflow, Navigation} from "swiper/modules";
import {useProductStore} from "@/stores/ProductStore.js";

const modules = reactive([EffectCoverflow, Navigation])

const productStore = useProductStore()

const swiperOptions = {
    // Other Swiper options can be added here
    perSlideOffset: 18,
    perSlideRotate: 2,
    rotate: false,
    slideShadows: true,
};

const swiperPopularProducts = ref();

function onSwiperPopularProducts(swiper) {
    swiperPopularProducts.value = swiper
}
const swiperNextSlide = () => {
    swiperPopularProducts.value.slideNext()
};
const swiperPrevSlide = () => {
    swiperPopularProducts.value.slidePrev()
};

</script>

<template>
  <div class="container flex items-center flex-col gap-[32px]">
    <div class="flex flex-col m:flex-row text-center m:text-start justify-between items-center gap-7 w-full">
      <h2 class="text-5xl font-['Roboto'] font-bold uppercase"><span class="text-accent-green">Popular</span> products</h2>
      <div class="flex items-center gap-3" v-if="productStore.getPopularProducts.length >= 3">
        <button @click="swiperPrevSlide" class="p-[18px] border border-white border-opacity-15 rounded-[10px] transition hover:bg-white">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.86666 6.99335L7.18 5.68001L9.31999 3.54001C9.77333 3.09335 10.5467 3.41335 10.5467 4.05335V8.20668V11.9467C10.5467 12.5867 9.77333 12.9067 9.31999 12.4533L5.86666 9.00001C5.31333 8.45335 5.31333 7.54668 5.86666 6.99335Z" fill="#9CFF4F"/>
          </svg>
        </button>
        <button @click="swiperNextSlide" class="p-[18px] border border-white border-opacity-15 rounded-[10px] transition hover:bg-white">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.1333 6.99335L8.81997 5.68001L6.67997 3.54001C6.22664 3.09335 5.45331 3.41335 5.45331 4.05335V8.20668V11.9467C5.45331 12.5867 6.22664 12.9067 6.67997 12.4533L10.1333 9.00001C10.6866 8.45335 10.6866 7.54668 10.1333 6.99335Z" fill="#9CFF4F"/>
          </svg>
        </button>
      </div>
    </div>
    <div class="flex items-center justify-between gap-[30px] w-full" v-if="productStore.getPopularProducts.length > 0">
      <swiper
          v-if="productStore.getPopularProducts.length >= 3"
          @swiper="onSwiperPopularProducts"
          :loop="false"
          ref="swiperRef"
          :effect="'navigation'"
          :grabCursor="true"
          :slidesPerView="3"
          :slidesPerGroup="3"
          :navigation="false"
          :modules="modules"
          :space-between="31"
          :breakpoints="{ 
            300: { 
              slidesPerView: 1,
              slidesPerGroup: 1, 
            }, 
            768: { 
              slidesPerView: 2,
              slidesPerGroup: 2, 
            }, 
            1000: { 
              slidesPerView: 3,
              slidesPerGroup: 3, 
            }
          }"
          class="popularProductsSwiper">
        <swiper-slide v-for="(item, index) in productStore.getPopularProducts" :key="index"><ProductItem :item="item"/></swiper-slide>
      </swiper>
      <div v-else class="flex items-center justify-start gap-[30px] w-full">
        <template v-if="productStore.getPopularProducts.length > 0">
          <ProductItem v-for="(item, index) in productStore.getPopularProducts" :key="index" :item="item"/>
        </template>
        <template v-else>
          <p class="py-[100px] font-bold text-xl">
            Unfortunately, products in this category are out of stock :(
          </p>
        </template>
      </div>
    </div>
    <div v-else class="py-[100px] font-bold text-xl">
      Unfortunately, the goods are out of stock :(
    </div>
  </div>
</template>

<style scoped>

</style>