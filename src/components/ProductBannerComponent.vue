<script setup>
import {computed, onMounted, ref} from "vue";
import bg1 from "@/assets/bg1.webp";
import bg2 from "@/assets/bg2.webp";
import bg3 from "@/assets/bg3.webp";
import banner from "/public/images/product-images/banner-1.webp";
import ButtonComponent from "@/components/UI/ButtonComponent.vue";
import Header from "@/components/header/Header.vue";
import {useProductStore} from "@/stores/ProductStore.js";
import {useRoute} from "vue-router";
import {useCartStore} from "@/stores/CartStore.js";
import router from "@/router/index.js";

const productStore = useProductStore()

const cartStore = useCartStore()

const route = useRoute()

const counter = ref(1)

// Генерация случайного целого числа в диапазоне от min до max включительно
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Пример использования
const randomNumber = getRandomInt(1, 3); // Генерирует случайное число от 1 до 10 включительно

const randomBg = computed(() => {

  let result = ''

  switch (randomNumber) {
    case 1:
      result = 'background: url(' + bg1 + ');'
      break
    case 2:
      result = 'background: url(' + bg2 + ');'
      break
    case 3:
      result = 'background: url(' + bg3 + ');'
      break
  }

  return result

})

const cartItem = ref(null)

onMounted(async () => {

    cartItem.value = await cartStore.getCartItem(route.params.id);

})

const addToCart = async () => {
    cartStore.setCart({ ...productStore.product, count: counter })
    cartItem.value = await cartStore.getCartItem(route.params.id);
}



</script>

