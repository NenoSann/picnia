import HomePageVue from '../views/HomePage.vue'
import LoginPageVue from '../views/LoginPage.vue'
import ProfileEdittingPageVue from '../views/ProfileEdittingPage.vue'
import SearchPageVue from '../views/SearchPage.vue'
import ProfileVue from '../views/Profile.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: HomePageVue,
    },

    {
      path: '/login',
      name: 'loginPage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: LoginPageVue,
    },

    {
      path: '/profile',
      name: 'profilePage',
      component: ProfileVue,
    },
    {
      path: '/profileEddit',
      name: 'profileEddit',
      component: ProfileEdittingPageVue
    },

    {
      path: '/search',
      name: 'searchPage',
      component: SearchPageVue,
    }
  ]
})

export default router
