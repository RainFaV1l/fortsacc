import {useUserStore} from "@/stores/UserStore.js";

export const auth = async ({ next }) => {

    const userStore = useUserStore()

    userStore.isLoading = true

    const isAuth = await userStore.getUser()

    userStore.user = isAuth

    if(!isAuth) {

        localStorage.removeItem('token')

        userStore.isAuth = false

        userStore.isLoading = false

        next({
            name: 'login'
        })

        return

    }

    userStore.isLoading = false

    next()

}