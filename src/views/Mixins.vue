<template>
  <b-container fluid>
    <b-row>
      <b-col cols lg="3">
        <b-container>
          <b-row style="height: 85px" align-content="center">
            <b-col cols lg="10" class="title"><h5>Mixins</h5></b-col>
            <b-col cols lg="2"
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
                      <b-button variant="danger" @click="logout"
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
                <div
                  class="px-2 py-2"
                  v-b-modal.modal-2
                  style="cursor: pointer"
                >
                  <b-modal id="modal-2" title="Add Friends" hide-footer>
                    <b-form>
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
            <b-col cols lg="2">
              <div class="center">
                <img
                  @click="search"
                  class="search"
                  src="../assets/img/Search.png"
                  alt=""
                />
              </div>
            </b-col>
            <b-col cols lg="8">
              <div class="center">
                <b-form>
                  <b-form-input
                    class="form"
                    id="input-1"
                    type="email"
                    v-model="searchName"
                    placeholder="Search name ..."
                  ></b-form-input>
                </b-form></div
            ></b-col>
            <b-col cols lg="2"
              ><div class="center">
                <img class="plus" src="../assets/img/Plus.png" alt="" /></div
            ></b-col>
          </b-row>
        </b-container>
        <b-row class="mt-4">
          <b-col
            ><div>
              <b-button class="btn btn-primary button" @click="myFriends"
                >All</b-button
              ><b-button class="btn btn-primary button" @click="allRoom"
                >Important</b-button
              ><b-button class="btn btn-primary button">Unread</b-button>
            </div></b-col
          >
        </b-row>
        <div class="mt-4 scrollbar" style="height: 320px; overflow-x:hidden">
          <section v-if="showAllFriends">
            <!-- PREEEN -->
            <b-row class="mt-2" v-for="(value, index) in friends" :key="index">
              <b-col
                ><div class="flex">
                  <div class="profiles">
                    <img
                      class="profiles"
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
                      @click="createRoom(value.friends_id)"
                      class="pt-3"
                      src="../assets/img/Plus.png"
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
                  class="img-profile-chat"
                  :src="port + roomChat[0].user_image"
                  alt=""
                />
              </div>
              <h5 style="display:inline-block; margin-left: 20px">
                {{ roomChat[0].user_name }}
              </h5>
            </div>
            <div v-b-modal.modal-sm.modal-3>
              <!-- <b-modal id="modal-3" title="Profile" hide-footer>
                <div>
                  <b-row align-content="center">
                    <b-col cols lg="12"
                      ><div class="img-profile center">
                        <img
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
              </b-modal> -->
              <img src="../assets/img/Profile menu.png" alt="" />
            </div>
          </div>
        </b-row>
        <b-row>
          <div class="flexx">
            <div
              class="img-profile-sender mr-3"
              style="display:inline-block;"
            ></div>
            <div class="sender ">
              <p style="padding: 3px 12px 0 12px; margin-bottom: 5px ">
                Halooooo
              </p>
            </div>
          </div>
        </b-row>
        <b-row>
          <div class="flexx">
            <div
              class="img-profile-sender mr-3"
              style="display:inline-block;"
            ></div>
            <div class="sender ">
              <p style="padding: 3px 12px 0 12px; margin-bottom: 5px ">
                Woyyy
              </p>
            </div>
          </div>
        </b-row>
        <b-row style="position: absolute; bottom:30px; right:20px; left: 20px">
          <b-col lg="10" width>
            <b-form-input
              v-model="text"
              placeholder="Enter Message"
            ></b-form-input>
          </b-col>
          <b-col lg="2" class="">
            <b-button @click="sendMessage" style="width: 100%" variant="success"
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
export default {
  name: 'Mixins',
  components: {
    Empty
  },
  created() {
    this.getUser()
  },
  data() {
    return {
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
      showAllRoom: false
    }
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
      'sendMessages'
    ]),
    ...mapMutations(['setSearch', 'setUserRoom']),
    handleFile(event) {
      this.form.user_image = event.target.files[0]
    },
    addFriends() {
      const setData = {
        user_id: this.user.user_id,
        friends_email: this.friendsEmail
      }
      this.addFriend(setData)
        .then(res => {
          alert(res)
        })
        .catch(err => {
          alert(err)
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
          alert(res)
        })
        .catch(err => {
          alert(err)
        })
    },
    getUser() {
      this.getUserById(this.user.user_id)
    },
    myFriends() {
      this.getAllFriends(this.user.user_id)
      this.showAllFriends = true
    },
    allRoom() {
      this.showAllFriends = false
    },
    search() {
      const setData = {
        id: this.user.user_id,
        search: this.searchName
      }
      this.setSearch(setData)
      this.searchFriends()
    },
    // ---- ROOM CHAT ---------------------
    createRoom(data) {
      const setData = {
        user_id: this.user.user_id,
        friends_id: data
      }
      this.postRoom(setData) / this.friendsId = data
      const roomData = {
        friends_id: data,
        user_id: this.user.user_id
      }
      this.getUserRoom(roomData)
      this.showEmpty = false
      this.showChat = true
    },
    sendMessage() {
      const setData = {
        user_id: this.user.user_id,
        friends_id: this.friendsId,
        room_id: this.roomData.room_id,
        text_message: this.text
      }
      this.sendMessages(setData)
    }
  },

  computed: {
    ...mapGetters({
      user: 'userData',
      profile: 'user',
      msg: 'msg',
      friends: 'myFriends',
      roomData: 'room',
      roomChat: 'roomChat'
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
  gap: 10px;
  word-wrap: break-word;
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
  background-color: red;
}
</style>
