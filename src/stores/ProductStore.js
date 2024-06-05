import {defineStore} from "pinia";
import axios from "axios";
import {computed} from "vue";
import router from "@/router/index.js";

export const useProductStore = defineStore('productStore', {

    state: () => ({

        products: [],

        product: [],

        categories: [],

        category: {},

        errors: [],

    }),

    getters: {

        getPopularProducts() {

            return this.products.filter((item) => item.popular === 1)

        },

        getProductsByCategory() {

            return this.products.filter((item) => item.category.id === this.category.id)

        },

        getCategory() {

            return computed(() => this.category)

        }

    },

    actions: {

        setCategory(category) {

            this.category = category

        },

        formatPrice(price) {

            return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', maximumFractionDigits: 2}).format(price);

        },

        async fetchProducts() {

            try {

                const {data} = await axios.get("/products")

                this.products = data.data

            } catch(exception) {

                console.log(exception)

            }

        },

        async fetchCategories() {

            try {

                const {data} = await axios.get( "/categories")

                this.categories = data.data

            } catch(exception) {

                console.log(exception)

            }

        },

        async fetchProduct(id) {

            try {

                const {data} = await axios.get(`/products/${id}`)

                this.product = data.data

                return data

            } catch(exception) {

                this.errors = exception.response.data.errors

                await router.push({name: '404'})

                return false

            }

        },

    },

})