import {useUserStore} from "@/stores/UserStore.js";

export const guest = async ({ next }) => {

    const userStore = useUserStore()

    userStore.isLoading = true

    const token = await userStore.getToken()

    if(token) {
        userStore.isLoading = false
        return next({
            name: 'profile'
        })
    }

    userStore.isLoading = false

    return next()

}