import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/', // when the url looks like http://localhost:8080/
    name: 'Home',
    component: loadPage('HomePage') // HomePage.vue is loaded into router-view
  },
  {
    path: '/about', // when the url looks like http://localhost:8080/about
    name: 'About',
    component: loadPage('AboutPage')  // AboutPage.vue is loaded into router-view
  },
  {
    path: '/search',
    name: 'Search',
    component: loadPage('SearchPage')
  },
  {
    path: '/account', // when the url looks like http://localhost:8080/account
    name: 'Account',
    component: loadPage('AccountPage'), // AccountPage.vue is loaded into router-view
    beforeEnter: authGuard
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
