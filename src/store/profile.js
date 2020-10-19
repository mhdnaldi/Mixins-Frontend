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
    }
  },
  actions: {
    getAllFriends(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}chat/get-friends/${payload}`)
          .then(response => {
            context.commit('setFriends', response.data.data)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getUserById(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}users/${payload}`)
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
          .patch(
            `${process.env.VUE_APP_URL}users/${payload.user_id}`,
            payload.form
          )
          .then(res => {
            resolve(res.data.msg)
          })
          .catch(err => {
            reject(err.response.data.msg)
          })
      })
    },
    editBio(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `${process.env.VUE_APP_URL}users/bio/${payload.id}`,
            payload.data
          )
          .then(res => {
            console.log(res)
            resolve(res.data.msg)
          })
          .catch(err => {
            console.log(err)
            reject(err.response.data.msg)
          })
      })
    },
    addFriend(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_URL}chat/add-friends`, payload)
          .then(res => {
            resolve(res.data.msg)
          })
          .catch(err => {
            reject(err.response.data.msg)
          })
      })
    },
    searchFriends(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `${process.env.VUE_APP_URL}chat/search-friends?id=${context.state.search.id}&search=${context.state.search.search}`
          )
          .then(res => {
            context.commit('setFriends', res.data.data)
            resolve(res.data.msg)
          })
          .catch(err => {
            reject(err.response.data.msg)
          })
      })
    },
    deleteFriend(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .delete(
            `${process.env.VUE_APP_URL}chat/delete-friends/${payload.id}?friends_id=${payload.friends_id}`
          )
          .then(res => {
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
