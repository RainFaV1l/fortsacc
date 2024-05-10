import {defineStore} from "pinia";
import axios from "axios";

export const useUserStore = defineStore('userStore',  {

    state: () => ({
        errors: {},
        isAuth: JSON.parse(localStorage.getItem('token')) || false,
        user: null,
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
            await axios.get('http://backend.u2603273.isp.regruhosting.ru/sanctum/csrf-cookie')
            // http://127.0.0.1:8000/sanctum/csrf-cookie
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

        async logout() {

            try {

                const response = await axios.post('/logout')

                if(response.status === 200) {

                    this.isAuth = false

                    this.user = null

                    localStorage.removeItem('token')

                    await this.getCookie()

                    delete axios.defaults.headers.common['Authorization'];

                    return response.data.message

                } else {

                    console.error('Ошибка при выходе из системы:', response.statusText)

                    return false

                }

            } catch (error) {

                console.error('Ошибка при отправке запроса на выход из системы:', error.message)

                return false
            }

        }

    }

})