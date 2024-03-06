<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import BgImage from "@/assets/bg.webp";
import {onMounted, reactive, ref} from "vue";
import {Swiper, SwiperSlide, useSwiper} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import {EffectCoverflow, Navigation} from 'swiper/modules';
import BgProducts from '@/assets/bg-products.webp';
import AboutBg from '@/assets/about-bg.webp';
import BenefitItem from "@/components/BenefitItem.vue";
import MysteryBoxItem from "@/components/MysteryBoxItem.vue";
import SliderItem from "@/components/SliderItem.vue";
import ProductItem from "@/components/ProductItem.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import products from "@/data/products.js"
import {onBeforeRouteLeave} from "vue-router";

const url = ref(`background: url(${BgImage});`)
const modules = reactive([EffectCoverflow, Navigation])
const swiperOptions = {
  // Other Swiper options can be added here
  perSlideOffset: 18,
  perSlideRotate: 2,
  rotate: false,
  slideShadows: true,
};
const benefitItems = reactive([
  { name: '15k+', description: 'satisfied clients' },
  { name: '70k+', description: 'purchases' },
  { name: '200+', description: 'reviews' },
])
const sliderItems = reactive([
  { name: 'pickaxe minty', description: 'Name atributica', price: 4.5, image: '/products/product-1.webp' },
  { name: 'pickaxe minty', description: 'Name atributica', price: 4.5, image: '/products/product-2.webp' },
  { name: 'pickaxe minty', description: 'Name atributica', price: 4.5, image: '/products/product-1.webp' },
])
const mysteryBoxItems = reactive([
  { name: 'mystery box', type: 'nft', color: '#604FFF', image: '/mystery-box/mystery-box.webp' },
  { name: 'mystery box', type: 'nft', color: '#4FF4FF', image: '/mystery-box/mystery-box.webp' },
  { name: 'mystery box', type: 'nft', color: '#B24FFF', image: '/mystery-box/mystery-box.webp' },
])
const popularProducts = reactive([
  { name: 'mystery box', description: 'Name atributica', image: '/images/popular-products/image-1.webp',
    bg: '/images/popular-products/bg.webp', price: 4.5, color: '/images/popular-products/image-bg.svg', },
  { name: 'mystery box', description: 'Name atributica', image: '/images/popular-products/image-1.webp',
    bg: '/images/popular-products/bg.webp', price: 4.5, color: '/images/popular-products/image-bg.svg', },
  { name: 'mystery box', description: 'Name atributica', image: '/images/popular-products/image-1.webp',
    bg: '/images/popular-products/bg.webp', price: 4.5, color: '/images/popular-products/image-bg.svg', },
  { name: 'mystery box', description: 'Name atributica', image: '/images/popular-products/image-1.webp',
    bg: '/images/popular-products/bg.webp', price: 4.5, color: '/images/popular-products/image-bg.svg', },
])

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

onBeforeRouteLeave((to, from, next) => {

  window.scrollTo(0, 0);

  next();

})

</script>

