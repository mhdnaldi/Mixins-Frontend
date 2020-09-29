import axios from 'axios'
import io from 'socket.io-client'
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
    allRoom: [],
    allRoomMsg: [],
    socket: io('http://localhost:3000')
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
    },
    setMessage(state, payload) {
      state.message = payload
    },
    setAllRoom(state, payload) {
      state.allRoom = payload
    },
    setRoomMessages(state, payload) {
      state.allRoomMsg = payload[0].messages
    },
    // SOCKET
    socketMsg(state, payload) {
      state.allRoomMsg.push(payload)
      console.log(state.allRoomMsg)
    }
  },
  actions: {
    getAllFriends(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://localhost:3000/chat/get-friends/${payload}`)
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
          .then(response => {
            context.commit('setRoomChat', response.data.data)
            resolve(response)
          })
          .catch(error => {
            reject(error.response.data.msg)
          })
      })
    },
    getAllRoom(context, payload) {
      return new Promise((resolve, reject) => [
        axios
          .get(`http://localhost:3000/chat/get-room/${payload}`)
          .then(response => {
            context.commit('setAllRoom', response.data.data)
            resolve(response)
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
            context.commit('setRoomMessages', res.data.data)
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
    },
    allRoomMsg(state) {
      console.log(state.allRoomMsg)
      return state.allRoomMsg
    }
  }
}
