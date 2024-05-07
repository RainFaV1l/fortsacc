<script setup>
  import {ref} from "vue";

  const check = ref(false)

  const props = defineProps({
    name: {
      type: String,
      required: true,
    },
  });

  const isChecked = ref(props.value);

  const emit = defineEmits(['update:modelValue'])

  const toggleCheck = () => {
    isChecked.value = !isChecked.value;
    emit('update:modelValue', isChecked.value);
  };

</script>

<template>
  <input type="checkbox" :name="name" v-model="isChecked" class="hidden" :id="name" @click="toggleCheck">
  <label :style="check ? 'background-color: #9CFF4F; color: #151938;' : ''" class="h-4 w-4 border border-white border-opacity-15 bg-transparent rounded-[2px] cursor-pointer flex justify-center items-center" :for="name" @click="check = !check">
    <svg v-show="check" width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 3L3.33059 5L8 1" stroke="#151938" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </label>
</template>

<style scoped>

</style>