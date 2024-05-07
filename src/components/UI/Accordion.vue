<script setup>
import {ChevronDownIcon, ChevronUpIcon} from "@heroicons/vue/16/solid/index.js";
import {onMounted, ref} from "vue";

const accordionOpen = ref(false);
const contentRef = ref(null);
const maxContentHeight = ref('0px');

defineProps({
  item: {
    type: Object,
    required: true,
  }
})

const toggleAccordion = () => {
  if (!accordionOpen.value) {
    accordionOpen.value = !accordionOpen.value;
    setTimeout(() => {
      calculateMaxHeight();
    }, 150)
  } else {
    maxContentHeight.value = '0px';
    setTimeout(() => {
      accordionOpen.value = !accordionOpen.value
    }, 300)

  }
};

onMounted(() => {
  calculateMaxHeight();
});

const calculateMaxHeight = () => {
  if (contentRef.value) {
    maxContentHeight.value = accordionOpen.value ? `${contentRef.value.offsetHeight}px` : '0px';
  }
};
</script>

<template>
  <div class="flex flex-col border border-white border-opacity-15 rounded-[10px]">
    <div class="flex justify-between gap-7 cursor-pointer p-6 accordion" @click="toggleAccordion">
      <h2 class="text-lg transition duration-300 text-white font-bold" :style="accordionOpen ? 'opacity: 100%' : 'opacity: 75%'">{{ item.name }}</h2>
      <div class="relative h-5 w-5">
        <transition name="accordion-hide">
          <ChevronDownIcon class="h-5 w-5 accordion-icon absolute z-20" v-show="!accordionOpen"/>
        </transition>
        <transition name="accordion-show">
          <ChevronUpIcon class="h-5 w-5 accordion-icon absolute z-10" v-show="accordionOpen"/>
        </transition>
      </div>
    </div>
    <div class="accordion-wrapper" :style="{ maxHeight: maxContentHeight }" v-show="accordionOpen">
      <div class="accordion__content px-6 pb-7 text-base font-medium" ref="contentRef">{{ item.description }}</div>
    </div>
  </div>
</template>

<style scoped>
  .accordion-wrapper {
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
  }
  .accordion-hide-enter-from {opacity: 0;}
  .accordion-hide-enter-to {opacity: 1;}
  .accordion-hide-enter-active {transition: opacity .15s ease-in-out;}

  .accordion-hide-leave-from {opacity: 1;}
  .accordion-hide-leave-to {opacity: 0;}
  .accordion-hide-leave-active {transition: opacity .3s ease-in-out;}

  .accordion-show-enter-from {opacity: 0; transform: rotate(180deg);}
  .accordion-show-enter-to {opacity: 1; transform: rotate(0deg);}
  .accordion-show-enter-active {transition: opacity,transform .3s ease-in-out;}

  .accordion-show-leave-from {opacity: 0; transform: rotate(0deg);}
  .accordion-show-leave-to {opacity: 1; transform: rotate(180deg);}
  .accordion-show-leave-active {transition: opacity,transform .3s ease-in-out;}
</style>