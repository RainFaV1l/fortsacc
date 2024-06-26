<script setup>
import ButtonComponent from "@/components/UI/ButtonComponent.vue";
import Checkbox from "@/components/UI/Checkbox.vue";
import {onMounted, ref, toRefs} from "vue";
import {useUserStore} from "@/stores/UserStore.js";
import {useRoute, useRouter} from "vue-router";
import Loading from "@/components/UI/Loading.vue";
import {useToast} from "vue-toastification";
import gitHubWhiteLogo from "@/assets/logos/github-mark-white.svg";
import {useCartStore} from "@/stores/CartStore.js";

const userStore = useUserStore()
const cartStore = useCartStore()

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
const route = useRoute()

const user = ref(null)

const { type } = toRefs(props);

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const emailConfirmation = ref('')
const password = ref('')
const passwordConfirmation = ref('')
const isChecked = ref(false)

onMounted(async () => {
  user.value = await userStore.getUser()
  firstName.value = user.value && user.value.first_name ? user.value.first_name : ''
  lastName.value = user.value && user.value.lastName ? user.value.lastName : ''
  email.value = user.value && user.value.email ? user.value.email : ''
})

const isLoading = ref(true)

const isLoadingGit = ref(true)

const toast = useToast();

const sendRequest = async () => {

  if(type.value === 'login') {

      isLoading.value = false

      const response = await userStore.login({
        email: email.value,
        password: password.value,
      })

      isLoading.value = true

      if(!isChecked.value) {

        userStore.setError('Agree to the privacy policy.', 'is_checked')

      }

      if(response) {

        await router.push({name: 'welcome'})

        toast.success("Successful authorization", {
          timeout: 2000
        });

        return

      }

      await router.push({name: 'login'})

      return

  }

  if(type.value === 'register') {

    if(!isChecked.value) {

      userStore.setError('Agree to the privacy policy.', 'is_checked')

    } else {

      isLoading.value = false

      const response = await userStore.register({
        first_name: firstName.value,
        last_name: lastName.value,
        email: email.value,
        email_confirmation: emailConfirmation.value,
        password: password.value,
        password_confirmation: passwordConfirmation.value,
        referral: route.params.referrer,
      })

      isLoading.value = true

      password.value = ''
      passwordConfirmation.value = ''

      if(response) {

        await router.push({name: 'welcome'})

        toast.success("Successful registration", {
          timeout: 2000
        });

      }

    }

  }

  if(type.value === 'payment') {

    isLoading.value = false

    if(!isChecked.value) {

      userStore.setError('Agree to the privacy policy.', 'is_checked')

    } else {

      await cartStore.checkout({
        first_name: firstName.value,
        last_name: lastName.value,
        email: email.value,
        coupon_id: cartStore.coupon ? cartStore.coupon.id : null,
        products: cartStore.cart,
        email_confirmation: emailConfirmation.value,
      })

      await router.push({name: 'profile'})

      toast.success("Successful ordering", {
        timeout: 2000
      });

    }

    isLoading.value = true

  }

}

