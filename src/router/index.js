import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about-me',
      component: AboutView
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/Error404View.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogHomeView.vue')
    },
    {
      path: '/blog/:blogName',
      component: () => import('../views/BlogView.vue')
    },
    {
      path: '/resume',
      name: 'resume',
      component: () => import('../views/ResumeView.vue')
    }
  ]
})

export default router
