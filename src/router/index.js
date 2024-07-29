import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import { blogData } from '../blogData'

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
      component: () => import('../views/BlogPostView.vue')
    },
    {
      path: '/resume',
      name: 'resume',
      component: () => import('../views/ResumeView.vue')
    }
  ]
})

// eslint-disable-next-line no-unused-vars
router.beforeEach((to, from) => {
  let path = to.fullPath
  let splitPath = path.split('/')
  if (splitPath[1] === '') {
    document.title = 'Welcome'
  } else if (splitPath[1] === 'blog') {
    document.title = blogData[splitPath[2]]?.title ?? 'Blog'
  } else if (splitPath[1] === 'resume') {
    document.title = 'Resume'
  } else {
    document.title = 'Welcome'
  }
})

export default router