<template>
  <div :style="randomBg"
       style="background-size: cover; background-position: center">
    <Header/>
    <div class="container pt-[60px] pb-[94px]">
      <div class="flex items-center justify-between pt-[60px]">
        <div class="flex flex-col gap-[113px] w-[60%]">
          <div class="flex flex-col gap-8">
            <div class="flex flex-col gap-6">
              <h1 class="uppercase text-[42px] font-extrabold leading-tight font-['Roboto']">{{ productStore.product.name }}</h1>
              <p class="w-[557px] text-accent-light-blue manrope-semibold" v-html="productStore.product.description"></p>
            </div>
            <div class="flex flex-col mr-[100px]">
              <div class="p-5 bg-[#1C2147] border border-[#363C6F] rounded-[10px] rounded-b-none flex flex-col gap-4">
                <div
                    class="flex items-center justify-between border-b border-[#363C6F] pb-[14px] text-accent-light-blue font-semibold">
                  <div class="flex items-center gap-5">
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.5">
                          <path
                              d="M5.5 16L5.5 8C5.5 6.34315 4.15685 5 2.5 5C2.22386 5 2 5.22386 2 5.5L2 18.5C2 18.7761 2.22386 19 2.5 19C4.15685 19 5.5 17.6569 5.5 16Z"
                              fill="#9197C2"/>
                          <path
                              d="M18.5 8V16C18.5 17.6569 19.8431 19 21.5 19C21.7761 19 22 18.7761 22 18.5L22 5.5C22 5.22386 21.7761 5 21.5 5C19.8431 5 18.5 6.34315 18.5 8Z"
                              fill="#9197C2"/>
                        </g>
                        <path
                            d="M11.5 19C9.61438 19 8.67157 19 8.08579 18.4142C7.5 17.8284 7.5 16.8856 7.5 15L7.5 9C7.5 7.11438 7.5 6.17157 8.08579 5.58579C8.67157 5 9.61438 5 11.5 5L12.5 5C14.3856 5 15.3284 5 15.9142 5.58579C16.5 6.17157 16.5 7.11438 16.5 9V15C16.5 16.8856 16.5 17.8284 15.9142 18.4142C15.3284 19 14.3856 19 12.5 19H11.5Z"
                            fill="#9197C2"/>
                      </svg>
                    </div>
                    <p>Stock:</p>
                  </div>
                  <p class="text-white">{{ productStore.product.stock }}</p>
                </div>
                <div
                    class="flex items-center justify-between border-b border-[#363C6F] pb-[14px] text-accent-light-blue font-semibold">
                  <div class="flex items-center gap-5">
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.115 14.3525C8.94018 13.1793 8.94018 11.2772 10.115 10.104C11.2898 8.93082 13.1946 8.93082 14.3694 10.104C14.8163 10.5503 15.1284 11.4767 15.3436 12.4534C15.6654 13.9139 15.8263 14.6442 15.2439 15.2258C14.6615 15.8074 13.9302 15.6467 12.4676 15.3254C11.4896 15.1105 10.5619 14.7988 10.115 14.3525Z"
                            fill="#9197C2"/>
                        <path opacity="0.5"
                              d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              fill="#9197C2"/>
                        <path
                            d="M4.42077 5.4763C4.74602 5.09877 5.09899 4.7458 5.47653 4.42057C5.49505 4.43584 5.51301 4.45214 5.53033 4.46946L7.03033 5.96946C7.32322 6.26235 7.32322 6.73722 7.03033 7.03012C6.73744 7.32301 6.26256 7.32301 5.96967 7.03012L4.46967 5.53012C4.45234 5.51279 4.43604 5.49483 4.42077 5.4763Z"
                            fill="#9197C2"/>
                        <path
                            d="M2.02769 12.7498C2.00934 12.5023 2 12.2522 2 12C2 11.7476 2.00935 11.4975 2.02772 11.2498H4C4.41421 11.2498 4.75 11.5856 4.75 11.9998C4.75 12.414 4.41421 12.7498 4 12.7498H2.02769Z"
                            fill="#9197C2"/>
                        <path
                            d="M5.47628 19.5792C5.09877 19.254 4.74581 18.901 4.42059 18.5235C4.43591 18.5049 4.45228 18.4869 4.46967 18.4695L5.96967 16.9695C6.26256 16.6766 6.73744 16.6766 7.03033 16.9695C7.32322 17.2623 7.32322 17.7372 7.03033 18.0301L5.53033 19.5301C5.51293 19.5475 5.49489 19.5639 5.47628 19.5792Z"
                            fill="#9197C2"/>
                        <path
                            d="M19.5794 18.5235C19.2542 18.901 18.9012 19.254 18.5237 19.5792C18.5051 19.5639 18.4871 19.5475 18.4697 19.5301L16.9697 18.0301C16.6768 17.7372 16.6768 17.2623 16.9697 16.9695C17.2626 16.6766 17.7374 16.6766 18.0303 16.9695L19.5303 18.4695C19.5477 18.4869 19.5641 18.5049 19.5794 18.5235Z"
                            fill="#9197C2"/>
                        <path
                            d="M21.9723 11.2498C21.9907 11.4975 22 11.7476 22 12C22 12.2522 21.9907 12.5023 21.9723 12.7498H19.9998C19.5856 12.7498 19.2498 12.414 19.2498 11.9998C19.2498 11.5856 19.5856 11.2498 19.9998 11.2498H21.9723Z"
                            fill="#9197C2"/>
                        <path
                            d="M18.5235 4.42057C18.901 4.7458 19.254 5.09877 19.5792 5.4763C19.564 5.49483 19.5477 5.51279 19.5303 5.53012L18.0303 7.03012C17.7374 7.32301 17.2626 7.32301 16.9697 7.03012C16.6768 6.73722 16.6768 6.26235 16.9697 5.96946L18.4697 4.46946C18.487 4.45214 18.5049 4.43584 18.5235 4.42057Z"
                            fill="#9197C2"/>
                        <path
                            d="M12.75 2.0277V4C12.75 4.41421 12.4142 4.75 12 4.75C11.5858 4.75 11.25 4.41421 11.25 4V2.0277C11.4976 2.00934 11.7477 2 12 2C12.2523 2 12.5024 2.00934 12.75 2.0277Z"
                            fill="#9197C2"/>
                      </svg>
                    </div>
                    <p>Delivery:</p>
                  </div>
                  <p class="text-white">{{ productStore.product.delivery }}</p>
                </div>
                <div
                    class="flex items-center justify-between border-b border-[#363C6F] pb-[14px] text-accent-light-blue font-semibold">
                  <div class="flex items-center gap-5">
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.5"
                              d="M10.6669 6.13443L10.165 5.77922C9.44862 5.27225 8.59264 5 7.71504 5H7.10257C6.69838 5 6.29009 5.02549 5.90915 5.16059C3.52645 6.00566 1.88749 9.09504 2.00604 16.1026C2.02992 17.5145 2.3603 19.075 3.63423 19.6842C4.03121 19.8741 4.49667 20 5.02671 20C5.66273 20 6.1678 19.8187 6.55763 19.5632C6.96641 19.2953 7.32633 18.9471 7.68612 18.599L7.68612 18.599C8.13071 18.1688 8.57511 17.7389 9.11125 17.4609C9.69519 17.1581 10.3434 17 11.0011 17H12.9989C13.6566 17 14.3048 17.1581 14.8888 17.4609C15.4249 17.7389 15.8693 18.1688 16.3139 18.599L16.3139 18.599C16.6737 18.9471 17.0336 19.2953 17.4424 19.5632C17.8322 19.8187 18.3373 20 18.9733 20C19.5033 20 19.9688 19.8741 20.3658 19.6842C21.6397 19.075 21.9701 17.5145 21.994 16.1026C22.1125 9.09503 20.4735 6.00566 18.0908 5.16059C17.7099 5.02549 17.3016 5 16.8974 5H16.2849C15.4074 5 14.5514 5.27225 13.8351 5.77922L13.3332 6.13441C12.9434 6.41029 12.4776 6.55844 12 6.55844C11.5225 6.55844 11.0567 6.41029 10.6669 6.13443Z"
                              fill="#9197C2"/>
                        <path
                            d="M16.75 9C17.1642 9 17.5 9.33579 17.5 9.75C17.5 10.1642 17.1642 10.5 16.75 10.5C16.3358 10.5 16 10.1642 16 9.75C16 9.33579 16.3358 9 16.75 9Z"
                            fill="#9197C2"/>
                        <path
                            d="M7.5 9.25C7.91421 9.25 8.25 9.58579 8.25 10V10.75H9C9.41421 10.75 9.75 11.0858 9.75 11.5C9.75 11.9142 9.41421 12.25 9 12.25H8.25V13C8.25 13.4142 7.91421 13.75 7.5 13.75C7.08579 13.75 6.75 13.4142 6.75 13V12.25H6C5.58579 12.25 5.25 11.9142 5.25 11.5C5.25 11.0858 5.58579 10.75 6 10.75H6.75V10C6.75 9.58579 7.08579 9.25 7.5 9.25Z"
                            fill="#9197C2"/>
                        <path
                            d="M19 11.25C19 11.6642 18.6642 12 18.25 12C17.8358 12 17.5 11.6642 17.5 11.25C17.5 10.8358 17.8358 10.5 18.25 10.5C18.6642 10.5 19 10.8358 19 11.25Z"
                            fill="#9197C2"/>
                        <path
                            d="M15.25 12C15.6642 12 16 11.6642 16 11.25C16 10.8358 15.6642 10.5 15.25 10.5C14.8358 10.5 14.5 10.8358 14.5 11.25C14.5 11.6642 14.8358 12 15.25 12Z"
                            fill="#9197C2"/>
                        <path
                            d="M17.5 12.75C17.5 12.3358 17.1642 12 16.75 12C16.3358 12 16 12.3358 16 12.75C16 13.1642 16.3358 13.5 16.75 13.5C17.1642 13.5 17.5 13.1642 17.5 12.75Z"
                            fill="#9197C2"/>
                      </svg>
                    </div>
                    <p>Game:</p>
                  </div>
                  <p class="text-white">{{ productStore.product.game }}</p>
                </div>
                <div
                    class="flex items-center justify-between text-accent-light-blue font-semibold">
                  <div class="flex items-center gap-5">
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.5">
                          <path
                              d="M10 21C6.22876 21 4.34315 21 3.17157 19.8284C2 18.6569 2 16.7712 2 13V12.75H22V13C22 14.1194 22 15.0727 21.9694 15.8905L21.955 15.8805C21.4762 14.5283 20.2273 13.5 18.6667 13.5C17.1549 13.5 15.9395 14.4601 15.4282 15.75H13.5C13.0858 15.75 12.75 16.0858 12.75 16.5C12.75 16.9142 13.0858 17.25 13.5 17.25H14.3571C13.8191 17.8199 13.5 18.5958 13.5 19.4118C13.5 19.9792 13.6543 20.5272 13.9292 21H10Z"
                              fill="#9197C2"/>
                          <path
                              d="M10 3H14C17.7712 3 19.6569 3 20.8284 4.17157C22 5.34315 22 7.22876 22 11V11.25H2V11C2 7.22876 2 5.34315 3.17157 4.17157C4.34315 3 6.22876 3 10 3Z"
                              fill="#9197C2"/>
                        </g>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M20.6543 16.8806C20.543 15.8226 19.6956 15 18.6667 15C17.8216 15 17.0989 15.555 16.806 16.3395C16.7161 16.5804 16.6667 16.8429 16.6667 17.1176C16.6667 17.3763 16.7105 17.6242 16.7907 17.8533C16.6966 17.8338 16.5994 17.8235 16.5 17.8235C16.0601 17.8235 15.6644 18.024 15.3901 18.3434C15.1477 18.6255 15 19.0004 15 19.4118C15 20.2889 15.6716 21 16.5 21H20C21.1046 21 22 20.0519 22 18.8824C22 17.9554 21.4375 17.1676 20.6543 16.8806Z"
                              fill="#9197C2"/>
                        <path
                            d="M20.6543 16.8806C20.543 15.8226 19.6956 15 18.6667 15C17.8216 15 17.0989 15.555 16.806 16.3395C16.7161 16.5804 16.6667 16.8429 16.6667 17.1176C16.6667 17.3763 16.7105 17.6242 16.7907 17.8533C16.6966 17.8338 16.5994 17.8235 16.5 17.8235C16.0601 17.8235 15.6644 18.024 15.3901 18.3434C15.1477 18.6255 15 19.0004 15 19.4118C15 20.2889 15.6716 21 16.5 21H20C21.1046 21 22 20.0519 22 18.8824C22 17.9554 21.4375 17.1676 20.6543 16.8806Z"
                            fill="#9197C2"/>
                        <path
                            d="M12.75 7.5C12.75 7.08579 13.0858 6.75 13.5 6.75H18C18.4142 6.75 18.75 7.08579 18.75 7.5C18.75 7.91421 18.4142 8.25 18 8.25H13.5C13.0858 8.25 12.75 7.91421 12.75 7.5Z"
                            fill="#9197C2"/>
                        <path
                            d="M6 18.25C5.58579 18.25 5.25 17.9142 5.25 17.5V15.5C5.25 15.0858 5.58579 14.75 6 14.75C6.41421 14.75 6.75 15.0858 6.75 15.5V17.5C6.75 17.9142 6.41421 18.25 6 18.25Z"
                            fill="#9197C2"/>
                        <path
                            d="M6 9.25C5.58579 9.25 5.25 8.91421 5.25 8.5V6.5C5.25 6.08579 5.58579 5.75 6 5.75C6.41421 5.75 6.75 6.08579 6.75 6.5V8.5C6.75 8.91421 6.41421 9.25 6 9.25Z"
                            fill="#9197C2"/>
                        <path
                            d="M9 18.25C8.58579 18.25 8.25 17.9142 8.25 17.5V15.5C8.25 15.0858 8.58579 14.75 9 14.75C9.41421 14.75 9.75 15.0858 9.75 15.5V17.5C9.75 17.9142 9.41421 18.25 9 18.25Z"
                            fill="#9197C2"/>
                        <path
                            d="M9 9.25C8.58579 9.25 8.25 8.91421 8.25 8.5V6.5C8.25 6.08579 8.58579 5.75 9 5.75C9.41421 5.75 9.75 6.08579 9.75 6.5V8.5C9.75 8.91421 9.41421 9.25 9 9.25Z"
                            fill="#9197C2"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12.75H2V11.25H22V12.75Z"
                              fill="#9197C2"/>
                      </svg>
                    </div>
                    <p>Mail:</p>
                  </div>
                  <p class="text-white">{{ productStore.product.mail }}</p>
                </div>
              </div>
              <div class="p-5 bg-[#1C2147] border border-t-0 border-[#363C6F] rounded-[10px] rounded-t-none flex items-center justify-between gap-[43px]]">
                <h3 class="text-accent-green text-[24px] manrope-extrabold">{{ productStore.formatPrice(productStore.product.price, 'ETH') }}</h3>
                <div class="flex items-center gap-[15px]">
                  <div class="flex items-center justify-between gap-[45px] border border-[#FFFFFF] border-opacity-15 rounded-[10px] py-[15px] px-[16px]">
                      <button @click="cartItem ? cartStore.minus(route.params.id) : (counter > 1 ? counter-- : '')">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 9H13.5" stroke="#9197C2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </button>
                    <div class="text-base font-bold">{{ cartItem ? cartItem.count : counter }}</div>
                    <button @click="cartItem ? cartStore.plus(route.params.id) : counter++">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 9H13.5" stroke="#9197C2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9 13.5V4.5" stroke="#9197C2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </button>
                  </div>
                  <ButtonComponent v-if="!cartItem" @click="addToCart()" class="text-[#151938] hover:text-white py-[15px] px-[55px]" type="green">Add to cart</ButtonComponent>
                  <ButtonComponent @click="router.push({ name: 'payment' })" v-if="cartItem" class="text-[#151938] hover:text-white py-[15px] px-[55px]" type="green">Go to cart</ButtonComponent>
                </div>
              </div>
              <p class="mt-6 text-base manrope-medium text-accent-green">View game details <span class="text-white">or</span> view game on EpicGames</p>
            </div>
          </div>
        </div>
        <div class="relative flex justify-end items-center flex-col gap-[22px] w-[40%]]">
          <div class="absolute h-[755px] w-[580px] top-1/2 -translate-y-1/2 -right-[70px]">
            <div class="h-full w-full flex justify-center">
              <img :src="banner" class="h-full w-full object-cover" alt="Баннер">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>