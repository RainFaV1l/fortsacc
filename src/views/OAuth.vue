<script setup>
import PageLoading from "@/components/UI/PageLoading.vue";
import {useRoute} from "vue-router";
import {useUserStore} from "@/stores/UserStore.js";

const route = useRoute()
const userStore = useUserStore()

const token = route.params.token;

console.log(token)

if(token) {
  userStore.checkOAuth(token)
}
</script>

<template>
  <PageLoading v-show="true"/>
</template>

<style scoped>

</style>