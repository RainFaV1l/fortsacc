<script setup>
import Header from "@/components/header/Header.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import {onMounted, ref} from "vue";
import {useInfiniteScroll} from "@vueuse/core";
import {useReviewStore} from "@/stores/ReviewStore.js";
import Review from "@/components/Review.vue";

const reviewStore = useReviewStore()

const listEl = ref(null)

const fetchingData = ref(true)

onMounted(async () => {
  if (reviewStore.currentPage === 1) {
    reviewStore.reviews = await reviewStore.fetchReviews()
  }
})

useInfiniteScroll(listEl, async () => {
  fetchingData.value = false
  await reviewStore.getReviewsOnScroll()
  fetchingData.value = true
}, {distance: 10})
</script>

<template>
  <div class="min-h-full flex flex-col">
    <Header/>
    <main class="flex-auto border-b border-white border-opacity-10">
      <div class="container py-[100px]">
        <div class="flex flex-col gap-[50px]">
          <div class="flex flex-col items-center gap-4">
            <h1 class="text-5xl font-bold text-center">Reviews</h1>
            <router-link :to="{ name: 'writeReview' }" class="text-accent-green">Write your review -></router-link>
          </div>
          <div class="flex flex-col gap-[30px]">
            <div class="min-h-[90vh]">
              <Transition>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] w-full" v-if="reviewStore.reviews.length > 0">
                  <Review v-for="(item) in reviewStore.reviews" :key="item.id" :item="item"/>
                </div>
                <div class="text-center" v-else>
                  Unfortunately, there are no reviews yet :(
                </div>
              </Transition>
            </div>
            <div v-show="fetchingData" class="h-2" ref="listEl"></div>
          </div>
        </div>
      </div>
    </main>
    <FooterComponent/>
  </div>
</template>

<style scoped>

</style>