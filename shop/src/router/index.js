import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Dogs from '../views/Dogs'
import Cats from '../views/Cats'
import Contact from '../views/Contact'
import Cart from '../views/Cart'
import Product from '../views/Product'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/dogs',
      name: 'Dogs',
      component: Dogs
    },
    {
      path: '/cats',
      name: 'Cats',
      component: Cats
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
