<script setup>

import FooterComponent from "@/components/FooterComponent.vue";
import PurchaseItemComponent from "@/components/UI/PurchaseItemComponent.vue";
import ProfileUserInfoItemComponent from "@/components/UI/ProfileUserInfoItemComponent.vue";
import Header from "@/components/header/Header.vue";
</script>

<template>
  <Header/>
  <ProfileUserInfoItemComponent/>
  <div style="background: url('/images/purchases/bg/bg.webp') no-repeat top; background-size: cover">
    <div class="container pt-[70px] pb-[119px]">
      <div class="flex flex-col gap-5">
        <h2 class="text-[30px] manrope-semibold">My purchases</h2>
        <div class="grid grid-cols-4 gap-x-[25px] gap-y-[20px]">
          <PurchaseItemComponent type="Paid" :number="235663" name="Name of product" w="260"/>
          <PurchaseItemComponent type="Ready" :number="235663" name="Name of product" w="260"/>
          <PurchaseItemComponent type="Refund and Cancellation" :number="235663" name="Name of product" w="260"/>
          <PurchaseItemComponent type="Ready" :number="235663" name="Name of product" w="260"/>
          <PurchaseItemComponent type="Paid" :number="235663" name="Name of product" w="260"/>
          <PurchaseItemComponent type="Ready" :number="235663" name="Name of product" w="260"/>
          <PurchaseItemComponent type="Refund and Cancellation" :number="235663" name="Name of product" w="260"/>
          <PurchaseItemComponent type="Ready" :number="235663" name="Name of product" w="260"/>
        </div>
      </div>
    </div>
  </div>
  <FooterComponent/>
</template>

<style scoped>

</style>