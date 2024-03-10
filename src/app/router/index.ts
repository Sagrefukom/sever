import { createRouter, createWebHistory } from 'vue-router'
import HomePageView from '@/pages/HomePageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePageView
    }
  ]
})

export default router
