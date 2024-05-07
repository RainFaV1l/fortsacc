<script setup>
  import {ref} from "vue";

  const types = [
    {
      name: 'Paid',
      color: '#E99D2C'
    },
    {
      name: 'Ready',
      color: '#9CFF4F'
    },
    {
      name: 'Refund and Cancellation',
      color: '#EC002A'
    },
  ]
  defineProps({
    w: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    number: {
      type: Number,
      required: true
    },
    type: {
      type: String,
      required: true
    },
  })

  let selectedType = ref('');

  const findType = (type) => {

    if(types.find(item => item.name === type)) {

      selectedType.value = types.find(item => item.name === type)

      return true

    }

    return false

  }

  const hexToRgba = (hex, alpha) => {

    // Убираем решетку, если она есть в начале HEX-кода
    hex = hex.replace('#', '');

    // Разбираем HEX-код на составляющие (красную, зеленую, синюю)
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    // Преобразуем альфа-значение в диапазон от 0 до 1
    let a = alpha || 1;

    // Возвращаем строку формата RGBA
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';

  }

</script>

<template>
  <div class="flex flex-col gap-[5px] bg-[rgba(17,16,11,.3)] border border-[#897CFF] rounded-[5px] p-5" :style="`width: ${w}px`">
    <h4 class="text-[20px] roboto-bold">{{ name }}</h4>
    <div class="flex flex-col gap-[5px]">
      <p class="text-white text-opacity-60 roboto-light text-[15px]">№ {{ number }}</p>
      <div class="flex items-center gap-[5px]">
        <div class="h-[9px] w-[9px] rounded-full flex items-center justify-center" :style="'background-color: ' + (findType(type) && selectedType ? hexToRgba(selectedType.color, .2) : '')">
          <div class="h-[5px] w-[5px] rounded-full" :style="'background-color: ' + (findType(type) && selectedType ? selectedType.color : '')"></div>
        </div>
        <p class="text-[15px] roboto-light">{{ type }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>