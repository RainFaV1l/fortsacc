<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import {onMounted, reactive, ref} from "vue";
import BgImage from "@/assets/bg.webp";
import products from "@/data/products.js";
import FooterComponent from "@/components/FooterComponent.vue";
import {onBeforeRouteLeave, onBeforeRouteUpdate, useRoute} from "vue-router";

const url = ref(`background: url(${BgImage});`)

const route = useRoute()

onBeforeRouteLeave((to, from, next) => {

  const app = document.querySelector('#app')

  const wrapper = document.querySelector('.wrapper')

  app.style.height = 'auto'

  wrapper.style.height = 'auto'

  window.scrollTo(0, 0);

  next();

})

// onBeforeRouteUpdate(async (to, from, next) => {
//
//   next();
// })

const footerToBottom = () => {

  const routeName = route.matched[0].name

  const app = document.querySelector('#app')

  const wrapper = document.querySelector('.wrapper')

  if(routeName === 'payment') {

    document.body.style.height = '100%'

    app.style.height = '100%'

    wrapper.style.height = '100%'

  }


}

let product = reactive({})

const findProductById = (id) => {

  const findProduct = products.find((product) => product.id === parseInt(id))

  for (const key in findProduct) {

    product[key] = findProduct[key];

  }

}



onMounted(() => {

  footerToBottom()

  findProductById(route.params.id)

})

</script>

