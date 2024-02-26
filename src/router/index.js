import HomePageVue from '../views/HomePage.vue'
import LoginPageVue from '../views/LoginPage.vue'
import ProfileEdittingPageVue from '../views/ProfileEdittingPage.vue'
import SearchPageVue from '../views/SearchPage.vue'
import ProfileVue from '../views/Profile.vue'
import NotFound404Vue from '../views/NotFound404.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/picnia',
      name: 'homePage',
      component: HomePageVue,
    },

    {
      path: '/picnia/login',
      name: 'loginPage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: LoginPageVue,
    },

    {
      path: '/picnia/profile/:userName',
      name: 'profilePage',
      component: ProfileVue,
    },
    {
      path: '/picnia/profileEdit',
      name: 'profileEdit',
      component: ProfileEdittingPageVue
    },

    {
      path: '/picnia/search',
      name: 'searchPage',
      component: SearchPageVue,
    },
    {
      path: "/:pathMatch(.*)*",
      name: '404NotFound',
      component: NotFound404Vue
    }
  ]
})

export default router
