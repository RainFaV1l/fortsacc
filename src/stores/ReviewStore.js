import {defineStore} from "pinia";
import axios from "axios";
import {useUserStore} from "@/stores/UserStore.js";
import router from "@/router/index.js";
import {useToast} from "vue-toastification";

export const useReviewStore = defineStore('reviewStore', {
    state: () => ({
        reviews: [],
        currentPage: 1,
        lastPage: null,
        isLoading: false,
    }),
    getters: {

    },
    actions: {
        async fetchReviews() {

            const userStore  = useUserStore()

            try {

                this.isLoading = true

                userStore.isLoading = true

                const {data} = await axios.get(`/reviews?page=${this.currentPage}`)

                this.currentPage = data.meta.current_page

                this.lastPage = data.meta.last_page

                this.isLoading = false

                userStore.isLoading = false

                return data.data

            } catch(exception) {

                console.log(exception)

                return null

            }

        },

        async getReviewsOnScroll() {
            if(this.currentPage !== this.lastPage) {
                this.currentPage += 1
                const newReviews = await this.fetchReviews()
                this.reviews.push(...newReviews)
            }
        },

        setBearer(token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        },

        async sendRequest(data) {

            // Get toast interface
            const toast = useToast();

            try {

                const userStore = useUserStore()

                await userStore.getUser()

                await userStore.getCookie()

                const response = await axios.post('/reviews', data)

                await this.setBearer(userStore.isAuth)

                console.log(response)

                if(response.status === 201) {

                    await router.push({name: 'reviews'})

                    toast.success("Your review has been sent for moderation", {
                        timeout: 2000
                    });

                }

            } catch (exception) {

                const userStore = useUserStore()

                userStore.setErrors(exception.response.data.errors);

            }

        }
    }
})