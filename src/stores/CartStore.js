import {defineStore} from "pinia";

export const useCartStore = defineStore('cartStore',  {

    state: () => ({

        cart: JSON.parse(localStorage.getItem('cart')) || [],

    }),

    getters: {



    },

    actions: {

        getCartItem(itemId) {


            const productIndex = this.cart.findIndex(item => item.id == itemId)


            if(productIndex !== -1) {

                return this.cart[productIndex]

            }

            return false

        },


        plus(id) {

            const productIndex = this.cart.findIndex(element => element.id == id);

            if(productIndex !== -1) {

                if (this.cart[productIndex].count < 1000) {

                    this.cart[productIndex].count++;

                    localStorage.setItem('cart', JSON.stringify(this.cart))

                }

            }

        },

        minus(id) {

            const productIndex = this.cart.findIndex(element => element.id == id);

            if(productIndex !== -1) {

                if (this.cart[productIndex].count > 1) {

                    this.cart[productIndex].count--;

                    localStorage.setItem('cart', JSON.stringify(this.cart))

                }
                // else {
                //
                //     // Если количество товара стало равным 0, удаляем товар из корзины
                //     this.cart.splice(productIndex, 1);
                //
                //     localStorage.setItem('cart', JSON.stringify(this.cart))
                //
                // }

            }

        },

        setCart(item) {

            if (!item.count) item.count = 1

            const productIndex = this.cart.findIndex(element => element.id == item.id)

            if(productIndex === -1) {

                this.cart.push(item)

                localStorage.setItem('cart', JSON.stringify(this.cart))

                return

            }

            this.cart[productIndex].count++;

            localStorage.setItem('cart', JSON.stringify(this.cart))

        },

        destroyCartItem(itemId) {

            this.cart = this.cart.filter((item) => item.id !== itemId)

            localStorage.setItem('cart', JSON.stringify(this.cart))

        },

        clearCart() {

            this.cart = []

            localStorage.setItem('cart', JSON.stringify(this.cart))

        },

        find(id) {

            return this.cart.find(item => item.id = id)

        },

    }

})