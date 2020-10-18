<template>
  <b-container fluid>
    <div class="shadow">
      <router-link to="/"><h1 class="my-2">MIXINS</h1></router-link>
    </div>
    <Empty v-if="myFriends <= 1" />
    <div class="grid" v-if="myFriends">
      <div class="friend-list" v-for="(value, index) in myFriends" :key="index">
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
        <p style="text-align: left" class="ml-3">Name: {{ value.user_name }}</p>
        <p style="text-align: left" class="ml-3">
          Email: {{ value.user_email }}
        </p>
        <p style="text-align: left" class="ml-3">
          Phone: {{ value.user_phone }}
        </p>
        <b-button class="del button" @click="deleteFriends(value.user_id)">
          <b-icon
            icon="
trash-fill"
          ></b-icon>
        </b-button>
        <div>
          <b-button
            class="map button"
            v-b-modal.modal-1
            @click="location(value.user_id)"
            >LOCATION</b-button
          >
          <b-modal id="modal-1" title="Location" hide-footer>
            <div>
              <GmapMap
                :center="{ lat: coordinates.lat, lng: coordinates.lng }"
                :zoom="10"
                map-type-id="terrain"
                style="width: 90%; height: 300px; margin:10px auto;"
              >
                <GmapMarker
                  :position="{
                    lat: coordinates.lat,
                    lng: coordinates.lng
                  }"
                  :clickable="true"
                  :draggable="true"
                  icon="https://img.icons8.com/color/48/000000/map-pin.png
"
                />
              </GmapMap>
            </div>
          </b-modal>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
import Empty from './EmptyFriends'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    Empty
  },
  data() {
    return {
      port: process.env.VUE_APP_URL,
      coordinates: {
        lat: 0,
        lng: 0
      },
      showEmpty: true
    }
  },
  created() {
    this.getAllFriends(this.userData.user_id)
  },
  methods: {
    ...mapActions(['getAllFriends', 'deleteFriend', 'getUserById']),
    location(payload) {
      this.getUserById(payload)
      if (this.user[0]) {
        this.coordinates = {
          lat: parseFloat(this.user[0].latitude),
          lng: parseFloat(this.user[0].longitude)
        }
      }
    },
    deleteFriends(payload) {
      const setData = {
        id: this.userData.user_id,
        friends_id: payload
      }
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
            this.$swal.fire('OK', '', 'success')
            this.deleteFriend(setData)
            this.getAllFriends(this.userData.user_id)
          }
        })
    }
  },
  computed: {
    ...mapGetters(['myFriends', 'userData', 'user'])
  }
}
</script>

<style scoped>
.grid {
  margin: 20px 0;
  display: grid;
  align-content: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

.friend-list {
  margin: auto;
  width: 300px;
  height: 420px;
  color: #111;
  background-color: #7e98df;
  border-radius: 10px;
  transition: 0.3s;
}

.friend-list:hover {
  transform: scale(0.9);
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.25);
}

.profiles {
  width: 150px;
  margin: 20px 0;
  border-radius: 10px;
}

.button {
  width: 100px;
  display: inline-block;
}

.del {
  background-color: rgb(206, 16, 16);
  border-color: rgb(206, 16, 16);
  width: 50px;
  margin-bottom: 10px;
}
.map {
  background-color: rgb(17, 153, 89);
  border-color: rgb(17, 153, 89);
  margin: 10px 0;
}

.del:hover {
  background-color: rgb(206, 16, 16);
  border-color: rgb(206, 16, 16);
  transform: scale(0.91);
}

.map:hover {
  background-color: rgb(17, 153, 89);
  border-color: rgb(17, 153, 89);
  transform: scale(0.91);
}

h1 {
  text-align: center;
  color: #7e98df;
}

.shadow {
  /* background-color: red; */
  width: 100%;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.4);
  height: 55px;
}

@media (max-width: 578px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .friend-list {
    margin: 10px auto;
    background-color: #7e98df;
    border-radius: 10px;
    transition: 0.3s;
  }
}
</style>
