<script setup> 
  import {useRoute} from "vue-router"; 
 
  const route = useRoute() 
</script> 
 
<template> 
  <ul class="flex items-center gap-5 text-base text-[#9197C2] font-semibold"> 
    <li class="text-[8px] m:text-[11px] x:text-[14px] header-item menu-link" :class="route.name === 'home' ? 'active' : ''"><router-link :to="{ name: 'home' }">Home</router-link></li> 
    <li class="text-[8px] m:text-[11px] x:text-[14px] header-item menu-link" :class="route.name === 'faq' ? 'active' : ''"><router-link :to="{ name: 'faq' }">FAQ</router-link></li> 
  </ul> 
</template> 
 
<style scoped> 
  .menu-link:after { 
    position: absolute; 
    content: ''; 
    height: 6px; 
    width: 6px; 
    background-color: #9CFF4F; 
    opacity: 0; 
    bottom: -27px; 
    border-radius: 100%; 
  } 
  .menu-link:hover:after, .menu-link.active:after { 
    opacity: 1; 
  } 
  .menu-link.active { 
    color: #9CFF4F; 
  } 
</style>