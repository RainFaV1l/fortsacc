<script setup> 
import ButtonComponent from "@/components/UI/ButtonComponent.vue"; 
import BenefitItem from "@/components/BenefitItem.vue"; 
import {Swiper, SwiperSlide} from "swiper/vue"; 
import SliderItem from "@/components/SliderItem.vue";
import {onMounted, reactive, ref} from "vue";
import {EffectCoverflow, Navigation} from "swiper/modules"; 
import BgImage from "@/assets/bg.webp"; 
import Header from "@/components/header/Header.vue"; 
import router from "@/router/index.js";
import {useTimer} from "@/mixins/timer.js";
import Loading from "@/components/UI/Loading.vue";

const url = ref(`background: url(${BgImage});`) 
 
const benefitItems = reactive([ 
  { name: '15k+', description: 'satisfied clients' }, 
  { name: '70k+', description: 'purchases' }, 
  { name: '200+', description: 'reviews' }, 
]) 
const sliderItems = reactive([ 
  { id: 1, name: 'pickaxe minty', description: 'Name atributica', price: 4.5, image: '/images/products/product-1.webp' }, 
  { id: 2, name: 'pickaxe minty', description: 'Name atributica', price: 4.5, image: '/images/products/product-2.webp' }, 
  { id: 3, name: 'pickaxe minty', description: 'Name atributica', price: 4.5, image: '/images/products/product-1.webp' }, 
]) 
 
const modules = reactive([EffectCoverflow, Navigation]) 
 
const swiperOptions = { 
  perSlideOffset: 18, 
  perSlideRotate: 2, 
  rotate: false, 
  slideShadows: true, 
};

// Получаем текущую дату и время
const currentDate = new Date();

// Устанавливаем время на начало текущего дня (00:00:00)
const startOfDay = new Date(currentDate);

// Количество миллисекунд на начало текущего дня
startOfDay.setHours(0, 0, 0, 0);

// Вычисляем разницу в миллисекундах между текущим временем и началом дня
const millisecondsPassedToday = currentDate - startOfDay;

// Количество миллисекунд за 1 день
const millisecondsDay = 1000 * 60 * 60 * 24;

// Получение количества оставшихся миллисекунд за данный день
const {time, start} = useTimer(millisecondsDay - millisecondsPassedToday)

onMounted(() => {

  // Запуск таймера
  start()

})

</script> 
 
<template> 
  <div :style="url" style="background-size: cover; background-position: center"> 
    <Header/> 
    <div class="container"> 
      <div class="flex flex-col xxl:flex-row item-center xxl:items-end gap-[50px] justify-between py-12 pb-[200px]"> 
        <div class="flex flex-col gap-[113px]"> 
          <div class="flex flex-col gap-8"> 
            <div class="flex flex-col gap-6 text-center xxl:text-start"> 
              <h1 class="uppercase text-[32px] m:text-[52px] font-extrabold leading-tight font-['Roboto']">Shop Fortnite <span class="text-accent-green">account</span></h1> 
              <p class="text-accent-light-blue manrope-semibold xxl:w-[460px]">Best fortnite account store. Mystical boxes, rare accounts, reasonable prices. All this can be bought in our store. You can also participate in the distribution of skins</p> 
            </div> 
            <div class="flex items-center flex-col sl:flex-row justify-center xxl:justify-start  gap-5 manrope-extrabold"> 
              <ButtonComponent @click="router.push({ name: 'news' })" class="py-[15px] px-[63px]" type="blue">News</ButtonComponent> 
              <ButtonComponent @click="router.push({ name: 'reviews' })" class="py-[15px] px-[63px]" :border="true" type="blue">Reviews</ButtonComponent>
            </div> 
          </div> 
          <div class="flex items-center gap-[15px] m:gap-[34px] flex-wrap m:flex-nowrap justify-center xxl:justify-start"> 
            <BenefitItem :item="{ ...item, index: index, count: benefitItems.length }" v-for="(item, index) in benefitItems" :key="index"/> 
          </div> 
        </div> 
        <div class="flex items-center flex-col gap-[22px] w-[100%] xxl:[60%] overflow-hidden mx-[auto] xxl:mx-[0px]"> 
          <div class=""> 
            <swiper 
              :loop="true" 
              :effect="'coverflow'" 
              :grabCursor="true" 
              :modules="modules" 
              :centeredSlides="true" 
              :slidesPerView="3" 
              :initial-slide="2" 
              :navigation="false" 
              :centered-slides="true" 
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
            <swiper-slide class="flex justify-center slide" v-for="(item, index) in sliderItems" :key="index"> 
              <SliderItem :item="item"/> 
            </swiper-slide> 
          </swiper> 
          </div>
          <div>
            <div class="flex flex-col items-center gap-[5px] py-[13px] px-[51px] border border-accent-green rounded-[10px] h-[100px]" style="background: linear-gradient(180deg, rgba(156.44, 255, 79, 0.20) 0%, rgba(156.44, 255, 79, 0) 100%)">
              <h3 class="text-[28px] text-accent-green font-bold">{{`${time.hours.value}:${time.minutes.value}:${time.seconds.value}`}}</h3>
              <p class="text-accent-light-blue text-sm">Ежедневная раздача</p>
            </div>
          </div>
        </div> 
      </div> 
    </div> 
  </div> 
</template> 
 
<style scoped> 
.slide{
  width: 318px !important;
}  
.swiper-slide-next{
  transform: translate3d(-150px, 0px, -100px) rotateX(0deg) rotateY(0deg) scale(1) rotateZ(17deg) !important;
}
.swiper-slide-prev{
  transform: translate3d(150px, 0px, -100px) rotateX(0deg) rotateY(0deg) scale(1) rotateZ(-17deg) !important;
}
.swiper-3d {
    perspective: 500px !important;
}
</style>