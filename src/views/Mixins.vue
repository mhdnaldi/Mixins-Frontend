<template>
  <b-container fluid>
    <b-row>
      <b-col cols lg="3" style="box-shadow: 3px 3px 10px rgba(0,0,0,0.4);">
        <b-container>
          <b-row style="height: 85px" align-content="center">
            <b-col cols lg="10" sm="12" class="title"><h5>Mixins</h5></b-col>
            <b-col cols lg="2" sm="12"
              ><img
                id="popover-target-1"
                src="../assets/img/Menu.png"
                alt=""
                class="img-menu"
              /><b-popover
                target="popover-target-1"
                triggers="click"
                placement="leftbottom"
              >
                <div
                  class="px-2 py-2"
                  style="cursor: pointer"
                  v-b-modal.modal-sm.modal-1
                >
                  <!-- MODAL PROFILE -->
                  <b-modal id="modal-1" title="Edit profile" hide-footer>
                    <div>
                      <b-row align-content="center">
                        <b-col cols lg="12"
                          ><div class="img-profile center">
                            <img
                              v-if="profile[0].user_image === null"
                              class="img-profile center"
                              src="../assets/img/default.png"
                              alt
                            />
                            <img
                              v-if="profile[0].user_image !== null"
                              class="img-profile center"
                              :src="port + profile[0].user_image"
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
                              {{ profile[0].user_name }}
                            </h6>
                          </div></b-col
                        >
                      </b-row>
                      <b-row align-content="center">
                        <b-col cols lg="12"
                          ><div class="center">
                            <p style="text-align: center">
                              {{ profile[0].user_email }}
                            </p>
                          </div></b-col
                        >
                      </b-row>
                      <b-row align-content="center">
                        <b-col cols lg="12"
                          ><div class="center">
                            <p style="text-align: center">
                              {{ profile[0].user_phone }}
                            </p>
                          </div></b-col
                        >
                      </b-row>
                    </div>
                    <div>
                      <GmapMap
                        :center="{ lat: coordinates.lat, lng: coordinates.lng }"
                        :zoom="10"
                        map-type-id="terrain"
                        style="width: 80%; height: 300px; margin:10px auto"
                      >
                        <GmapMarker
                          :position="{
                            lat: coordinates.lat,
                            lng: coordinates.lng
                          }"
                          :clickable="true"
                          :draggable="true"
                          @click="clickMarker"
                          icon="https://img.icons8.com/color/48/000000/map-pin.png
