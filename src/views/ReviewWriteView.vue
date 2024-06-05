<script setup>

import ButtonComponent from "@/components/UI/ButtonComponent.vue";
import Loading from "@/components/UI/Loading.vue";
import Checkbox from "@/components/UI/Checkbox.vue";
import {ref} from "vue";
import Header from "@/components/header/Header.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import {useReviewStore} from "@/stores/ReviewStore.js";
import {useUserStore} from "@/stores/UserStore.js";

const reviewStore = useReviewStore()
const userStore = useUserStore()

const isLoading = ref(false)
const isChecked = ref(false)
const fullName = ref('')
const message = ref('')

const send = async () => {

  userStore.setErrors([])

  if(!isChecked.value) {
    userStore.setError('Agree to the rules', 'check')
  }

  else {

    isLoading.value = true

    await reviewStore.sendRequest({
      full_name: fullName.value,
      message: message.value,
    })

    isLoading.value = false

  }
}


</script>

<template>
  <div class="min-h-full flex flex-col">
    <Header/>
    <main class="flex-auto border-b border-white border-opacity-10">
      <div class="container py-[100px]">
        <div class="flex flex-col gap-[38px] manrope-bold text-sm border border-[#363C6F] bg-[#1C2147] rounded-[10px]">
          <div class="flex items-center gap-4 py-[21px] px-[39px] w-full border-b border-[#363C6F]">
            <router-link :to="{ name: 'reviews' }" class="text-accent-green">Reviews</router-link>
            <div>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.24993 11.62L9.05326 7.81667C9.50243 7.3675 9.50243 6.6325 9.05326 6.18334L5.24993 2.38" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <p>Write review</p>
          </div>
          <div class="flex flex-col gap-[24px] pb-[38px] px-[40px]">
            <div class="flex flex-wrap items-center justify-between gap-5">
              <div class="flex flex-col gap-[8px] w-[100%]">
                <p v-if="userStore.errors && userStore.errors.full_name && userStore.errors.full_name[0]" class="text-red-500">{{ userStore.errors.full_name[0] }}</p>
                <label class="manrope-medium text-accent-light-blue" for="full_name">Full name</label>
                <input
                    required
                    v-model="fullName"
                    class="input py-[15px] px-5" type="text" name="first_name" id="full_name">
              </div>
              <div class="flex flex-col gap-[8px] w-[100%]">
                <p v-if="userStore.errors && userStore.errors.message && userStore.errors.message[0]" class="text-red-500">{{ userStore.errors.message[0] }}</p>
                <label class="manrope-medium text-accent-light-blue" for="message">Your message</label>
                <input
                    required
                    v-model="message"
                    class="input py-[15px] px-5" type="text" name="last_name" id="message">
              </div>
              <div class="flex flex-col gap-4 w-[100%]">
                <p v-show="userStore.errors.check" class="text-red-500">{{ userStore.errors.check }}</p>
                <div class="flex items-center gap-4">
                  <Checkbox name="agreement" v-model="isChecked"/>
                  <p class="text-accent-light-blue manrope-medium">I agree to Accempire' <a href="#" class="text-accent-green">Terms</a> and <a class="text-accent-green" href="#">Privacy</a>.</p>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-7">
              <ButtonComponent @click="send" class="py-[15px] px-[63px] w-[170px] h-[55px]" type="blue">
                <Loading color="white" :size="6" v-if="isLoading"/>
                <span v-else>Send</span>
              </ButtonComponent>
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