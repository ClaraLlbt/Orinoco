import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/article/:id',
      name: 'ProductSheet',
      component: () => import('../views/ProductSheet.vue'),
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: () => import('../views/Checkout.vue'),
    },
  ],
  base: 'https://clarallbt.github.io/Orinoco/',
  scrollBehavior (to, from, savedPosition) {
    // Si l'utilisateur revient en arrière, utilisez la position sauvegardée
    if (savedPosition) {
      return savedPosition
    } else {
      // Sinon, faites défiler jusqu'en haut de la page
      return { left: 0, top: 0 }
    }
  }
})

export default router
