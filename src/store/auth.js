import axios from 'axios'
import router from './index'

export default {
  state: {
    userData: [],
    token: localStorage.getItem('token') || null
  },
  mutations: {
    getUserData(state, payload) {
      state.userData = payload
    },
    delUser(state) {
      state.userData = {}
      state.token = null
    }
  },
  actions: {
    loginUser(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post('http://localhost:3000/users/login', payload)
          .then(res => {
            // console.log(res.data)
            context.commit('getUserData', res.data.data)
            localStorage.setItem('token', res.data.data.token)
            resolve(res.data)
          })
          .catch(err => {
            reject(err.response.data.msg)
          })
      })
    },
    interceptorRequest(context) {
      console.log('interceptor works!')
      axios.interceptors.request.use(
        function(config) {
          config.headers.authorization = `Bearer ${context.state.token}`
          // Do something before request is sent
          return config
        },
        function(error) {
          return Promise.reject(error)
        }
      )
    },
    logout(context) {
      localStorage.removeItem('token')
      context.commit('delUser')
      router.push('/login')
    },
    interceptorResponse(context) {
      axios.interceptors.response.use(
        function(response) {
          return response
        },
        function(error) {
          if (error.response.status === 403) {
            if (
              error.response.data.msg === 'invalid token' ||
              error.response.data.msg === 'invalid signature!'
            ) {
              localStorage.removeItem('token')
              context.commit('delUser')
              router.push('/login')
              alert('Sorry your token is invalid! cannot pass this section!')
            } else if (error.response.data.msg === 'jwt expired') {
              localStorage.removeItem('token')
              context.commit('delUser')
              router.push('/login')
              alert('Sorry your token is invalid! cannot pass this section!')
            }
          }
          return Promise.reject(error)
        }
      )
    },
    registerUser(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post('http://localhost:3000/users/register', payload)
          .then(res => {
            context.commit('getUserData', res.data)
            resolve(res.data)
          })
          .catch(err => {
            reject(err.response.data.msg)
          })
      })
    },
    forgotPassword(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(
            `http://localhost:3000/users/forgot-password?user_email=${payload}`
          )
          .then(res => {
            console.log(res.data)
            resolve(res.data)
          })
          .catch(err => {
            reject(err.response.data.msg)
          })
      })
    },
    newPassword(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch('http://localhost:3000/users/change-password', payload)
          .then(res => {
            console.log(res.data.data.msg)
            resolve(res.data)
          })
          .catch(err => {
            reject(err.response.data.msg)
          })
      })
    }
  },
  getters: {
    userData(state) {
      return state.userData
    }
  }
}
