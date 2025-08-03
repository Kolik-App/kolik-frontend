import WelcomePage from "@/WelcomePage.vue";
import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: () => import('@/WelcomePage.vue'),
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router;