const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

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
        <div class="flex flex-col gap-[8px] w-[100%]" :class="type === 'register' ? '621:w-[48%]' : type === 'payment' ? '980:w-[48%]' : ''" v-if="type === 'register' || type === 'payment'">
          <label class="manrope-medium text-accent-light-blue" for="first_name">First name</label>
          <input
              required
              :class="userStore.errors && userStore.errors.first_name && userStore.errors.first_name[0] ? 'border-red-500 placeholder:font-normal placeholder:text-red-500 placeholder:text-opacity-75' : ''"
              :placeholder="userStore.errors && userStore.errors.first_name ? userStore.errors.first_name[0] : ''"
              v-model="firstName"
              class="input py-[15px] px-5" type="text" name="first_name" id="first_name">
        </div>
        <div class="flex flex-col gap-[8px] w-[100%]" :class="type === 'register' ? '621:w-[48%]' : type === 'payment' ? '980:w-[48%]' : ''" v-if="type === 'register' || type === 'payment'">
          <label class="manrope-medium text-accent-light-blue" for="last_name">Last name</label>
          <input
              required
              :class="userStore.errors.last_name && userStore.errors.last_name[0] ? 'border-red-500 placeholder:font-normal placeholder:text-red-500 placeholder:text-opacity-75' : ''"
              :placeholder="userStore.errors.last_name ? userStore.errors.last_name[0] : ''"
              v-model="lastName"
              class="input py-[15px] px-5" type="text" name="last_name" id="last_name">
        </div>
        <div class="flex flex-col gap-[8px] w-[100%]" :class="type === 'login' ? 'w-full' : (type === 'register' ? '621:w-[48%]' : type === 'payment' ? '980:w-[48%]' : '')">
          <label class="manrope-medium text-accent-light-blue" for="email">E-mail address</label>
          <input
              required
              typeof="email"
              :class="userStore.errors && userStore.errors.email && userStore.errors.email[0] ? 'border-red-500 placeholder:text-red-500 placeholder:font-normal placeholder:text-opacity-75' : ''"
              :placeholder="userStore.errors && userStore.errors.email ? userStore.errors.email[0] : ''"
              v-model="email"
              class="input py-[15px] px-5" type="text" name="email" id="email">
        </div>
        <div class="flex flex-col gap-[8px] w-[100%]" :class="type === 'register' ? '621:w-[48%]' : type === 'payment' ? '980:w-[48%]' : ''" v-if="type === 'register' || type === 'payment'">
          <label class="manrope-medium text-accent-light-blue" for="email_confirmation">Repeat E-mail address</label>
          <input
              required
              typeof="email"
              :class="userStore.errors.email_confirmation && userStore.errors.email_confirmation[0] ? 'border-red-500 placeholder:font-normal placeholder:text-red-500 placeholder:text-opacity-75' : ''"
              :placeholder="userStore.errors.email_confirmation ? userStore.errors.email_confirmation[0] : ''"
              v-model="emailConfirmation"
              class="input py-[15px] px-5" type="text" name="email" id="email_confirmation">
        </div>
        <div v-show="type !== 'payment'" class="flex flex-col gap-[8px] w-[100%]" :class="type === 'login' ? 'w-full' : (type === 'register' ? '621:w-[48%]' : type === 'payment' ? '980:w-[48%]' : '')">
          <label class="manrope-medium text-accent-light-blue" for="password">Password</label>
          <input
              required
              :class="userStore.errors && userStore.errors.password && userStore.errors.password[0] ?
              'border-red-500 placeholder:text-red-500 placeholder:font-normal placeholder:text-opacity-75' : ''"
              :placeholder="userStore.errors && userStore.errors.password ? userStore.errors.password[0] : ''"
              v-model="password"
              class="input py-[15px] px-5" type="password" name="password" id="password">
        </div>
        <div v-show="type !== 'payment'" class="flex flex-col gap-[8px] w-[100%]" :class="type === 'register' ? '621:w-[48%]' : type === 'payment' ? '980:w-[48%]' : ''" v-if="type === 'register' || type === 'payment'">
          <label class="manrope-medium text-accent-light-blue" for="password_confirmation">Again password</label>
          <input
              required
              :class="userStore.errors.password_confirmation && userStore.errors.password_confirmation[0] ? 'border-red-500 placeholder:font-normal placeholder:text-red-500 placeholder:text-opacity-75' : ''"
              :placeholder="userStore.errors.password_confirmation ? userStore.errors.password_confirmation[0] : ''"
              v-model="passwordConfirmation"
              class="input py-[15px] px-5" type="password" name="password_confirmation" id="password_confirmation">
        </div>
        <div class="flex flex-col items-start gap-[8px] w-[100%]" :class="type === 'login' ? '621:w-[48%]' : ''" v-if="type === 'login'">
          <label class="manrope-medium text-accent-light-blue" for="password_confirmation">Github</label>
          <button @click="userStore.loginWithProvider('github')" class="px-[10px] py-[10px]
          transition-all duration-300 hover:bg-white hover:bg-opacity-10
          flex items-center justify-center border border-white border-opacity-25 rounded">
            <Loading color="white" size="6" v-if="!isLoadingGit"/>
            <div v-else class="h-[35px]">
              <img :src="gitHubWhiteLogo" alt="Logo" class="h-full w-full">
            </div>
          </button>
        </div>
        <div class="flex flex-col gap-4 w-[100%]" :class="type === 'register' ? '621:w-[48%]' : type === 'payment' ? '980:w-[48%]' : ''" v-if="type === 'register' || type === 'payment'">
          <span class="text-red-500 font-normal" v-if="userStore.errors.is_checked">{{ userStore.errors.is_checked }}</span>
          <div class="flex items-center gap-4">
            <Checkbox name="agreement" v-model="isChecked"/>
            <p class="text-accent-light-blue manrope-medium">I agree to Accempire' <a href="#" class="text-accent-green">Terms</a> and <a class="text-accent-green" href="#">Privacy</a>.</p>
          </div>
        </div>
      </div>
      <div class="flex items-center gap-7">
        <ButtonComponent @click="sendRequest()" class="py-[15px] px-[63px] w-[170px] h-[55px]" type="blue">
          <Loading color="white" size="6" v-if="!isLoading"/>
          <div v-else>
            {{ capitalizeFirstLetter(type) }}
          </div>
        </ButtonComponent>
        <!--        <ButtonComponent @click="sendRequest()" class="py-[13px] px-[71px] text-accent-dark-blue hover:text-white" type="green">{{ capitalizeFirstLetter(this.type) }}</ButtonComponent>-->
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>