import {useUserStore} from "@/stores/UserStore.js";

export const auth = async ({ next }) => {

    const userStore = useUserStore()

    const isAuth = await userStore.getUser()

    userStore.user = isAuth

    if(!isAuth) {

        localStorage.removeItem('token')

        userStore.isAuth = false

        next({
            name: 'login'
        })

        return

    }

    next()

}