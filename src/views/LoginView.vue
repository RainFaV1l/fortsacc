<script setup>
import {onMounted, ref} from "vue";
import BgImage from "@/assets/bg.webp";
import FooterComponent from "@/components/FooterComponent.vue";
import {onBeforeRouteLeave, useRoute} from "vue-router";
import Info from "@/components/payment/Info.vue";
import Header from "@/components/header/Header.vue";
import PaymentHeader from "@/components/payment/PaymentHeader.vue";

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

onMounted(() => {

  footerToBottom()

})

</script>

<template>
  <div class="min-h-full flex flex-col" :style="url" style="background-size: cover; background-position: center">
    <Header/>
    <main class="flex-auto border-b border-white border-opacity-10">
      <div class="container py-[45px]">
        <PaymentHeader routeName="home" title="Login <span class='text-accent-green'>page</span>"/>
        <div class="flex items-start justify-between mt-[32px] gap-[30px]">
          <Info class="w-full" type="login" :breadcrumbs="{ current: { name: 'Create new account', route: 'register', value: 'Register' } }"/>
        </div>
      </div>
    </main>
    <FooterComponent/>
  </div>
</template>

<style scoped>

</style>