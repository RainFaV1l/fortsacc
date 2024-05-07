<script setup>
import FooterComponent from "@/components/FooterComponent.vue";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import BgImage from "@/assets/mystery-box-bg.png";
import BgSmoke from "/images/mystery-box/smoke/smoke.webp";
import BgRating from "/images/mystery-box/rating/rating.webp";
import ButtonComponent from "@/components/UI/ButtonComponent.vue";
import Header from "@/components/header/Header.vue";

const route = useRoute()

const url = ref(`background: url(${BgImage});`)
const urlRating = ref(`background: url(${BgRating});`)

const footerToBottom = () => {

  const routeName = route.matched[0].name

  const app = document.querySelector('#app')

  const wrapper = document.querySelector('.wrapper')

}

onMounted(() => {

  footerToBottom()

})
</script>

<template>
  <div class="flex flex-col" :style="url" style="background-size: cover; background-position: center">
    <Header/>
    <div class="flex-auto container pt-[150px] pb-[220px]">
      <div class="flex items-center gap-7 justify-between">
        <div class="flex flex-col gap-[60px] w-[55%]">
          <div class="flex flex-col gap-5">
            <h1 class="uppercase text-[52px] font-extrabold">Mystery Box</h1>
            <p class="text-base font-semibold text-accent-light-blue">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
          </div>
          <div class="flex items-center gap-5">
            <div class="flex flex-col gap-2">
              <p class="text-[#9197C2] text-[14px] font-medium uppercase">Before the giveaway starts</p>
              <h3 class="text-[#9CFF4F] text-[28px] font-bold">11:30:28</h3>
            </div>
            <div class="flex flex-col gap-2 pl-5 border-l border-white border-opacity-10">
              <p class="text-[#9197C2] text-[14px] font-medium uppercase">Participants</p>
              <h3 class="text-[28px] font-bold">235</h3>
            </div>
            <div class="flex flex-col gap-2 pl-5 border-l border-white border-opacity-10">
              <p class="text-[#9197C2] text-[14px] font-medium uppercase">Last winner</p>
              <h3 class="text-[28px] font-bold">Serth_kill</h3>
            </div>
          </div>
        </div>
        <div class="w-[45%]">
          <video autoplay loop muted playsinline style="width: 100%; height: auto; background-color: transparent;">
            <source src="/videos/mystery-box.mp4" type="video/mp4" style="background-color: #007aff">
          </video>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="flex items-center flex-col gap-[40px]">
        <h2 class="uppercase text-5xl font-bold text-center">How to <span class="text-accent-green">take part</span> in the draw</h2>
        <div class="flex items-center justify-between gap-[85px] w-full">
          <div class="flex flex-col gap-[7px] w-[21.4%]">
            <div class="relative h-[87px] w-[95px]">
              <span class="text-[64px] text-accent-green font-bold">01</span>
              <span class="absolute top-[21px] right-[2px] h-9 w-9 backdrop-blur rounded-full"><img class="h-full w-full" src="/images/mystery-box/success.svg" alt="Icon"></span>
            </div>
            <p class="font-medium text-[22px]">Авторизуйтесь <br> (если не авторизирован)</p>
          </div>
          <div class="flex flex-col gap-[7px] w-[21.4%]">
            <div class="relative h-[87px] w-[95px]">
              <span class="text-[64px] text-accent-green font-bold">02</span>
              <span class="absolute top-[21px] right-[2px] h-9 w-9 backdrop-blur rounded-full"><img class="h-full w-full" src="/images/mystery-box/success.svg" alt="Icon"></span>
            </div>
            <p class="font-medium text-[22px]">Сделайте репост в предложенных соц.сетях</p>
          </div>
          <div class="flex flex-col gap-[7px] w-[21.4%]">
            <div class="relative h-[87px] w-[95px]">
              <span class="text-[64px] text-accent-green font-bold">03</span>
              <span class="absolute top-[21px] right-[2px] h-9 w-9 backdrop-blur rounded-full"><img class="h-full w-full" src="/images/mystery-box/success.svg" alt="Icon"></span>
            </div>
            <p class="font-medium text-[22px]">Нажмите кнопку Учавствовать в раздаче</p>
          </div>
          <div class="flex items-start flex-col gap-[27px] w-[27.7%]">
            <div class="flex items-start flex-col gap-[15px]">
              <p class="text-[14px] font-medium">Share on social networks:</p>
              <div class="flex items-center gap-[15px]">
                <div class="h-[45px] w-[45px] rounded-full border border-accent-green flex items-center justify-center">
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_4016_1003)">
                      <path d="M22.0102 4.73386C20.353 3.97352 18.576 3.4133 16.7179 3.09241C16.6841 3.08622 16.6503 3.1017 16.6329 3.13263C16.4043 3.53913 16.1512 4.06939 15.9739 4.4862C13.9755 4.187 11.9873 4.187 10.0299 4.4862C9.85257 4.06015 9.59023 3.53913 9.36065 3.13263C9.34323 3.10272 9.30941 3.08723 9.27559 3.09241C7.41862 3.41223 5.64158 3.97245 3.98337 4.73386C3.969 4.74006 3.95671 4.75037 3.94853 4.76377C0.577878 9.7995 -0.345528 14.7115 0.107441 19.5625C0.109472 19.5862 0.122827 19.6089 0.141261 19.6233C2.36512 21.2565 4.51937 22.248 6.63354 22.9052C6.66736 22.9155 6.70321 22.9031 6.72475 22.8753C7.22484 22.1923 7.67065 21.4722 8.05288 20.7149C8.07542 20.6705 8.05389 20.6179 8.00778 20.6004C7.30065 20.3321 6.62735 20.0051 5.97963 19.6337C5.92839 19.6038 5.92428 19.5305 5.97146 19.4954C6.10775 19.3933 6.2441 19.287 6.37425 19.1797C6.39782 19.1601 6.43062 19.156 6.4583 19.1683C10.7134 21.1111 15.32 21.1111 19.5248 19.1683C19.5525 19.1549 19.5853 19.1591 19.6099 19.1786C19.7401 19.2859 19.8764 19.3932 20.0137 19.4954C20.0608 19.5305 20.0577 19.6037 20.0065 19.6336C19.3588 20.0123 18.6855 20.3321 17.9774 20.5993C17.9313 20.6168 17.9107 20.6705 17.9333 20.7148C18.3238 21.4711 18.7696 22.1912 19.2605 22.8742C19.281 22.9031 19.3178 22.9155 19.3517 22.9051C21.4761 22.248 23.6303 21.2565 25.8542 19.6233C25.8737 19.6089 25.886 19.5872 25.888 19.5635C26.4302 13.9551 24.98 9.08343 22.0439 4.76474C22.0368 4.75037 22.0245 4.74006 22.0102 4.73386ZM8.68841 16.6087C7.40735 16.6087 6.35176 15.4326 6.35176 13.9882C6.35176 12.5438 7.38683 11.3677 8.68841 11.3677C10.0001 11.3677 11.0455 12.5541 11.025 13.9882C11.025 15.4326 9.98988 16.6087 8.68841 16.6087ZM17.3277 16.6087C16.0467 16.6087 14.9911 15.4326 14.9911 13.9882C14.9911 12.5438 16.0261 11.3677 17.3277 11.3677C18.6395 11.3677 19.6848 12.5541 19.6643 13.9882C19.6643 15.4326 18.6395 16.6087 17.3277 16.6087Z" fill="#9CFF4F"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_4016_1003">
                        <rect width="26" height="26" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div class="h-[45px] w-[45px] rounded-full border border-accent-green flex items-center justify-center">
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_4016_1003)">
                      <path d="M22.0102 4.73386C20.353 3.97352 18.576 3.4133 16.7179 3.09241C16.6841 3.08622 16.6503 3.1017 16.6329 3.13263C16.4043 3.53913 16.1512 4.06939 15.9739 4.4862C13.9755 4.187 11.9873 4.187 10.0299 4.4862C9.85257 4.06015 9.59023 3.53913 9.36065 3.13263C9.34323 3.10272 9.30941 3.08723 9.27559 3.09241C7.41862 3.41223 5.64158 3.97245 3.98337 4.73386C3.969 4.74006 3.95671 4.75037 3.94853 4.76377C0.577878 9.7995 -0.345528 14.7115 0.107441 19.5625C0.109472 19.5862 0.122827 19.6089 0.141261 19.6233C2.36512 21.2565 4.51937 22.248 6.63354 22.9052C6.66736 22.9155 6.70321 22.9031 6.72475 22.8753C7.22484 22.1923 7.67065 21.4722 8.05288 20.7149C8.07542 20.6705 8.05389 20.6179 8.00778 20.6004C7.30065 20.3321 6.62735 20.0051 5.97963 19.6337C5.92839 19.6038 5.92428 19.5305 5.97146 19.4954C6.10775 19.3933 6.2441 19.287 6.37425 19.1797C6.39782 19.1601 6.43062 19.156 6.4583 19.1683C10.7134 21.1111 15.32 21.1111 19.5248 19.1683C19.5525 19.1549 19.5853 19.1591 19.6099 19.1786C19.7401 19.2859 19.8764 19.3932 20.0137 19.4954C20.0608 19.5305 20.0577 19.6037 20.0065 19.6336C19.3588 20.0123 18.6855 20.3321 17.9774 20.5993C17.9313 20.6168 17.9107 20.6705 17.9333 20.7148C18.3238 21.4711 18.7696 22.1912 19.2605 22.8742C19.281 22.9031 19.3178 22.9155 19.3517 22.9051C21.4761 22.248 23.6303 21.2565 25.8542 19.6233C25.8737 19.6089 25.886 19.5872 25.888 19.5635C26.4302 13.9551 24.98 9.08343 22.0439 4.76474C22.0368 4.75037 22.0245 4.74006 22.0102 4.73386ZM8.68841 16.6087C7.40735 16.6087 6.35176 15.4326 6.35176 13.9882C6.35176 12.5438 7.38683 11.3677 8.68841 11.3677C10.0001 11.3677 11.0455 12.5541 11.025 13.9882C11.025 15.4326 9.98988 16.6087 8.68841 16.6087ZM17.3277 16.6087C16.0467 16.6087 14.9911 15.4326 14.9911 13.9882C14.9911 12.5438 16.0261 11.3677 17.3277 11.3677C18.6395 11.3677 19.6848 12.5541 19.6643 13.9882C19.6643 15.4326 18.6395 16.6087 17.3277 16.6087Z" fill="#9CFF4F"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_4016_1003">
                        <rect width="26" height="26" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div class="h-[45px] w-[45px] rounded-full border border-accent-green flex items-center justify-center">
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_4016_1003)">
                      <path d="M22.0102 4.73386C20.353 3.97352 18.576 3.4133 16.7179 3.09241C16.6841 3.08622 16.6503 3.1017 16.6329 3.13263C16.4043 3.53913 16.1512 4.06939 15.9739 4.4862C13.9755 4.187 11.9873 4.187 10.0299 4.4862C9.85257 4.06015 9.59023 3.53913 9.36065 3.13263C9.34323 3.10272 9.30941 3.08723 9.27559 3.09241C7.41862 3.41223 5.64158 3.97245 3.98337 4.73386C3.969 4.74006 3.95671 4.75037 3.94853 4.76377C0.577878 9.7995 -0.345528 14.7115 0.107441 19.5625C0.109472 19.5862 0.122827 19.6089 0.141261 19.6233C2.36512 21.2565 4.51937 22.248 6.63354 22.9052C6.66736 22.9155 6.70321 22.9031 6.72475 22.8753C7.22484 22.1923 7.67065 21.4722 8.05288 20.7149C8.07542 20.6705 8.05389 20.6179 8.00778 20.6004C7.30065 20.3321 6.62735 20.0051 5.97963 19.6337C5.92839 19.6038 5.92428 19.5305 5.97146 19.4954C6.10775 19.3933 6.2441 19.287 6.37425 19.1797C6.39782 19.1601 6.43062 19.156 6.4583 19.1683C10.7134 21.1111 15.32 21.1111 19.5248 19.1683C19.5525 19.1549 19.5853 19.1591 19.6099 19.1786C19.7401 19.2859 19.8764 19.3932 20.0137 19.4954C20.0608 19.5305 20.0577 19.6037 20.0065 19.6336C19.3588 20.0123 18.6855 20.3321 17.9774 20.5993C17.9313 20.6168 17.9107 20.6705 17.9333 20.7148C18.3238 21.4711 18.7696 22.1912 19.2605 22.8742C19.281 22.9031 19.3178 22.9155 19.3517 22.9051C21.4761 22.248 23.6303 21.2565 25.8542 19.6233C25.8737 19.6089 25.886 19.5872 25.888 19.5635C26.4302 13.9551 24.98 9.08343 22.0439 4.76474C22.0368 4.75037 22.0245 4.74006 22.0102 4.73386ZM8.68841 16.6087C7.40735 16.6087 6.35176 15.4326 6.35176 13.9882C6.35176 12.5438 7.38683 11.3677 8.68841 11.3677C10.0001 11.3677 11.0455 12.5541 11.025 13.9882C11.025 15.4326 9.98988 16.6087 8.68841 16.6087ZM17.3277 16.6087C16.0467 16.6087 14.9911 15.4326 14.9911 13.9882C14.9911 12.5438 16.0261 11.3677 17.3277 11.3677C18.6395 11.3677 19.6848 12.5541 19.6643 13.9882C19.6643 15.4326 18.6395 16.6087 17.3277 16.6087Z" fill="#9CFF4F"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_4016_1003">
                        <rect width="26" height="26" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <ButtonComponent class="py-[15px] px-[51px] text-base font-bold" type="blue">Take part in the draw</ButtonComponent>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="relative pt-[45px]" :style="urlRating" style="background-repeat: no-repeat; background-position-y: bottom">
    <div class="absolute z-10">
      <img :src="BgSmoke" alt="bg">
    </div>
    <div class="relative pt-[169px] pb-[75px] bg-left">
      <div class="flex justify-between items-center container">
        <div class="w-[45%]"></div>
        <div class="flex flex-col gap-[38px] w-[55%]">
          <h3 class="text-5xl font-bold uppercase">Latest <span class="text-accent-green">winners</span></h3>
          <div class="border border-[#363C6F] rounded-[10px] winners-table">
            <ul class="flex justify-between gap-4 py-5 px-[30px] bg-[#1C2147] font-semibold text-lg">
              <li class="w-2/3">Nickname</li>
              <li class="text-center w-1/3">Date</li>
            </ul>
            <div class="overflow-auto h-[384px] rounded-b-[10px]">
              <ul class="flex justify-between gap-4 py-3 px-[30px] bg-[#272D5C] manrope-regular text-base">
                <li class="w-2/3">_Zloy_Buldog_</li>
                <li class="text-center w-1/3">1 Nov 2023</li>
              </ul>
              <ul class="flex justify-between gap-4 py-3 px-[30px] bg-[#1C2147] manrope-regular text-base">
                <li class="w-2/3">houstoh</li>
                <li class="text-center w-1/3">1 Nov 2023</li>
              </ul>
              <ul class="flex justify-between gap-4 py-3 px-[30px] bg-[#272D5C] manrope-regula text-baser">
                <li class="w-2/3">RODION240299</li>
                <li class="text-center w-1/3">1 Nov 2023</li>
              </ul>
              <ul class="flex justify-between gap-4 py-3 px-[30px] bg-[#1C2147] manrope-regular text-base">
                <li class="w-2/3">MAHMET_VORONEJ</li>
                <li class="text-center w-1/3">1 Nov 2023</li>
              </ul>
              <ul class="flex justify-between gap-4 py-3 px-[30px] bg-[#272D5C] manrope-regular text-base">
                <li class="w-2/3">sean_avenger</li>
                <li class="text-center w-1/3">1 Nov 2023</li>
              </ul>
              <ul class="flex justify-between gap-4 py-3 px-[30px] bg-[#1C2147] manrope-regular text-base">
                <li class="w-2/3">Kosarig_strelok</li>
                <li class="text-center w-1/3">1 Nov 2023</li>
              </ul>
              <ul class="flex justify-between gap-4 py-3 px-[30px] bg-[#272D5C] manrope-regular text-base">
                <li class="w-2/3">sergey_neznanow</li>
                <li class="text-center w-1/3">1 Nov 2023</li>
              </ul>
              <ul class="flex justify-between gap-4 py-3 px-[30px] bg-[#1C2147] manrope-regular text-base">
                <li class="w-2/3">BishoP_33</li>
                <li class="text-center w-1/3">1 Nov 2023</li>
              </ul>
              <ul class="flex justify-between gap-4 py-3 px-[30px] bg-[#272D5C] manrope-regular text-base">
                <li class="w-2/3">vled</li>
                <li class="text-center w-1/3">1 Nov 2023</li>
              </ul>
              <ul class="flex justify-between gap-4 py-3 px-[30px] bg-[#1C2147] manrope-regular text-base">
                <li class="w-2/3">144hZ</li>
                <li class="text-center w-1/3">1 Nov 2023</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterComponent class="bg-accent-dark-blue"/>
</template>

<style scoped>

</style>