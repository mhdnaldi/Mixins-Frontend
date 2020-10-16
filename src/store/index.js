import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './auth'
import Profile from './profile'
import Chat from './chat'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Auth,
    Profile,
    Chat
  },
  state: {},
  mutations: {},
  actions: {},
  plugins: [
    createPersistedState({
      paths: ['Auth.userData'],
      storage: window.sessionStorage
    })
  ]
})
