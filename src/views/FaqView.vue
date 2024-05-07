<script setup>
import FooterComponent from "@/components/FooterComponent.vue";
import Accordion from "@/components/UI/Accordion.vue";
import Header from "@/components/header/Header.vue";
</script>

<template>
  <Header/>
  <div class="min-h-[50.32vh]">
    <div class="container py-[50px]">
      <div class="flex flex-col gap-[50px]">
        <h1 class="text-5xl font-bold text-center">F.A.Q.</h1>
        <div class="flex flex-col gap-[30px]">
          <Accordion :item="
          {
            name: 'What is Accempire?',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet animi dolor ea eos excepturi facere, nemo odio, quae, quis quos ratione rem voluptas! Assumenda beatae consectetur id ipsa repellat!' }
          "/>
          <Accordion :item="
          {
            name: 'What is Accempire?',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet animi dolor ea eos excepturi facere, nemo odio, quae, quis quos ratione rem voluptas! Assumenda beatae consectetur id ipsa repellat!' }
          "/>
          <Accordion :item="
          {
            name: 'What is Accempire?',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet animi dolor ea eos excepturi facere, nemo odio, quae, quis quos ratione rem voluptas! Assumenda beatae consectetur id ipsa repellat!' }
          "/>
          <Accordion :item="
          {
            name: 'What is Accempire?',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet animi dolor ea eos excepturi facere, nemo odio, quae, quis quos ratione rem voluptas! Assumenda beatae consectetur id ipsa repellat!' }
          "/>
        </div>
      </div>
    </div>
  </div>
  <FooterComponent/>
</template>

<style scoped>

</style>
