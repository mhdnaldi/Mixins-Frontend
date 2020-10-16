<template>
  <b-container fluid>
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
        <p>Name: {{ value.user_name }}</p>
        <p>Email: {{ value.user_email }}</p>
        <p>Phone: {{ value.user_phone }}</p>
        <button class="bg-danger mb-1" @click="deleteFriends(value.user_id)">
          DELETE
        </button>
        <div>
          <GmapMap
            :center="{ lat: coordinates.lat, lng: coordinates.lng }"
            :zoom="10"
            map-type-id="terrain"
            style="width: 90%; height: 200px; margin:10px auto;"
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
      </div>
    </div>
  </b-container>
</template>

<script>
// import Empty from './EmptyFriends'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    // Empty
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
    this.$getLocation()
      .then(coordinates => {
        this.coordinates = {
          lat: coordinates.lat,
          lng: coordinates.lng
        }
      })
      .catch(err => {
        alert(err)
      })
    this.getAllFriends(this.userData.user_id)
  },
  methods: {
    ...mapActions(['getAllFriends', 'deleteFriend']),
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
    ...mapGetters(['myFriends', 'userData'])
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
  height: 550px;
  color: #111;
  background-color: #eee;
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
}
</style>
