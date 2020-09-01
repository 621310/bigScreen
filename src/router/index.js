import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'index',
      component: () => import(/* webpackChunkName: "about" */ '../views/index.vue')
    },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/bigScreenTest',
    name: 'bigScreenTest',
    component: () => import( '../views/bigScreenTest.vue')
  },
  {
    path: '/ganntTest',
    name: 'ganntTest',
    component: () => import( '../views/ganntTest.vue')
  },
  {
    path: '/computed',
    name: 'computed',
    component: () => import( '../views/computed.vue')
  },
  {
    path: '/BuiltinComponents',
    name: 'BuiltinComponents',
    component: () => import( '../views/BuiltinComponents.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
