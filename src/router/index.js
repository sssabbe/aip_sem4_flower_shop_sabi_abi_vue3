import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Ads/HomeView.vue'
import LoginView from '../views/Auth/LoginView.vue'
import RegistrationView from '../views/Auth/RegistrationView.vue'
import AdListView from '../views/Ads/AdListView.vue'
import AdView from '../views/Ads/AdView.vue'
import NewAdView from '../views/Ads/NewAdView.vue'
import OrdersView from '../views/User/OrdersView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/registration',
    name: 'registration',
    component: RegistrationView
  },
  {
    path: '/list',
    name: 'list',
    component: AdListView
  },
  {
    path: '/ad/:id',
    name: 'ad',
    component: AdView
  },
  {
    path: '/new',
    name: 'new',
    component: NewAdView
  },
  {
    path: '/orders',
    name: 'orders',
    component: OrdersView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router