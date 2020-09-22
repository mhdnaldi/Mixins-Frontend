import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// GOOGLE MAPS
import * as VueGoogleMaps from 'vue2-google-maps'

// GEOLOCATION
import VueGeolocation from 'vue-browser-geolocation'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false
// GOOGLE MAPS
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBNjW1HL-2Vko5f2XcgFpNoa2srmP5FHLI',
    libraries: 'places'
  }
})
// GEOLOCATION
Vue.use(VueGeolocation)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
