import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'login',
      component: () => import( '../views/blog/login.vue')
    },
    {
      path: '/index',
      name: 'index',
      component: () => import(/* webpackChunkName: "about" */ '../views/blog/index.vue'),
      children:[
        {
          path: '/',
          name: 'index',
          component: () => import( '../views/blog/index.vue')
        },
        {
          path: '/classification',
          name: 'classification',
          component: () => import( '../views/blog/classification.vue')
        },
        {
          path: '/my',
          name: 'my',
          component: () => import( '../views/blog/my.vue')
        },
      ]
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
    path: '/vuexTest',
    name: 'vuexTest',
    component: () => import( '../views/vuexTest.vue')
  },
  {
    path: '/BuiltinComponents',
    name: 'BuiltinComponents',
    component: () => import( '../views/BuiltinComponents.vue')
  },
    {
      path: '/gdMap_demo',
      name: 'gdMap_demo',
      component: () => import( '../views/gdMap_demo.vue')
    },
]

const router = new VueRouter({
  routes
})

export default router
