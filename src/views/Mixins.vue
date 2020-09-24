<template>
  <div>
    <b-row>
      <b-col cols lg="3">
        <b-row style="height: 85px" align-content="center">
          <b-col cols lg="10" class="title"><h5>Mixins</h5></b-col>
          <b-col cols lg="2"
            ><img
              v-b-popover.click.bottom
              title="Popover"
              variant="primary"
              src="../assets/img/Menu.png"
              alt=""
              class="img-menu"
          /></b-col>
        </b-row>
        <b-row align-content="center">
          <b-col cols lg="12"><div class="img-profile center"></div></b-col>
        </b-row>
        <b-row align-content="center" class="mt-3">
          <b-col cols lg="12"
            ><div class="center">
              <h6 style="font-size: 20px; font-weight:500;">
                {{ user.user_name }}
              </h6>
            </div></b-col
          >
        </b-row>
        <b-row align-content="center">
          <b-col cols lg="12"
            ><div class="center">
              <p>{{ user.user_phone }}</p>
            </div></b-col
          >
        </b-row>
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
        <b-row class="mt-4">
          <b-col
            ><div>
              <b-button class="btn btn-primary button">All</b-button
              ><b-button class="btn btn-primary button">Important</b-button
              ><b-button class="btn btn-primary button">Unread</b-button>
            </div></b-col
          >
        </b-row>
        <div class="mt-2 scrollbar" style="height: 320px; overflow-x:hidden">
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
        </div>
      </b-col>
      <b-col cols lg="9" align-self="center"
        ><h3 style="color: #848484">
          Please select a chat to start messaging
        </h3></b-col
      >
    </b-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Mixins',
  data() {
    return {}
  },
  methods: {},
  computed: {
    ...mapGetters({ user: 'userData' })
  }
}
</script>

<style scoped>
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
  font-weight: 500;
  margin: 0 5px;
  font-size: 20px;
}

.button:hover {
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
  background-color: red;
}
</style>
