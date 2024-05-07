<script setup>
import { RouterView } from 'vue-router'
import Up from "@/components/UI/Up.vue";
import Cookies from "@/components/Cookies.vue";
import {useMainStore} from "@/stores/MainStore.js";
import {VuePreloader} from "vue-preloader";
import {ref} from "vue";

const mainStore = useMainStore()

// Отображение всплывающего окна каждые 10 минут
mainStore.showPopupWithInterval()

// Показ popup при входе на сайт с задержкой в 3с
mainStore.showPopup()

const showAnimation = ref(true)

</script>

<template>
  <div class="wrapper bg-accent-dark-blue text-white manrope-regular">
    <VuePreloader
        background-color="#151938"
        transition-type="fade-up"
        :loading-speed="25"
        :transition-speed="1400"
        @loading-is-over="showAnimation = false"
        @transition-is-over="false"
        class="absolute h-full w-full z-50
        text-center flex items-center justify-center
        text-white
        text-2xl
    ">
        <template v-slot="{ percent }">
          <div v-if="showAnimation">
            <span>
              {{ percent }} %
            </span>
          </div>
        </template>
    </VuePreloader>
    <Up/>
    <transition name="popup"><Cookies v-show="mainStore.showPopup && !mainStore.cookie_consent" class="popup"/></transition>
    <RouterView />
  </div>
</template>

<style>
.roboto-thin {
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  font-style: normal;
}

.roboto-thin-italic {
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  font-style: italic;
}

.roboto-light {
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-style: normal;
}

.roboto-light-italic {
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-style: italic;
}

.roboto-regular {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.roboto-regular-italic {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: italic;
}

.roboto-medium {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-style: normal;
}

.roboto-medium-italic {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-style: italic;
}

.roboto-bold {
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-style: normal;
}

.roboto-bold-italic {
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-style: italic;
}

.roboto-black {
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-style: normal;
}

.roboto-black-italic {
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-style: italic;
}
.lalezar-regular {
  font-family: "Lalezar", system-ui;
  font-weight: 400;
  font-style: normal;
}
.manrope-regular {
  font-family: "Manrope", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
.manrope-medium {
  font-family: "Manrope", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}
.manrope-bold {
  font-family: "Manrope", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
}
.manrope-extrabold {
  font-family: "Manrope", sans-serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
}
.manrope-semibold {
  font-family: "Manrope", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
}
.jomhuria-regular {
  font-family: "Jomhuria", serif;
  font-weight: 400;
  font-style: normal;
}

button.active {
  background: linear-gradient(291deg, #604FFF 0%, #897CFF 100%);
}

/* Стилизация самого скроллбара */
* {
  scrollbar-width: auto; /* Установка ширины скроллбара */
  scrollbar-color: #604FFF #151938; /* Установка цвета ползунка и трека скроллбара */
}

/* Стилизация ползунка скроллбара */
*::-moz-scrollbar-thumb {
  background-color: #604FFF;
}

/* Стилизация трека скроллбара */
*::-moz-scrollbar-track {
  background-color: #151938;
}

/* Стилизация самого скроллбара */
::-webkit-scrollbar {
  width: 7px;
}
/* Стилизация ползунка скроллбара */
::-webkit-scrollbar-thumb {
  background-color: #604FFF;
  border-radius: 90px;
}

/* Стилизация трека скроллбара */
::-webkit-scrollbar-track {
  background-color: #151938;
  border-radius: 90px;
}

.popup-enter-from {opacity: 0;}
.popup-enter-to {opacity: 1;}
.popup-enter-active {transition: opacity .3s ease-in-out;}

.popup-leave-from {opacity: 1;}
.popup-leave-to {opacity: 0;}
.popup-leave-active {transition: opacity .3s ease-in-out;}

.popup {
  animation-name: popupShow;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-delay: 0.5s;
  animation-iteration-count: 1;
  animation-direction: alternate;
  animation-fill-mode: both;
  animation-play-state: running;
}

@keyframes popupShow {
  from {
    transform: rotate(0deg) scale(1); /* начальное состояние */
  }
  25% {
    transform: rotate(3deg) scale(1.01);
  }
  50% {
    transform: rotate(0deg) scale(1);
  }
  75% {
    transform: rotate(-3deg) scale(1.01);
  }
  to {
    transform: rotate(0deg) scale(1); /* конечное состояние */
  }
}

</style>