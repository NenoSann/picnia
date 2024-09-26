import { createRouter, createWebHistory } from 'vue-router';
const HomePageVue = () => import('../views/HomePage.vue');
const LoginPageVue = () => import('../views/LoginPage.vue');
const ProfileEdittingPageVue = () => import('../views/ProfileEdittingPage.vue');
const SearchPageVue = () => import('../views/SearchPage.vue');
const ProfileVue = () => import('../views/Profile.vue');
const _ProfileVue = () => import('../views/PostDetail.vue');
const NotFound404Vue = () => import('../views/NotFound404.vue');

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/picnia',
      name: 'homePage',
      component: HomePageVue
    },

    {
      path: '/picnia/login',
      name: 'loginPage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: LoginPageVue
    },

    {
      path: '/picnia/profile/:userName',
      name: 'profilePage',
      component: ProfileVue
    },
    {
      path: '/picnia/profileEdit',
      name: 'profileEdit',
      component: ProfileEdittingPageVue
    },

    {
      path: '/picnia/search',
      name: 'searchPage',
      component: SearchPageVue
    },
    {
      path: '/picnia/:postId',
      name: 'post',
      component: _ProfileVue
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404NotFound',
      component: NotFound404Vue
    }
  ]
});

export default router;