<template>
  <div>
    <main>
      <div :style="url" style="background-size: cover; background-position: center">
        <HeaderComponent/>
        <div class="container">
          <div class="flex items-end justify-between py-12 pb-[200px]">
            <div class="flex flex-col gap-[113px] w-1/2">
              <div class="flex flex-col gap-8">
                <div class="flex flex-col gap-6">
                  <h1 class="uppercase text-[52px] font-extrabold leading-tight font-['Roboto']">Shop Fortnite <span class="text-accent-green">account</span></h1>
                  <p class="text-accent-light-blue manrope-semibold">Best fortnite account store. Mystical boxes, rare accounts, reasonable prices. All this can be bought in our store. You can also participate in the distribution of skins</p>
                </div>
                <div class="flex items-center gap-5">
                  <button class="button-fill gradient-blue py-[15px] px-[63px] manrope-extrabold">News</button>
                  <button class="button-outline button-hover-green-gradient py-[15px] px-[52px]">Reviews</button>
                </div>
              </div>
              <div class="flex items-center gap-[34px]">
                <BenefitItem :item="{ ...item, index: index, count: benefitItems.length }" v-for="(item, index) in benefitItems" :key="index"/>
              </div>
            </div>
            <div class="flex items-center flex-col gap-[22px] w-1/2 mr-[100px]">
              <swiper
                  :effect="'coverflow'"
                  :grabCursor="true"
                  :modules="modules"
                  :centeredSlides="true"
                  :slidesPerView="3"
                  :initial-slide="1"
                  :navigation="false"
                  :coverflowEffect="{
                    rotate: 0,
                    stretch: 150,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                  }"
                  :options="swiperOptions"
                  class="startBannerSwiper"
              >
                <swiper-slide class="flex justify-center w-full" v-for="(item, index) in sliderItems" :key="index">
                  <SliderItem :item="item"/>
                </swiper-slide>
              </swiper>
              <div class="mr-[-390px] flex flex-col items-center gap-[5px] py-[13px] px-[51px] border border-accent-green rounded-[10px]" style="background: linear-gradient(180deg, rgba(156.44, 255, 79, 0.20) 0%, rgba(156.44, 255, 79, 0) 100%)">
                <h3 class="text-[28px] text-accent-green font-bold">11:30:28</h3>
                <p class="text-accent-light-blue text-sm">Ежедневная раздача</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="text-center flex items-center flex-col gap-[41px]">
          <h2 class="text-5xl font-['Roboto'] font-bold uppercase">Daily mystery <span class="text-accent-green">box giveaway</span></h2>
          <div class="flex items-center justify-between gap-[30px]">
            <div v-for="(item, index) in mysteryBoxItems" :key="index">
              <MysteryBoxItem v-if="index !== 1" :item="item" />
              <div v-else class="flex items-center flex-col gap-[32px]">
                <MysteryBoxItem :item="item"/>
                <button class="button-fill gradient-blue py-[15px] px-[50px]">Take participate</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pt-[142px] flex items-center flex-col gap-[32px]">
        <div class="w-full flex flex-col gap-[200px]" :style="'background: url(' + BgProducts + ');'" style="background-size: cover; background-repeat: no-repeat">
          <div class="container flex items-center flex-col gap-[32px]">
            <div class="flex justify-between items-center gap-7 w-full">
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
            <div class="flex items-center justify-between gap-[30px] w-full">
              <swiper
                  @swiper="onSwiperPopularProducts"
                  :loop="true"
                  ref="swiperRef"
                  :effect="'navigation'"
                  :grabCursor="true"
                  :slidesPerView="3"
                  :navigation="false"
                  :modules="modules"
                  :space-between="31"
                  class="popularProductsSwiper">
                <swiper-slide v-for="(item, index) in popularProducts" :key="index"><ProductItem :item="item"/></swiper-slide>
              </swiper>
            </div>
          </div>
          <div class="container">
            <div class="flex flex-col items-center gap-[32px]">
              <h2 class="text-5xl font-['Roboto'] font-bold uppercase">Product <span class="text-accent-green">category</span></h2>
              <div class="flex items-center gap-[14px]">
                <button class="button-outline py-[14px] px-5 active hover:bg-gradient-blue">All</button>
                <button class="button-outline py-[14px] px-5 hover:bg-gradient-blue">Skins account</button>
                <button class="button-outline py-[14px] px-5 hover:bg-gradient-blue">OG account</button>
                <button class="button-outline py-[14px] px-5 hover:bg-gradient-blue">Emotes account</button>
                <button class="button-outline py-[14px] px-5 hover:bg-gradient-blue">Pickaxes account</button>
                <button class="button-outline py-[14px] px-5 hover:bg-gradient-blue">Skins</button>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="flex items-center flex-col gap-[29px]">
            <div class="grid grid-cols-4 gap-[26px]">
              <ProductItem v-for="(item, index) in products" :key="index" :item="{ ...item, mini: true }"/>
            </div>
            <button class="button-outline py-[15px] px-[41px] hover:bg-gradient-blue">Show more</button>
          </div>
        </div>
      </div>
      <div class="mt-[40px]" :style="`background: url('${AboutBg}')`" style="background-repeat: no-repeat; background-size: cover">
        <div class="container py-[155px]">
          <div class="flex flex-col items-center gap-6 text-center">
            <h2 class="uppercase text-[62px] font-bold font-['Roboto']">Why are we <span class="text-accent-green">better?</span></h2>
            <p class="text-base text-accent-light-blue manrope-semibold">On Accempire you can quickly and easily find the accounts you are looking for with the best price.You do
              <br> not need to make search on marketplaces or search for accounts one by one anymore! Accempire does
              <br> this for you, Accempire, listing it for the best price on the website! Also, due to the advanced support
              <br> system, even the smallest problem is being solved during the shortest time.</p>
          </div>
        </div>
      </div>
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
  .startBannerSwiper .swiper-slide:nth-child(1) {
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
  button.active {
    background: linear-gradient(291deg, #604FFF 0%, #897CFF 100%);
  }
</style>