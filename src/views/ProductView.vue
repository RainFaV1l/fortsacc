<script setup>
import FooterComponent from "@/components/FooterComponent.vue";
import {onMounted, reactive, ref} from "vue";
import {onBeforeRouteLeave, onBeforeRouteUpdate, useRoute} from "vue-router";
import BgProducts from "@/assets/bg-products.webp";
import ReceiveItem from "@/components/ReceiveItem.vue";
import ProductItem from "@/components/ProductItem.vue";
import {Swiper, SwiperSlide} from "swiper/vue";
import {EffectCoverflow, Navigation} from "swiper/modules";
import ProductBannerComponent from "@/components/ProductBannerComponent.vue";
import {useProductStore} from "@/stores/ProductStore.js";

const productStore = useProductStore()
const router = useRoute()

onMounted(async () => {
  await productStore.fetchProduct(router.params.id)
})

onBeforeRouteLeave((to, from, next) => {

  window.scrollTo(0, 0);

  next();

})

const receiveItems = [
  {
    number: '01',
    name: 'Choose Account!',
    description: 'Add the product you want to buy to the cart or press the buy now button!',
  },
  {
    number: '02',
    name: 'Enter YourDetails',
    description: 'Fill in your information completely to become a member.',
  },
  {
    number: '03',
    name: 'Make Payment!',
    description: 'Choose how you want to make your payment and complete your payment.',
  },
  {
    number: '04',
    name: 'Get Your Account',
    description: 'You can see your order information on the “My Orders” page.',
  },
]

const swiperPopularProducts = ref();

const modules = reactive([EffectCoverflow, Navigation])

function onSwiperPopularProducts(swiper) {
  swiperPopularProducts.value = swiper
}
const swiperNextSlide = () => {
  swiperPopularProducts.value.slideNext()
};
const swiperPrevSlide = () => {
  swiperPopularProducts.value.slidePrev()
};

const productId = ref()

// Загрузка данных нового продукта при изменении маршрута
onBeforeRouteUpdate((to, from, next) => {
  productId.value = to.params.id;
  productStore.fetchProduct(productId.value).then(() => {
    window.scrollTo(0, 0);
    next();
  });
});

</script>

<template>
  <div>
    <main>
      <ProductBannerComponent/>
      <div class="border-b border-white border-opacity-10" :style="'background: url(' + BgProducts + ');'" style="background-size: cover; background-repeat: no-repeat">
        <div class="container pt-[70px] pb-[170px]">
          <h2 class="text-[25px] sl:text-5xl font-['Roboto'] font-bold uppercase text-center">How do you receive <span class="text-accent-green">the product?</span></h2>
          <div class="mt-[71px] flex flex-wrap justify-center gap-[28px]">
            <ReceiveItem v-for="receiveItem in receiveItems" :item="receiveItem" :key="receiveItem.id"/>
          </div>
        </div>
        <div class="container pb-[100px]">
          <div class="flex flex-col gap-[40px]">
            <div class="flex justify-between items-center gap-7 w-full" v-if="productStore.product.populars && productStore.product.populars.length > 0">
              <h2 class="text-5xl font-['Roboto'] font-bold uppercase"><span class="text-accent-green">Popular</span> products</h2>
              <div class="flex items-center gap-3">
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
            <div class="flex items-center justify-between gap-[30px] w-full" v-if="productStore.product.populars && productStore.product.populars.length > 4">
              <swiper
                  @swiper="onSwiperPopularProducts"
                  :loop="true"
                  ref="swiperRef"
                  :effect="'navigation'"
                  :grabCursor="true"
                  :slidesPerView="4"
                  :navigation="false"
                  :modules="modules"
                  :space-between="26"
                  class="popularProductsSwiper">
                <swiper-slide v-for="(item, index) in productStore.product.populars" :key="index"><ProductItem :item="{ ...item, mini: true }"/></swiper-slide>
              </swiper>
            </div>
            <router-link v-for="(item, index) in productStore.product.populars" :key="index" :to="{ name: 'product', params: { id: item.id } }">
              <div class="flex items-center justify-between gap-[30px] w-full" v-if="productStore.product.populars && productStore.product.populars.length > 0">
                <ProductItem class="w-[25%]" :item="{ ...item, mini: true }"/>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </main>
    <FooterComponent/>
  </div>
</template>

<style scoped>

</style>