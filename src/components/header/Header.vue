<script setup> 
import ButtonComponent from "@/components/UI/ButtonComponent.vue"; 
import IconSearch from "@/components/icons/IconSearch.vue"; 
import IconLogo from "@/components/icons/IconLogo.vue"; 
import Logo from "@/components/header/Logo.vue"; 
import Menu from "@/components/header/Menu.vue"; 
import User from "@/components/header/User.vue"; 
import Exit from "@/components/header/Exit.vue"; 
import Cart from "@/components/header/Cart.vue"; 
import {useRouter} from "vue-router"; 
import {useUserStore} from "@/stores/UserStore.js"; 
import {ref} from "vue";
import {useToast} from "vue-toastification";
 
const userStore = useUserStore() 
 
 
const isAuth = ref(userStore.isAuth) 
 
const router = useRouter()

const toast = useToast()
 
const logoutHandle = async () => {

  userStore.isLoading = true
 
  const logoutMessage = await userStore.logout(); 
 
  if (logoutMessage) {

    userStore.isLoading = false
 
    await router.push({name: 'login'})

    toast.success("Successful exit", {
      timeout: 2000
    });
 
    return 
 
  }
 
  console.error('Не удалось выйти из системы.'); 
 
} 
 
</script> 
 
<template> 
  <header class="border-b border-white border-opacity-10"> 
    <div class="container py-3"> 
      <div class="flex flex-col mx:flex-row gap-[10px] mx:gap-[0px] items-center justify-between"> 
        <div class="flex items-center gap-12"> 
          <RouterLink :to="{name: 'home'}"> 
            <Logo name="Fortsacc" :h="39" :w="39" :font-size="20"> 
              <IconLogo/> 
            </Logo> 
          </RouterLink> 
          <Menu/> 
        </div> 
        <div class="flex items-center gap-8"> 
          <IconSearch class="h-[15px] w-[15px] x:h-5 x:w-5 cursor-pointer"/> 
          <RouterLink :to="{name: 'payment'}"> 
            <Cart/> 
          </RouterLink> 
          <div class="flex items-center gap-[10px]" v-if="!isAuth"> 
            <router-link :to="{ name: 'login' }"><ButtonComponent class="py-[6px] px-[16px] x:py-[10px] x:px-[35px] text-[14px]" :border="true" type="blue">Log in</ButtonComponent></router-link>
            <router-link :to="{ name: 'register' }"><ButtonComponent class="py-[6px] px-[16px] x:py-[10px] x:px-[35px] text-[14px]" type="blue">Sign in</ButtonComponent></router-link>
          </div> 
          <div v-else class="flex items-center gap-[20px] cursor-pointer ml-[37px]"> 
            <User @click="router.push({ name: 'profile' })"/> 
            <Exit @click="logoutHandle"/> 
          </div> 
        </div> 
      </div> 
    </div> 
  </header> 
</template> 
 
<style scoped> 
 
</style>