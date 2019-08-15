import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Discount from './views/Discount.vue'
import Goods from './views/Goods.vue'
import Order from './views/Order.vue'
import Signin from './views/Signin.vue'
import Users from './views/Users.vue'
import Catalog from './views/Catalog.vue'
import Setting from './views/Setting.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/discount',
      name: 'discount',
      component: Discount
    },
    {
      path: '/goods',
      name: 'goods',
      component: Goods
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: Catalog
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting
    },
  ]
})
