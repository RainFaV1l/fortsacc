<script setup>
import ButtonComponent from "@/components/UI/ButtonComponent.vue";
import Checkbox from "@/components/UI/Checkbox.vue";
import {ref, toRefs} from "vue";
import {useUserStore} from "@/stores/UserStore.js";
import {useRouter} from "vue-router";

const userStore = useUserStore()

const props = defineProps({
  breadcrumbs: {
    type: Object,
    required: false,
    default: () => {
      return {
        current: {
          name: '*I have an account',
          route: 'login',
          value: 'Login'
        },
      }
    }
  },
  type: {
    type: String,
    required: false,
    default: 'register',
  },
})

const router = useRouter()

const { type } = toRefs(props);

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const emailConfirmation = ref('')
const password = ref('')
const passwordConfirmation = ref('')
const isChecked = ref(false)

const sendRequest = async () => {

  if(!isChecked.value) {

    userStore.setError('Agree to the privacy policy.', 'is_checked')

  }

  if(type.value === 'login') {

    const response = await userStore.login({
      email: email.value,
      password: password.value,
    })

    if(response) {

      await router.push({name: 'welcome'})

      return

    }

    await router.push({name: 'login'})

    return

  }

  if(type.value === 'register') {

    const response = await userStore.register({
      first_name: firstName.value,
      last_name: lastName.value,
      email: email.value,
      email_confirmation: emailConfirmation.value,
      password: password.value,
      password_confirmation: passwordConfirmation.value,
    })

    if(response) {

      await router.push({name: 'welcome'})

      return

    }

    await router.push({name: 'register'})

  }

}

const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

</script>

<template>
  <div class="flex flex-col gap-[38px] manrope-bold text-sm border border-[#363C6F] bg-[#1C2147] rounded-[10px]">
    <div class="flex items-center gap-4 py-[21px] px-[39px] w-full border-b border-[#363C6F]">
      <p class="text-sm font-medium">{{ breadcrumbs.current.name }}</p>
      <div>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.24993 11.62L9.05326 7.81667C9.50243 7.3675 9.50243 6.6325 9.05326 6.18334L5.24993 2.38" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <router-link :to="{ name: breadcrumbs.current.route }" class="text-accent-green">{{ breadcrumbs.current.value }}</router-link>
    </div>
    <div class="flex flex-col gap-[24px] pb-[38px] px-[40px]">
      <div class="flex flex-wrap items-center justify-between gap-5">
        <div class="text-red-500 font-normal" v-if="userStore.errors && userStore.errors.unauthorized">
          {{ userStore.errors.unauthorized }}
        </div>
        <div class="flex flex-col gap-[8px] w-[48%]" v-if="type === 'register'">
          <label class="manrope-medium text-accent-light-blue" for="first_name">First name</label>
          <input
              :class="userStore.errors.first_name && userStore.errors.first_name[0] ? 'border-red-500 placeholder:font-normal placeholder:text-red-500 placeholder:text-opacity-75' : ''"
              :placeholder="userStore.errors.first_name ? userStore.errors.first_name[0] : ''"
              v-model="firstName"
              class="input py-[15px] px-5" type="text" name="first_name" id="first_name">
        </div>
        <div class="flex flex-col gap-[8px] w-[48%]" v-if="type === 'register'">
          <label class="manrope-medium text-accent-light-blue" for="last_name">Last name</label>
          <input
              :class="userStore.errors.last_name && userStore.errors.last_name[0] ? 'border-red-500 placeholder:font-normal placeholder:text-red-500 placeholder:text-opacity-75' : ''"
              :placeholder="userStore.errors.last_name ? userStore.errors.last_name[0] : ''"
              v-model="lastName"
              class="input py-[15px] px-5" type="text" name="last_name" id="last_name">
        </div>
        <div class="flex flex-col gap-[8px] w-[48%]" :class="{ 'w-full' : type === 'login' }">
          <label class="manrope-medium text-accent-light-blue" for="email">E-mail address</label>
          <input
              :class="userStore.errors && userStore.errors.email && userStore.errors.email[0] ? 'border-red-500 placeholder:text-red-500 placeholder:font-normal placeholder:text-opacity-75' : ''"
              :placeholder="userStore.errors && userStore.errors.email ? userStore.errors.email[0] : ''"
              v-model="email"
              class="input py-[15px] px-5" type="text" name="email" id="email">
        </div>
        <div class="flex flex-col gap-[8px] w-[48%]" v-if="type === 'register'">
          <label class="manrope-medium text-accent-light-blue" for="email_confirmation">Repeat E-mail address</label>
          <input
              :class="userStore.errors.email_confirmation && userStore.errors.email_confirmation[0] ? 'border-red-500 placeholder:font-normal placeholder:text-red-500 placeholder:text-opacity-75' : ''"
              :placeholder="userStore.errors.email_confirmation ? userStore.errors.email_confirmation[0] : ''"
              v-model="emailConfirmation"
              class="input py-[15px] px-5" type="text" name="email" id="email_confirmation">
        </div>
        <div class="flex flex-col gap-[8px] w-[48%]" :class="{ 'w-full' : type === 'login' }">
          <label class="manrope-medium text-accent-light-blue" for="password">Password</label>
          <input
              :class="userStore.errors && userStore.errors.password && userStore.errors.password[0] ?
              'border-red-500 placeholder:text-red-500 placeholder:font-normal placeholder:text-opacity-75' : ''"
              :placeholder="userStore.errors && userStore.errors.password ? userStore.errors.password[0] : ''"
              v-model="password"
              class="input py-[15px] px-5" type="password" name="password" id="password">
        </div>
        <div class="flex flex-col gap-[8px] w-[48%]" v-if="type === 'register'">
          <label class="manrope-medium text-accent-light-blue" for="password_confirmation">Again password</label>
          <input
              :class="userStore.errors.password_confirmation && userStore.errors.password_confirmation[0] ? 'border-red-500 placeholder:font-normal placeholder:text-red-500 placeholder:text-opacity-75' : ''"
              :placeholder="userStore.errors.password_confirmation ? userStore.errors.password_confirmation[0] : ''"
              v-model="passwordConfirmation"
              class="input py-[15px] px-5" type="password" name="password_confirmation" id="password_confirmation">
        </div>
        <div class="flex flex-col gap-4 w-[48%]" v-if="type === 'register'">
          <span class="text-red-500 font-normal" v-if="userStore.errors.is_checked">{{ userStore.errors.is_checked }}</span>
          <div class="flex items-center gap-4">
            <Checkbox name="agreement" v-model="isChecked"/>
            <p class="text-accent-light-blue manrope-medium">I agree to Accempire' <a href="#" class="text-accent-green">Terms</a> and <a class="text-accent-green" href="#">Privacy</a>.</p>
          </div>
        </div>
      </div>
      <div class="flex items-center gap-7">
        <ButtonComponent @click="sendRequest()" class="py-[13px] px-[71px] text-accent-dark-blue hover:text-white" type="green">{{ capitalizeFirstLetter(this.type) }}</ButtonComponent>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>