"
                        />
                      </GmapMap>
                    </div>
                    <div class="mt-2">
                      <b-alert
                        variant="success"
                        class="mt-3"
                        v-bind:show="alert"
                        >{{ msgs }}</b-alert
                      >
                      <b-alert
                        variant="danger"
                        class="mt-3"
                        v-bind:show="alertErr"
                        >{{ msgs }}</b-alert
                      >
                      <b-form>
                        <b-form-group id="input-group-1">
                          <b-form-input
                            id="input-1"
                            v-model="form.user_password"
                            type="password"
                            placeholder="New password"
                          ></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-2">
                          <b-form-input
                            id="input-2"
                            required
                            v-model="form.user_name"
                            placeholder="Enter name"
                          ></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-2">
                          <b-form-input
                            id="input-2"
                            placeholder="Enter Phone"
                            v-model="form.user_phone"
                          ></b-form-input>
                        </b-form-group>
                        <b-form-file
                          placeholder="Choose a file or drop it here..."
                          drop-placeholder="Drop file here..."
                          v-model="form.user_image"
                          @change="handleFile"
                        ></b-form-file>
                      </b-form>
                    </div>
                    <div class="mt-3 text-right">
                      <b-button
                        variant="success"
                        class="mx-2"
                        @click="editProfile"
                        >Edit</b-button
                      >
                      <b-button variant="danger" @click="logoutBtn"
                        >Logout</b-button
                      >
                    </div>
                  </b-modal>
                  <img
                    style="display: inline-block"
                    src="../assets/img/Settings.png"
                    alt=""
                  />
                  <p
                    style="display: inline-block; margin-left: 13px; color: #fff; font-size:16px"
                  >
                    Settings
                  </p>
                </div>
                <router-link to="/friend-list">
                  <div class="px-2 py-2" style="cursor: pointer">
                    <img
                      style="display: inline-block"
                      src="../assets/img/Contacts.png"
                      alt=""
                    />
                    <p
                      style="display: inline-block; margin-left: 13px; color: #fff; font-size:16px"
                    >
                      Contacts
                    </p>
                  </div>
                </router-link>
                <div
                  class="px-2 py-2"
                  v-b-modal.modal-2
                  style="cursor: pointer"
                >
                  <b-modal id="modal-2" title="Add Friends" hide-footer>
                    <b-form>
                      <b-alert
                        variant="success"
                        class="mt-3"
                        v-bind:show="alert"
                        >{{ msgs }}</b-alert
                      >
                      <b-alert
                        variant="danger"
                        class="mt-3"
                        v-bind:show="alertErr"
                        >{{ msgs }}</b-alert
                      >
                      <b-form-group id="input-group-1">
                        <b-form-input
                          id="input-1"
                          type="email"
                          required
                          placeholder="Your friends email"
                          v-model="friendsEmail"
                        ></b-form-input>
                      </b-form-group>
                    </b-form>
                    <div class="mt-3 text-right">
                      <b-button
                        variant="success"
                        class="mx-2"
                        @click="addFriends"
                        >Add</b-button
                      >
                    </div>
                  </b-modal>
                  <img
                    style="display: inline-block; width: 22px; "
                    src="../assets/img/Invite friends.png"
                    alt=""
                  />
                  <p
                    style="display: inline-block; margin-left: 13px; color: #fff; font-size:16px;"
                  >
                    Add Friends
                  </p>
                </div>
              </b-popover></b-col
            >
          </b-row>
        </b-container>
        <b-row align-content="center">
          <b-col cols lg="12"
            ><div class="img-profile center">
              <img
                v-if="profile[0].user_image === null"
                class="img-profile center"
                src="../assets/img/default.png"
                alt=""
              />
              <img
                v-if="profile[0].user_image !== null"
                class="img-profile center"
                :src="port + profile[0].user_image"
                alt=""
              /></div
          ></b-col>
        </b-row>
        <b-row align-content="center" class="mt-3">
          <b-col cols lg="12"
            ><div class="center">
              <h6 style="font-size: 20px; font-weight:500;">
                {{ profile[0].user_name }}
              </h6>
            </div></b-col
          >
        </b-row>
        <b-row align-content="center">
          <b-col cols lg="12"
            ><div class="center">
              <p>{{ profile[0].user_email }}</p>
            </div></b-col
          >
        </b-row>
        <b-container>
          <b-row align-content="center" class="mt-4">
            <b-col cols lg="12">
              <div
                style="display: flex; justify-content: space-around; align-items:center"
              >
                <b-form>
                  <b-form-input
                    class="form"
                    id="input-1"
                    type="email"
                    v-model="searchName"
                    placeholder="Search name ..."
                  ></b-form-input>
                </b-form>
                <img
                  @click="search"
                  style="width: 20px; height:20px;"
                  src="../assets/img/Search.png"
                  alt=""
                /></div
            ></b-col>
          </b-row>
        </b-container>
        <b-row class="mt-4">
          <b-col
            ><div style="display:flex; justify-content: space-around">
              <b-button class="btn btn-primary button" @click="myFriends"
                >Friends</b-button
              ><b-button class="btn btn-primary button" @click="allRoom"
                >Chats</b-button
              >
            </div></b-col
          >
        </b-row>
        <div
          class="mt-2"
          style="width: 95%; border: 1px solid darkgrey; margin: 0 auto"
        ></div>
        <div class="mt-4 scrollbar" style="height: 320px; overflow-x:hidden">
          <section
            v-if="showAllFriends"
            style="height: 320px; overflow-x:hidden"
          >
            <!-- PREEEN -->
            <b-row class="mt-2" v-for="(value, index) in friends" :key="index">
              <b-col
                ><div class="flex">
                  <div class="profiles">
                    <img
                      v-if="value.user_image === null"
                      class="profiles center"
                      src="../assets/img/default.png"
                      alt
                    />
                    <img
                      v-if="value.user_image !== null"
                      class="profiles center"
                      :src="port + value.user_image"
                      alt=""
                    />
                  </div>
                  <div class="mt-1">
                    <h6
                      style="padding-top: 16px;text-align: left; font-size: 18px; "
                    >
                      {{ value.user_name }}
                    </h6>
                    <!-- <p style="text-align: left; margin-top: px">
                      {{ value.user_email }}
                    </p> -->
                  </div>
                  <div class="mt-1">
                    <img
                      @click="createRoom(value.friends_id)"
                      class="pt-3"
                      src="../assets/img/Plus.png"
                      alt=""
                    />
                  </div></div
              ></b-col>
            </b-row>
          </section>
          <section v-if="showAllRoom" style="height: 320px; overflow-x:hidden">
            <!-- ROOM -->
            <b-row class="mt-2" v-for="(value, index) in allRooms" :key="index">
              <b-col
                ><div class="flex">
                  <div class="profiles">
                    <img
                      v-if="value.user_image === null"
                      class="profiles center"
                      src="../assets/img/default.png"
                      alt
                    />
                    <img
                      v-if="value.user_image !== null"
                      class="profiles center"
                      :src="port + value.user_image"
                      alt=""
                    />
                  </div>
                  <div class="mt-1">
                    <div></div>
                    <h6 style="text-align: left; font-size: 18px; ">
                      {{ value.user_name }}
                    </h6>
                    <p style="text-align: left; margin-top: px">
                      {{ value.user_phone }}
                    </p>
                  </div>
                  <div class="mt-1">
                    <img
                      @click="showRoomChat(value)"
                      class="pt-3"
                      src="../assets/img/chat.png"
                      alt=""
                    />
                  </div></div
              ></b-col>
            </b-row>
          </section>
        </div>
      </b-col>
      <Empty v-show="showEmpty" />
      <b-col v-show="showChat" cols lg="9" style="position: relative">
        <b-row>
          <div class="flexx" style="width:100%; ">
            <div class="flexx" v-if="roomChat[0]">
              <div class="img-profile-chat" style="display:inline-block;">
                <img
                  v-if="roomChat[0].user_image === null"
                  class="img-profile-chat"
                  src="../assets/img/default.png"
                  alt=""
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
                          class="img-profile center"
                          src="../assets/img/default.png"
                          alt=""
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
          <div
            style="width: 95%; border: 1px solid darkgrey; margin: 0 auto"
          ></div>
        </b-row>
        <div style="height: 550px; overflow-x: hidden;">
          <b-row v-for="(value, index) in roomMessages" :key="index">
            <div class="flexx">
              <div
                class="img-profile-sender mr-3"
                style="display:inline-block;"
              >
                <img
                  v-if="value.receiver.user_image === null"
                  class="img-profile-sender mr-3"
                  src="../assets/img/default.png"
                  alt=""
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
            <b-form-input
              v-model="text"
              placeholder="Enter Message"
            ></b-form-input>
          </b-col>
          <b-col lg="2" class="">
            <b-button
              @click="sendMessage()"
              style="width: 100%"
              variant="primary"
              class="send-msg"
              >SEND</b-button
            >
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import Empty from '../components/EmptyChat'
import io from 'socket.io-client'
// import axios from 'axios'
export default {
  name: 'Mixins',
  components: {
    Empty
  },
  created() {
    this.getUserById(this.user.user_id)
    // this.getUser()
    this.$getLocation()
      .then(coordinates => {
        this.coordinates = {
          lat: coordinates.lat,
          lng: coordinates.lng
        }
        const setLocation = {
          id: this.user.user_id,
          data: {
            longitude: this.coordinates.lng,
            latitude: this.coordinates.lat
          }
        }
        this.updateLocation(setLocation)
      })
      .catch(err => {
        alert(err)
      })
  },
  mounted() {
    this.socket.on('chatMixins', data => {
      this.socketMsg(data)
    })
  },
  data() {
    return {
      alert: false,
      alertErr: false,
      msgs: '',
      coordinates: {
        lat: 0,
        lng: 0
      },
      socket: io('http://localhost:5000'),
      form: {
        user_name: '',
        user_password: '',
        user_phone: '',
        user_image: {}
      },
      port: process.env.VUE_APP_URL,
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
  methods: {
    clickMarker(position) {
      this.coordinates = {
        lat: position.LatLng.lat(),
        lng: position.LatLng.lng()
      }
    },
    ...mapActions([
      'updateLocation',
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
    ...mapMutations(['setSearch', 'setUserRoom', 'socketMsg']),
    handleFile(event) {
      this.form.user_image = event.target.files[0]
    },
    logoutBtn() {
      this.$swal
        .fire({
          title: 'ARE YOU SURE ?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes',
          cancelButtonText: 'Cancel'
        })
        .then(result => {
          if (result.isConfirmed) {
            this.$swal.fire('Bye', '', 'success')
            this.logout()
          }
        })
    },
    addFriends() {
      const setData = {
        user_id: this.user.user_id,
        friends_email: this.friendsEmail
      }
      this.addFriend(setData)
        .then(res => {
          this.friendsEmail = ''
          this.$swal.fire({
            icon: 'success',
            title: 'Cool',
            text: res
          })
        })
        .catch(err => {
          this.friendsEmail = ''
          this.$swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err
          })
        })
    },
    editProfile() {
      const userId = this.user.user_id
      const data = new FormData()
      data.append('user_name', this.form.user_name)
      data.append('user_password', this.form.user_password)
      data.append('user_phone', this.form.user_phone)
      data.append('user_image', this.form.user_image)
      const setData = {
        user_id: userId,
        form: data
      }
      this.editUser(setData)
        .then(res => {
          this.getUserById(userId)
          this.alert = true
          this.msgs = res
          setTimeout(() => {
            this.alert = false
          }, 2000)
        })
        .catch(err => {
          this.alertErr = true
          this.msgs = err
          setTimeout(() => {
            this.alertErr = false
          }, 2000)
        })
    },
    // getUser() {
    //   this.getUserById(this.user.user_id)
    // },
    myFriends() {
      this.getAllFriends(this.user.user_id)

      this.showAllFriends = true
      this.showAllRoom = false
      this.showEmpty = true
      this.showChat = false
    },
    allRoom() {
      this.showAllFriends = false
      this.showAllRoom = true
      this.getAllRoom(this.user.user_id)
    },
    search() {
      const setData = {
        id: this.user.user_id,
        search: this.searchName
      }
      this.setSearch(setData)
      this.searchFriends()
    },
    // ---- FRIEND CREATE ROOM ---------------------
    createRoom(data) {
      const setData = {
        user_id: this.user.user_id,
        friends_id: data
      }
      this.postRoom(setData)
      this.friendsId = data
      const roomData = {
        friends_id: data,
        user_id: this.user.user_id
      }
      this.getUserRoom(roomData)
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
      this.socket.emit('mixinsMsg', setData)
      this.text = ''

      // SOCKET IO SENDMSG
    },
    // ALL ROOM CHAT -------------------
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
.sender {
  background: #7e98df;
  border-radius: 35px 35px 35px 10px;
  text-align: left;
  color: #fff;
  max-width: 260px;
  word-wrap: break-word;
}

.flexx {
  display: flex;
  justify-content: space-between;
  text-align: left;
  align-items: center;
  height: 60px;
  margin: 20px;
}

.popover {
  background-color: #7e98df;
  color: #fff;
  font-size: 16px;
  border-radius: 35px 10px 35px 35px;
  width: 180px;
  margin-left: -190px;
}

.flex {
  display: grid;
  grid-template-columns: 67px 150px 40px;
  justify-content: center;
  align-content: center;
  gap: 10px;
  word-wrap: break-word;
  padding: 5px;
  transition: 0.3;
  border-radius: 4px;
}

.flex:hover {
  background-color: #c7c8ca;
}

.notif {
  border-radius: 50px;
  font-size: 11px;
  background-color: #7e98df;
  margin-top: -5px;
}

.profiles {
  width: 64px;
  height: 64px;
  border-radius: 20px;
}

.center {
  margin: 0 auto;
}

.button {
  height: 50px;
  border-radius: 20px;
  background-color: #fff;
  border-color: #fff;
  color: #111;
  font-weight: bold;
  margin: 0 5px;
  font-size: 20px;
}

.button:hover {
  background-color: #7e98df;
  border-color: #7e98df;
}
.button:visited {
  background-color: #7e98df;
  border-color: #7e98df;
}

.search {
  margin-top: 7px;
  padding-left: 24px;
  margin-right: -10px;
}
.plus {
  margin-top: 6px;
  margin-left: -23px;
  /* width: 22px; */
}

.form {
  border-color: white;
  font-size: 15px;
  margin-left: 6px;
}

.title {
  padding-left: 30px;
  text-align: left;
  color: #7e98df;
  font-size: 24px;
}
.img-menu {
  margin-left: -20px;
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

@media (max-width: 576px) {
  .title {
    text-align: center;
  }

  .img-menu {
    margin-left: 100%;
  }

  .send-msg {
    margin-top: 10px;
  }
}
</style>
