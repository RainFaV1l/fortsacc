import {defineStore} from "pinia";
import axios from "axios";
import router from "@/router/index.js";
import {useToast} from "vue-toastification";

export const useUserStore = defineStore('userStore',  {

    state: () => ({
        errors: {},
        isAuth: JSON.parse(localStorage.getItem('token')) || false,
        user: null,
        isLoading: false
    }),

    getters: {

    },

    actions: {

        setErrors(errors) {
            this.errors = errors;
        },

        setError(error, errorName) {
            this.errors = { ...this.errors, [errorName]: error };
        },

        async getCookie() {
            await axios.get(import.meta.env.VITE_APP_CSRF_TOKEN_URL)
        },

        async getToken() {
            return JSON.parse(localStorage.getItem('token'))
        },

        async getUser() {

            try {

                await this.getCookie()

                await this.setBearer(await this.getToken())

                const userResponse  = await axios.get('/user')

                return userResponse.data.data

            } catch (error) {

                console.error(error)

                return false

            }


        },

        setToken(token) {
            localStorage.setItem('token', JSON.stringify(token))
        },

        setBearer(token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        },

        authHandle(token) {

            this.setToken(token)

            this.isAuth = true

            this.setBearer(token)

        },

        async register(data) {

            try {

                await this.getCookie()

                const response = await axios.post('/register', data)

                if(response.status === 200) {

                    this.authHandle(response.data.token)

                    this.user = await this.getUser()

                    return this.user

                }

            } catch (exception) {

                this.setErrors(exception.response.data.errors);

            }

        },

        async login(data) {

            try {

                await this.getCookie()

                const response = await axios.post('/login', data)

                if(response.status === 200) {

                    this.authHandle(response.data.token)

                    this.user = await this.getUser()

                    return this.user

                }

            } catch (exception) {

                if(exception.response.status === 401) {

                    this.setError('Wrong login or password.', 'unauthorized')

                    return
                }

                this.setErrors(exception.response.data.errors);

            }

        },

        removeToken() {

            this.isAuth = false

            this.user = null

            localStorage.removeItem('token')

            delete axios.defaults.headers.common['Authorization'];

        },

        async logout() {

            try {

                await this.getCookie()

                await this.getUser()

                const response = await axios.post('/logout')

                if(response.status === 200) {

                    this.removeToken()

                    return response.data.message

                } else {

                    console.error('Ошибка при выходе из системы:', response.statusText)

                    localStorage.removeItem('token')

                    return false

                }

            } catch (error) {

                console.error('Ошибка при отправке запроса на выход из системы:', error.message)

                return false
            }

        },

        async loginWithProvider(provider) {
            window.location.href = import.meta.env.VITE_APP_API_URL + `/auth/${provider}`;
        },

        async checkOAuth(token) {

            const toast = useToast()

            this.authHandle(token)

            this.user = await this.getUser()

            if(!this.user) {

                this.removeToken()

                await router.push({name: 'login'})

                toast.error("Invalid authorization token", {
                    timeout: 2000
                });

                return

            }

            await router.push({name: 'profile'})

            toast.success("Successful authorization", {
                timeout: 2000
            });

        }

    },

})