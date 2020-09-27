import axios from 'axios'

export default {
  state: {
    search: {},
    user: [],
    msg: '',
    myFriends: []
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload.data
      state.msg = payload.msg
    },
    setFriends(state, payload) {
      state.myFriends = payload
    },
    setSearch(state, payload) {
      state.search = payload
      // console.log(state.search)
    }
  },
  actions: {
    getAllFriends(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://localhost:3000/chat/get-friends/${payload}`)
          .then(res => {
            context.commit('setFriends', res.data.data)
            resolve(res.data.msg)
          })
          .catch(err => {
            reject(err.response)
          })
      })
    },
    getUserById(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://localhost:3000/users/${payload}`)
          .then(res => {
            context.commit('setUser', res.data)
            resolve(res.data)
          })
          .catch(err => {
            reject(err.response.data.msg)
          })
      })
    },
    editUser(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(`http://localhost:3000/users/${payload.user_id}`, payload.form)
          .then(res => {
            resolve(res.data.msg)
          })
          .catch(err => {
            reject(err.response.data.msg)
          })
      })
    },
    addFriend(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post('http://localhost:3000/chat/add-friends', payload)
          .then(res => {
            resolve(res.data.msg)
          })
          .catch(err => {
            reject(err.response.data.msg)
          })
      })
    },
    searchFriends(context, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios
          .get(
            `http://localhost:3000/chat/search-friends?id=${context.state.search.id}&search=${context.state.search.search}`
          )
          .then(res => {
            context.commit('setFriends', res.data.data)
            resolve(res.data.msg)
          })
          .catch(err => {
            reject(err.response.data.msg)
          })
      })
    }
  },
  getters: {
    user(state) {
      return state.user
    },
    msg(state) {
      return state.msg
    },
    myFriends(state) {
      return state.myFriends
    }
  }
}
