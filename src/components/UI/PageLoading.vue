<script setup>
  import { FulfillingBouncingCircleSpinner } from 'epic-spinners'
</script>

<template>
  <div class="fixed h-full w-full z-50 flex items-center justify-center bg-accent-dark-blue" >
    <fulfilling-bouncing-circle-spinner
        :animation-duration="4000"
        :size="60"
        color="#604FFF"
    />
  </div>
</template>

<style scoped>

</style>