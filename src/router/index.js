import { createRouter, createWebHistory } from 'vue-router'
import mainPage from '../views/mainPage.vue'
import blog from '../views/blog.vue'
import not_found from "../views/404.vue"

const routes = [
  {
    path: '/',
    name: 'mainPage',
    component: mainPage
  },
  {
    path: '/blog/:blogSlug',
    name: 'blog',
    component: blog,
    props: true
  },
  {
    path: '/:pathMatch(.*)',
    name: 'not_found',
    component: not_found
  }
]

/*
const scrollBehavior = function (to, from, savedPosition) {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {}
    // return { x: 0, y: 0 };

    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash

      // specify offset of the element
   //   if (to.hash === '#s_rooms') {
   //     position.offset = { y: 100 }
      

      // bypass #1number check
      if (document.querySelector(to.hash)) {
        return position
      }

      // if the returned position is falsy or an empty object,
      // will retain current scroll position.
      return false
    }

  }
} */



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // scrollBehavior
})

export default router
