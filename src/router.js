import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'shared-app',
    component: () => import(/* webpackChunkName: "shared-app" */ '../src/components/HelloWorld.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