<template>
  <div class="min-h-full flex flex-col" :style="url" style="background-size: cover; background-position: center">
    <HeaderComponent/>
    <main class="flex-auto border-b border-white border-opacity-10">
      <div class="container py-[45px]">
        <div class="flex items-center justify-between text-center">
          <RouterLink :to="{ name: 'product', params: { id: product.id } }">
            <button class="button-outline hover:bg-gradient-blue py-[11px] pl-[14px] pr-[31px]">
              <div class="flex items-center gap-4">
                <div>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.75007 11.62L4.94674 7.81667C4.49757 7.3675 4.49757 6.6325 4.94674 6.18334L8.75007 2.38" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                Back
              </div>
            </button>
          </RouterLink>
          <h2 class="text-5xl font-['Roboto'] font-bold uppercase">payment <span class="text-accent-green">details</span></h2>
          <button class="opacity-0 button-outline hover:bg-gradient-blue py-[11px] pl-[14px] pr-[31px]">
              <div class="flex items-center gap-4">
                <div>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.75007 11.62L4.94674 7.81667C4.49757 7.3675 4.49757 6.6325 4.94674 6.18334L8.75007 2.38" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                Back
              </div>
          </button>
        </div>
        <div class="flex items-start justify-between mt-[32px] gap-[30px]">
          <div class="flex flex-col gap-[38px] manrope-bold text-sm w-[68%] border border-[#363C6F] bg-[#1C2147] rounded-[10px]">
            <div class="flex items-center gap-4 py-[21px] px-[39px] w-full border-b border-[#363C6F]">
              <p class="text-sm font-medium">*I have an account</p>
              <div>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.24993 11.62L9.05326 7.81667C9.50243 7.3675 9.50243 6.6325 9.05326 6.18334L5.24993 2.38" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <p class="text-accent-green">Login</p>
            </div>
            <div class="flex flex-col gap-[24px] pb-[38px] px-[40px]">
              <div class="flex flex-wrap items-center justify-between gap-5">
                <div class="flex flex-col gap-[8px] w-[48%]">
                  <label class="manrope-medium text-accent-light-blue" for="first_name">First name</label>
                  <input class="input py-[15px] px-5" type="text" name="first_name" id="first_name">
                </div>
                <div class="flex flex-col gap-[8px] w-[48%]">
                  <label class="manrope-medium text-accent-light-blue" for="last_name">Last name</label>
                  <input class="input py-[15px] px-5" type="text" name="last_name" id="last_name">
                </div>
                <div class="flex flex-col gap-[8px] w-[48%]">
                  <label class="manrope-medium text-accent-light-blue" for="email">E-mail addres</label>
                  <input class="input py-[15px] px-5" type="text" name="email" id="email">
                </div>
                <div class="flex flex-col gap-[8px] w-[48%]">
                  <label class="manrope-medium text-accent-light-blue" for="phone">Phone namber</label>
                  <input class="input py-[15px] px-5" type="text" name="phone" id="phone">
                </div>
                <div class="flex flex-col gap-[8px] w-[48%]">
                  <label class="manrope-medium text-accent-light-blue" for="password">Password</label>
                  <input class="input py-[15px] px-5" type="text" name="password" id="password">
                </div>
                <div class="flex flex-col gap-[8px] w-[48%]">
                  <label class="manrope-medium text-accent-light-blue" for="password_r">Again password </label>
                  <input class="input py-[15px] px-5" type="text" name="password_r" id="password_r">
                </div>
                <div class="flex items-center gap-4 w-[48%]">
                  <input type="checkbox" name="agreement" class="hidden" id="agreement">
                  <label class="h-4 w-4 border border-white border-opacity-15 bg-transparent" for="agreement"></label>
                  <p class="text-accent-light-blue manrope-medium">I agree to Accempire' <a href="#" class="text-accent-green">Terms</a> and <a class="text-accent-green" href="#">Privacy</a>.</p>
                </div>
              </div>
              <div class="flex items-center gap-7">
                <button class="items-center py-[13px] px-[71px] button-fill gradient-green text-accent-dark-blue hover:text-white text-base manrope-extrabold">Paymant</button>
              </div>
            </div>
          </div>
          <div class="w-[32%] border border-[#363C6F] bg-[#1C2147] rounded-[10px] flex flex-col">
            <div class="border-b border-[#363C6F] pt-[32px] px-[32px] pb-[24px] flex flex-col gap-5">
              <div class="flex items-center gap-7">
                <div class="relative border-[0.78px] border-[#363C6F] rounded-[3.91px] p-[13px]">
                  <div class="top-5 left-1/2 -translate-x-1/2 absolute w-[67.25px] h-[63.34px] bg-[#604FFF] bg-opacity-50 blur-[30px]"></div>
                  <div class="h-[78.59px] w-[78.59px]">
                    <img class="h-full w-full" :src="product.image" alt="Товар">
                  </div>
                </div>
                <h3 class="text-base manrope-extrabold">Iron Account | <br> <span class="uppercase">stacked</span> <br> x1</h3>
              </div>
              <div class="flex items-center gap-[21px] border border-[#363C6F] rounded-[10px] py-4 px-5">
                <input type="checkbox" class="hidden" name="discount" id="discount">
                <label for="discount" class="h-4 w-4 bg-accent-green rounded-[4px] flex items-center justify-center">
                  <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 3L3.33059 5L8 1" stroke="#151938" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </label>
                <div class="flex flex-col gap-[3px]">
                  <h4 class="text-[#77DEFF] text-sm manrope-bold"><span class="uppercase">fast delivery</span> + $10</h4>
                  <p class="text-accent-light-blue manrope-regular text-[12px]">Get your orders 5x faster!</p>
                </div>
              </div>
              <h3 class="uppercase text-center text-2xl manrope-extrabold text-[#9CFF4F]">total: $50</h3>
            </div>
            <div class="flex flex-col items-center gap-5 pt-6 pb-8 px-8">
              <div class="flex flex-col items-center gap-[12px] w-full">
                <p class="manrope-bold text-base uppercase">discount coupon</p>
                <input type="text" class="input placeholder:text-[#9197C2] py-[14px] px-5 w-full focus:border" placeholder="Enter coupon">
              </div>
              <button class="button-fill gradient-blue py-[13px] w-full">Apply</button>
            </div>
          </div>
        </div>
      </div>
    </main>
    <FooterComponent/>
  </div>
</template>

<style scoped>

</style>