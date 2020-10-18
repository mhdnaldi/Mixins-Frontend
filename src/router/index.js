import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Mixins from '../views/Mixins.vue'
import About from '../views/About.vue'
import Chat from '../views/Chat.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import Forgot from '../views/auth/Forgot.vue'
import NewPassword from '../views/auth/NewPassword.vue'
import Friend from '../views/FriendsList.vue'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home,
  //   meta: { requiresAuth: true }
  // },
  {
    path: '/',
    name: 'Mixins',
    component: Mixins,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresVisitor: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { requiresVisitor: true }
  },
  {
    path: '/forgot-password',
    name: 'Forgot',
    component: Forgot
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { requiresAuth: true }
  },
  {
    path: '/friend-list',
    name: 'Friend',
    component: Friend,
    meta: { requiresAuth: true }
  },
  {
    path: '/new-password',
    name: 'NewPassword',
    component: NewPassword
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLogin) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.isLogin) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
