<template>
  <div class="home">
    <h1>Maps</h1>
    <GmapMap
      :center="{lat: coordinates.lat, lng: coordinates.lng }"
      :zoom="10"
      map-type-id="terrain"
      style="width: 80%; height: 600px; margin:40px auto"
    >
      <GmapMarker
        :position="{ lat: coordinates.lat, lng: coordinates.lng }"
        :clickable="true"
        :draggable="true"
        @click="clickMarker"
        icon="https://img.icons8.com/color/48/000000/map-pin.png
"
      />
    </GmapMap>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      coordinates: {
        lat: 0,
        lng: 0
      }
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
  },
  methods: {
    // MENGAMBIL POSITION ICON
    clickMarker(position) {
      this.coordinates = {
        lat: position.LatLng.lat(),
        lng: position.LatLng.lng()
      }
    }
  }
}
</script>
