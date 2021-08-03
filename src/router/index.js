import VueRouter from 'vue-router'

import Home from '@/views/Home'
import Registration from '@/views/Registration'
import Login from '@/views/Login'

const router = new VueRouter({
  routes: [
    {
      name: 'home',
      path: '/home',
      component: Home,
      alias: '/'
    },
    {
      name: 'registration',
      path: '/registration',
      component: Registration
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    }
  ],
  mode: 'history',
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router
