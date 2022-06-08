import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'dummy-app',
    component: () => import(/* webpackChunkName: "dummy-app" */ '../src/components/HelloWorld.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
