import {defineStore} from "pinia";
import router from "@/router/index.js";
import axios from "axios";
import {useUserStore} from "@/stores/UserStore.js";
import {useToast} from "vue-toastification";

export const useCartStore = defineStore('cartStore',  {

    state: () => ({
        cart: JSON.parse(localStorage.getItem('cart')) || [],
        coupon: null,
        total: 0,
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

            if(this.cart.length === 0) {

                router.push({ name: 'cart' })

            }

        },

        clearCart() {

            this.cart = []

            localStorage.setItem('cart', JSON.stringify(this.cart))

        },

        find(id) {
            return this.cart.find(item => item.id = id)
        },

        getTotalPrice() {

            let total = this.cart.reduce((accumulator, currentValue) => {
                return accumulator + currentValue.price * currentValue.count
            }, 0)

            if(this.coupon) {
                total = total * ((100 - this.coupon.percent) / 100)
            }

            this.total = total

            return this.total
        },

        async checkCoupon(data) {

            const userStore = useUserStore()

            const toast= useToast()

            try {

                await userStore.getCookie()

                const response = await axios.post('/coupon/check', data)

                if(response.status === 200) {

                    const data = response.data.data

                    if(data.id) this.coupon = data

                    toast.success('Congratulations, you have successfully applied the coupon!', {
                        timeout: 2000
                    })

                }

            } catch (exception) {

                const errors = exception.response.data.errors

                userStore.setError(errors, 'coupon');

                if(errors && errors.name[0]) {
                    toast.error(errors.name[0], {
                        timeout: 2000
                    })
                } else {
                    toast.error('There were errors when applying the coupon!', {
                        timeout: 2000
                    })
                }

            }

        },

        async checkout(data) {

            const userStore = useUserStore()

            const toast= useToast()

            try {

                await userStore.getCookie()

                await userStore.getUser()

                console.log(userStore.isAuth)

                await userStore.setBearer(userStore.isAuth)

                if(this.coupon) data.coupon_id = this.coupon.id

                const response = await axios.post('/orders', data)

                console.log(response)

                if(response.status === 200) {

                    if(response.data.token) {

                        userStore.authHandle(response.data.token)

                        this.user = await userStore.getUser()

                    }

                    localStorage.removeItem('cart')

                    this.cart = []

                    toast.success('Congratulations on your successful order', {
                        timeout: 2000
                    })

                    await router.push({name: 'profile'})

                }

            } catch (exception) {

                userStore.setErrors(exception.response.data.errors);

                toast.error('There were errors when placing an order!', {
                    timeout: 2000
                })

            }

        }

    }

})