import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import LoginPage from './pages/LoginPage.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/login' },
  { path: '/login', name: 'login', component: LoginPage },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
