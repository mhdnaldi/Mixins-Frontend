<template>
  <b-col cols lg="9" v-show="showChat" style="position: relative">
    <b-row>
      <div class="flexx" style="width:100%; ">
        <div class="flexx" v-if="roomChat[0]">
          <div class="img-profile-chat" style="display:inline-block;">
            <img
              v-if="roomChat[0].user_image === null"
              class="profiles center"
              src="../assets/img/default.png"
              alt
            />
            <img
              v-if="roomChat[0].user_image !== null"
              class="img-profile-chat"
              :src="port + roomChat[0].user_image"
              alt=""
            />
          </div>
          <h5 style="display:inline-block; margin-left: 20px">
            {{ roomChat[0].user_name }}
          </h5>
        </div>
        <div v-b-modal.modal-sm.modal-3 v-if="roomChat[0]">
          <b-modal id="modal-3" title="Profile" hide-footer>
            <div>
              <b-row align-content="center">
                <b-col cols lg="12"
                  ><div class="img-profile center">
                    <img
                      v-if="roomChat[0].user_image === null"
                      class="profiles center"
                      src="../assets/img/default.png"
                      alt
                    />
                    <img
                      v-if="roomChat[0].user_image !== null"
                      class="img-profile center"
                      :src="port + roomChat[0].user_image"
                      alt=""
                    /></div
                ></b-col>
              </b-row>
              <b-row align-content="center" class="mt-3">
                <b-col cols lg="12"
                  ><div class="center">
                    <h6
                      style="font-size: 20px; font-weight:500; text-align: center"
                    >
                      {{ roomChat[0].user_name }}
                    </h6>
                  </div></b-col
                >
              </b-row>
              <b-row align-content="center">
                <b-col cols lg="12"
                  ><div class="center">
                    <p style="text-align: center">
                      {{ roomChat[0].user_email }}
                    </p>
                  </div></b-col
                >
              </b-row>
              <b-row align-content="center">
                <b-col cols lg="12"
                  ><div class="center">
                    <p style="text-align: center">
                      {{ roomChat[0].user_phone }}
                    </p>
                  </div></b-col
                >
              </b-row>
            </div>
          </b-modal>
          <img src="../assets/img/Profile menu.png" alt="" />
        </div>
      </div>
      <div style="width: 95%; border: 1px solid darkgrey; margin: 0 auto"></div>
    </b-row>
    <div style="height: 550px; overflow-x: hidden;">
      <b-row v-for="(value, index) in roomMessages" :key="index">
        <div class="flexx">
          <div class="img-profile-sender mr-3" style="display:inline-block;">
            <img
              v-if="value.receiver.user_image === null"
              class="img-profile-sender mr-3"
              src="../assets/img/default.png"
              alt
            />
            <img
              v-if="value.receiver.user_image !== null"
              class="img-profile-sender mr-3"
              :src="port + value.receiver.user_image"
              alt=""
            />
          </div>

          <div class="sender">
            <p style="padding: 3px 12px 0 12px; margin-bottom: 5px">
              {{ value.text_message }}
            </p>
          </div>
        </div>
      </b-row>
    </div>
    <b-row style="position: absolute; bottom:30px; right:20px; left: 20px">
      <b-col lg="10" width>
        <b-form-input v-model="text" placeholder="Enter Message"></b-form-input>
      </b-col>
      <b-col lg="2">
        <b-button @click="sendMessage" style="width: 100%" variant="primary"
          >SEND</b-button
        >
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import io from 'socket.io-client'
export default {
  data() {
    return {
      alert: false,
      alertErr: false,
      msgs: '',
      coordinates: {
        lat: 0,
        lng: 0
      },
      socket: io('http://localhost:3000'),
      form: {
        user_name: '',
        user_password: '',
        user_phone: '',
        user_image: {}
      },
      port: 'http://localhost:3000/',
      friendsEmail: '',
      searchName: '',
      roomId: '',
      showEmpty: true,
      showChat: false,
      text: '',
      friendsId: '',
      showAllFriends: false,
      showAllRoom: false,
      dataImg: ''
    }
  },
  mounted() {
    this.socket.on('chatMixins', data => {
      this.socketMsg(data)
    })
  },
  methods: {
    ...mapActions([
      'editUser',
      'getUserById',
      'addFriend',
      'logout',
      'getAllFriends',
      'searchFriends',
      'postRoom',
      'getUserRoom',
      'sendMessages',
      'getAllRoom',
      'getMessage'
    ]),
    showRoomChat(value) {
      console.log(value)
      this.roomId = value.room_id
      this.friendsId = value.friends_id
      this.getMessage(value.room_id)
      const roomData = {
        friends_id: this.friendsId,
        user_id: this.user.user_id
      }

      this.getUserRoom(roomData)
      this.showEmpty = false
      this.showChat = true
      this.socket.emit('setRoom', this.roomId)
    },
    sendMessage() {
      const setData = {
        user_id: this.user.user_id,
        friends_id: this.friendsId,
        room_id: this.roomId,
        text_message: this.text,
        receiver: {
          user_image: this.profile[0].user_image
        }
      }
      this.sendMessages(setData)
      // SOCKET IO SENDMSG
      this.socket.emit('mixinsMsg', setData)
      this.text = ''
    }
  },
  computed: {
    ...mapGetters({
      user: 'userData',
      profile: 'user',
      msg: 'msg',
      friends: 'myFriends',
      roomData: 'room',
      roomChat: 'roomChat',
      allRooms: 'allRoom',
      roomMessages: 'allRoomMsg'
    })
  }
}
</script>

<style scoped>
.profiles {
  width: 64px;
  height: 64px;
  border-radius: 20px;
}

.center {
  margin: 0 auto;
}

.flexx {
  display: flex;
  justify-content: space-between;
  text-align: left;
  align-items: center;
  height: 60px;
  margin: 20px;
}

.img-profile-chat {
  width: 62px;
  height: 62px;
  border-radius: 20px;
}

.img-profile {
  width: 82px;
  height: 82px;
  border-radius: 30px;
  /* background-color: red; */
}

.img-profile-chat {
  width: 62px;
  height: 62px;
  border-radius: 20px;
}

.img-profile-sender {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  /* background-color: aqua; */
}

.sender {
  background: #7e98df;
  border-radius: 35px 35px 35px 10px;
  text-align: left;
  color: #fff;
  max-width: 260px;
  word-wrap: break-word;
}
</style>
