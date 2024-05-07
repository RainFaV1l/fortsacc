import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from "@/views/ProductView.vue";
import PaymentView from "@/views/PaymentView.vue";
import MysteryBoxView from "@/views/MysteryBoxView.vue";
import WelcomeView from "@/views/WelcomeView.vue";
import ProfileView from "@/views/ProfileView.vue";
import PurchasesView from "@/views/PurchasesView.vue";
import AffiliateView from "@/views/AffiliateView.vue";
import FaqView from "@/views/FaqView.vue";
import CartView from "@/views/CartView.vue";
import {useCartStore} from "@/stores/CartStore.js";
import NewsView from "@/views/NewsView.vue";
import TermsView from "@/views/TermsView.vue";
import RegisterView from "@/views/RegisterView.vue";
import LoginView from "@/views/LoginView.vue";
import {useUserStore} from "@/stores/UserStore.js";
import {auth} from "@/router/middleware/auth.js";
import {guest} from "@/router/middleware/guest.js";
import PageNotFound from "@/views/PageNotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/product/:id',
      name: 'product',
      component: ProductView
    },
    {
      path: '/payment',
      name: 'payment',
      component: PaymentView
    },
    {
      path: '/mystery-box',
      name: 'mysteryBox',
      component: MysteryBoxView
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: WelcomeView,
      meta: {
        middleware: 'auth'
      },
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
      meta: {
        middleware: 'auth'
      }
    },
    {
      path: '/purchases',
      name: 'purchases',
      component: PurchasesView,
      meta: {
        middleware: 'auth'
      },
    },
    {
      path: '/affiliate',
      name: 'affiliate',
      component: AffiliateView,
      meta: {
        middleware: 'auth'
      },
    },
    {
      path: '/faq',
      name: 'faq',
      component: FaqView,
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
    },
    {
      path: '/terms',
      name: 'terms',
      component: TermsView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: {
        middleware: 'guest'
      },
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        middleware: 'guest'
      },
    },
    {
      path: '/:pathMatch(.*)*',
      component: PageNotFound
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  },
})

const redirectToCart = (next) => {

  const cartStore = useCartStore()

  if(cartStore.cart.length === 0) {

    next({ name: 'cart' })

  } else next()

}

const clearErrors = () => {

  const userStore = useUserStore()

  userStore.setErrors({})

}

router.beforeEach(async (to, from, next) => {

  const requireAuth = to.matched.some(record => record.meta.middleware === 'auth')
  const requireGuest = to.matched.some(record => record.meta.middleware === 'guest')

  clearErrors()

  if(requireAuth) {
    await auth({ next })
  }

  else if(requireGuest) {
    await guest({ next })
  }

  else if(to.name === 'payment') {
    redirectToCart(next)
  }

  else {
    next()
  }



})

export default router
