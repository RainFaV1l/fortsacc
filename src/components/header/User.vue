<script setup>
  import {useUserStore} from "@/stores/UserStore.js";

  const userStore = useUserStore()
</script>

<template>
  <button class="flex items-center gap-[10px]">
    <div class="h-[38px] w-[38px]">
      <img class="h-full w-full rounded-full object-cover" src="/images/header/avatar.webp" alt="Аватарка">
    </div>
    <div class="uppercase text-[14px] roboto-bold">{{ userStore.user && (userStore.user.first_name ? userStore.user.first_name : '') + ' ' + (userStore.user.last_name ? userStore.user.last_name : '')  }}</div>
  </button>
</template>