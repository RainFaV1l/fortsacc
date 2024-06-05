<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  }
})

const formatDate = (date) => {
  date = new Date(date)
  return date.toLocaleString("en", {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timezone: 'UTC'
  })
}
</script>

<template>
  <div class="flex flex-col gap-4 cursor-pointer border border-white rounded p-[30px]">
    <Transition>
      <div class="flex flex-col gap-2">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <p class="text-white text-opacity-60">Объявлено: {{ formatDate(item.created_at) }}</p>
        </div>
        <div class="mt-4 flex flex-col gap-3">
          <p class="uppercase font-bold">{{ item.full_name }}</p>
          <p class="text-base" v-html="item.message"></p>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>

</style>