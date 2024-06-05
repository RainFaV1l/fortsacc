import {defineStore} from "pinia";
import axios from "axios";

export const useOrderStore = defineStore('orderStore', {
    state: () => ({
        orders: []
    }),
    getters: {

    },
    actions: {
        async getOrders() {

            try {

                const response = await axios.get('/orders/')

                if(response.status === 200) this.orders = response.data.data

            } catch (exception) {

                console.error(exception)

            }

        }
    },
})