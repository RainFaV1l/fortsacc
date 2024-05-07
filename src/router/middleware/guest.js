import {useUserStore} from "@/stores/UserStore.js";

export const guest = async ({ next }) => {

    const userStore = useUserStore()

    const token = await userStore.getToken()

    if(token) {
        return next({
            name: 'profile'
        })
    }

    return next()

}