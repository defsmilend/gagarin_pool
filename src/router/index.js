import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import GagarinPool_logged from "@/components/GagarinPool_logged"
import PoolStats from "@/components/PoolStats";
import Team from "@/components/Team"

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/stats',
    component: PoolStats
  },
  {
    path: '/teams',
    component: Team
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/add_worker',
    name: 'AddWorker',
    component: () => import('@/components/AddWorker.vue')
  },
  {
    path: '/logged',
    name: 'GagarinPool_logged',
    component: () => import('@/components/GagarinPool_logged.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router