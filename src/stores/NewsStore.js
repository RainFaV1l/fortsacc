import {defineStore} from "pinia";
import axios from "axios";
import router from "@/router/index.js";
import {useUserStore} from "@/stores/UserStore.js";

export const useNewsStore = defineStore('newsStore', {
    state: () => ({
        news: [],
        showNews: {},
        currentPage: 1,
        lastPage: null,
        isLoading: false,
    }),
    getters: {

    },
    actions: {
        async fetchNews() {

            try {

                this.isLoading = true

                const {data} = await axios.get(`/news?page=${this.currentPage}`)

                this.currentPage = data.meta.current_page

                this.lastPage = data.meta.last_page

                this.isLoading = false

                return data.data

            } catch(exception) {

                console.error(exception)

                return null

            }

        },
        async fetchShowNews(id) {

            const userStore = useUserStore()

            try {

                this.isLoading = true

                userStore.isLoading = true

                const {data} = await axios.get(`/news/${id}`)

                this.showNews = data.data

                this.isLoading = false

                userStore.isLoading = false

            } catch(exception) {

                console.log(exception)

                await router.push({name: '404'})

            }

        },

        async getNewsOnScroll() {
            if(this.currentPage !== this.lastPage) {
                this.currentPage += 1
                const newNews = await this.fetchNews()
                this.news.push(...newNews)
            }
        }
    },
})