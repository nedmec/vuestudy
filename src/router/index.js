import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import LoginView from "@/views/LoginView";
import HomeView from "@/views/HomeView";
import ShowView from "@/views/ShowView";
const routes = [
  {
    path: '/',
    name: 'home',
    component: LoginView
  },
  {
    path: '/main',
    name: 'Main',
    component: AboutView
  },
  {
    path: '/User',
    name: 'User',
    component: ShowView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
