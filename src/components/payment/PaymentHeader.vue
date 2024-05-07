<script setup>

  defineProps({
    routeName: {
      type: String,
      required: false,
      default: 'home',
    },
    title: {
      type: String,
      required: false,
      default: 'payment <span class="text-accent-green">details</span>'
    },
  })

</script>

<template>
  <div class="flex items-center justify-between text-center">
    <RouterLink :to="{ name: routeName }">
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
    <h2 class="text-5xl font-['Roboto'] font-bold uppercase" v-html="title"></h2>
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
</template>

<style scoped>

</style>