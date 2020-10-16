import axios from 'axios'
import io from 'socket.io-client'
export default {
  state: {
    room: [], //
    setUserRoom: {}, //
    // ---- USER ROOM
    roomChat: [], //
    message: [], //
    allRoom: [], //
    allRoomMsg: [], //
    socket: io('http://localhost:5000') //
    // socket: io('https://backend-mixins.fwdev.online') //
  },
  mutations: {
    setRoom(state, payload) {
      state.room = payload[0]
    },
    setRoomChat(state, payload) {
      state.roomChat = payload
    },
    setAllRoom(state, payload) {
      state.allRoom = payload
    },
    setMessage(state, payload) {
      state.message = payload
    },
    setRoomMessages(state, payload) {
      state.allRoomMsg = payload[0].messages
    },
    setUserRoom(state, payload) {
      // ?????
      state.setUserRoom = payload
    },
    socketMsg(state, payload) {
      // SOCKET
      state.allRoomMsg.push(payload)
    }
  },
  actions: {
    postRoom(context, payload) {
      return new Promise((resolve, reject) => [
        axios
          .post(`${process.env.VUE_APP_URL}chat/create-room`, payload)
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
            `${process.env.VUE_APP_URL}chat/user-room?friends_id=${payload.friends_id}&user_id=${payload.user_id}`
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
          .get(`${process.env.VUE_APP_URL}chat/get-room/${payload}`)
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
          .post(`${process.env.VUE_APP_URL}chat/send-message`, payload)
          .then(res => {
            context.commit('setMessage', res.data)
            resolve(res)
          })
          .catch(err => {
            reject(err.response.data.msg)
          })
      })
    },
    getMessage(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}chat/room-id/${payload}`)
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
      return state.allRoomMsg
    }
  }
}
