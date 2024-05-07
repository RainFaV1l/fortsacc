<template>
  <button :class="border ? 'border-white border-opacity-10 hover:border-transparent' : 'border-transparent hover:border-white'"
          class="relative button group border transition duration-300">
    <span
        :class="[
            border ? 'opacity-0 group-hover:opacity-100' : 'group-hover:opacity-0 group-hover:-z-0',
            writeBgColor(checkAllowedTypes(type, allowedTypes)),
        ]"
        class="absolute h-full w-full rounded-[10px] transition duration-300"></span>
    <span class="relative z-10"><slot/></span>
  </button>
</template>

<script setup>
  const allowedTypes = [
    'blue',
    'green',
    'white',
  ]
  defineProps({
    border: {
      type: Boolean,
      required: false
    },
    type: {
      type: String,
      required: true
    }
  })
  const checkAllowedTypes = (type, array) => {
    if(array.includes(type)) {
      return type
    }
    return null
  }
  const writeBgColor = (value) => {

    switch(value) {

      case 'blue':
        return 'gradient-blue'

      case 'green':
        return 'gradient-green'

      case 'white':
        return 'bg-white'

    }

  }
</script>