import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Chat from '../views/Chat.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import Forgot from '../views/auth/Forgot.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/forgot-password',
    name: 'Forgot',
    component: Forgot
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
