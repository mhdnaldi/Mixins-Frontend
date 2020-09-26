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
                      <b-button variant="danger">Cancel</b-button>
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
                <img class="search" src="../assets/img/Search.png" alt="" />
              </div>
            </b-col>
            <b-col cols lg="8">
              <div class="center">
                <b-form>
                  <b-form-input
                    class="form"
                    id="input-1"
                    type="email"
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
              <b-button class="btn btn-primary button">All</b-button
              ><b-button class="btn btn-primary button">Important</b-button
              ><b-button class="btn btn-primary button">Unread</b-button>
            </div></b-col
          >
        </b-row>
        <div class="mt-4 scrollbar" style="height: 320px; overflow-x:hidden">
          <b-row class="mt-2">
            <b-col
              ><div class="flex">
                <div class="profiles"></div>
                <div class="mt-1">
                  <h6 style="text-align: left; font-size: 18px">
                    Muhammad Naldi
                  </h6>
                  <p style="text-align: left; margin-top: px">wkwkwkwkk</p>
                </div>
                <div class="mt-1">
                  <p>15:20</p>
                  <div class="notif"><p>1</p></div>
                </div>
              </div></b-col
            >
          </b-row>
          <b-row class="mt-2">
            <b-col
              ><div class="flex">
                <div class="profiles"></div>
                <div class="mt-1">
                  <h6 style="text-align: left; font-size: 18px">
                    Muhammad Naldi
                  </h6>
                  <p style="text-align: left; margin-top: px">wkwkwkwkk</p>
                </div>
                <div class="mt-1">
                  <p>15:20</p>
                  <div class="notif"><p>1</p></div>
                </div>
              </div></b-col
            >
          </b-row>
          <b-row class="mt-2">
            <b-col
              ><div class="flex">
                <div class="profiles"></div>
                <div class="mt-1">
                  <h6 style="text-align: left; font-size: 18px">
                    Muhammad Naldi
                  </h6>
                  <p style="text-align: left; margin-top: px">wkwkwkwkk</p>
                </div>
                <div class="mt-1">
                  <p>15:20</p>
                  <div class="notif"><p>1</p></div>
                </div>
              </div></b-col
            >
          </b-row>
          <b-row class="mt-2">
            <b-col
              ><div class="flex">
                <div class="profiles"></div>
                <div class="mt-1">
                  <h6 style="text-align: left; font-size: 18px">
                    Muhammad Naldi
                  </h6>
                  <p style="text-align: left; margin-top: px">wkwkwkwkk</p>
                </div>
                <div class="mt-1">
                  <p>15:20</p>
                  <div class="notif"><p>1</p></div>
                </div>
              </div></b-col
            >
          </b-row>
          <b-row class="mt-2">
            <b-col
              ><div class="flex">
                <div class="profiles"></div>
                <div class="mt-1">
                  <div></div>
                  <h6 style="text-align: left; font-size: 18px; ">
                    Muhammad Naldi
                  </h6>
                  <p style="text-align: left; margin-top: px">wkwkwkwkk</p>
                </div>
                <div class="mt-1">
                  <p>15:20</p>
                  <div class="notif"><p>1</p></div>
                </div>
              </div></b-col
            >
          </b-row>
        </div>
      </b-col>
      <b-col cols lg="9">
        <b-row>
          <div class="flexx" style="width:100%; ">
            <div class="flexx">
              <div class="img-profile-chat" style="display:inline-block;"></div>
              <h5 style="display:inline-block; margin-left: 20px">
                Muhammad Naldi
              </h5>
            </div>
            <div>
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
                Halooooo0000000000000000000000000
              </p>
            </div>
          </div>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
// import Empty from '../components/EmptyChat'
export default {
  name: 'Mixins',
  components: {
    // Empty
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
      friendsEmail: ''
    }
  },
  methods: {
    ...mapActions(['editUser', 'getUserById']),
    handleFile(event) {
      this.form.user_image = event.target.files[0]
    },
    addFriends() {
      console.log(this.friendsEmail)
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
          setTimeout(() => {
            this.$router.push('/mixins')
          }, 2000)
        })
        .catch(err => {
          alert(err)
        })
    },
    getUser() {
      this.getUserById(this.user.user_id)
    }
  },
  computed: {
    ...mapGetters({ user: 'userData', profile: 'user', msg: 'msg' })
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
  display: flex;
  justify-content: center;
  gap: 20px;
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
  background-color: aqua;
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
  background-color: red;
}

.img-profile-sender {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: red;
}
</style>
