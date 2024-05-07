import {defineStore} from "pinia";

export const useMainStore = defineStore('mainStore', {

    state: () => ({

        showUp: false,

        showPopup: false,

        cookie_consent: JSON.parse(localStorage.getItem('cookie_consent')) || false,

    }),

    getters: {

    },

    actions: {

        acceptCookies() {

            this.cookie_consent = true

            localStorage.setItem('cookie_consent', JSON.stringify(true))

        },

        showPopup() {

            setTimeout(() => {

                if (!this.showPopup) this.showPopup = true

            }, 3000)

        },

        showPopupWithInterval() {

            // 10 минут = 600 000 миллисекунд
            setInterval(() => {

                if (!this.showPopup) this.showPopup = true;

            }, 600000);

        },

    }

})