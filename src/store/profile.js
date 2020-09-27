import axios from 'axios'

export default {
  state: {
    search: {},
    user: [],
    msg: '',
    myFriends: [],
    room: [],
    setUserRoom: {},
    // ---- USER ROOM
    roomChat: [],
    message: [],
    allRoom: []
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
    },
    setRoom(state, payload) {
      state.room = payload[0]
    },
    // USER-ROOM
    setUserRoom(state, payload) {
      state.setUserRoom = payload
    },
    setRoomChat(state, payload) {
      state.roomChat = payload
      // console.log(payload)
    },
    setMessage(state, payload) {
      state.message = payload
    },
    setAllRoom(state, payload) {
      state.allRoom = payload
    },
    setRoomMessages(payload) {
      console.log(payload)
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
    searchFriends(context) {
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
    },
    postRoom(context, payload) {
      return new Promise((resolve, reject) => [
        axios
          .post('http://localhost:3000/chat/create-room', payload)
          .then(res => {
            console.log(res.data)
            context.commit('setRoom', res.data.data)
            resolve(res)
          })
          .catch(err => {
            reject(err.response.data.msg)
          })
      ])
    },
    getUserRoom(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `http://localhost:3000/chat/user-room?friends_id=${payload.friends_id}&user_id=${payload.user_id}`
          )
          .then(res => {
            context.commit('setRoomChat', res.data.data)
            resolve(res)
          })
          .catch(err => {
            console.log(err.response.data.msg)
            reject(err.response.data.msg)
          })
      })
    },
    getAllRoom(context, payload) {
      return new Promise((resolve, reject) => [
        axios
          .get(`http://localhost:3000/chat/get-room/${payload}`)
          .then(res => {
            context.commit('setAllRoom', res.data.data)
            resolve.res
          })
          .catch(err => {
            reject(err.response.data.msg)
          })
      ])
    },
    sendMessages(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post('http://localhost:3000/chat/send-message', payload)
          .then(res => {
            context.commit('setMessage', res.data)
            console.log(res)
            resolve(res)
          })
          .catch(err => {
            console.log(err)
            reject(err.response.data.msg)
          })
      })
    },
    getMessage(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://localhost:3000/chat/room-id/${payload}`)
          .then(res => {
            resolve(res)
            console.log(res)
            context.commit('setRoomMessages', res)
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
    },
    room(state) {
      return state.room
    },
    // ROOM CHAT
    roomChat(state) {
      return state.roomChat
    },
    allRoom(state) {
      return state.allRoom
    }
  }
}
