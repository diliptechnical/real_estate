<template>
  <div>
    <div class="login-wrapper d-flex align-items-center justify-content-center">
      <!-- Shape-->
      <div class="login-shape">
        <img :src="PATH_ASSETS+'img/core-img/login.png'" alt="" />
      </div>
      <div class="login-shape2">
        <img :src="PATH_ASSETS+'img/core-img/login2.png'" alt="" />
      </div>
      <div class="container">
        <!-- Login Text-->
        <div class="login-text text-center">
          <img class="login-img" :src="PATH_ASSETS+'/img/bg-img/12.png'" alt="" />
          <h3 class="mb-0">Welcome, Register Now!</h3>
          <!-- Shapes-->
          <div class="bg-shapes">
            <div class="shape1"></div>
            <div class="shape2"></div>
            <div class="shape3"></div>
            <div class="shape4"></div>
            <div class="shape5"></div>
            <div class="shape6"></div>
            <div class="shape7"></div>
            <div class="shape8"></div>
          </div>
        </div>
        <!-- Register Form-->
        <div class="register-form mt-5 px-3">
          <form method="post">
            <MssText placeholder="Full Name" v-model="fields.name"><i class="lni lni-user"></i></MssText>
            <MssText type="email" placeholder="Email Address" v-model="fields.email"><i class="lni lni-envelope"></i></MssText>
            <MssText type="password" placeholder="Password" v-model="fields.password"><i class="lni lni-lock"></i></MssText>
            <div class="form-group text-left mb-4 unset">
              <VueTelInput :preferredCountries="['in','us']" @validate="onInput"></VueTelInput>
            </div>
            <div class="form-group text-left mb-4">
              <label for="utype"><i class="lni lni-user"></i></label>
              <select v-model="fields.role_id" class="form-control">
                <option value="">I am a</option>
                <option :value="4">User</option>
                <option :value="3">Vendor</option>
              </select>
            </div>
            <div class="form-group text-left mb-4 unset">
              <gmap-autocomplete @input="getAddress($event)" :value="fields.address" class="form-control introInput" @place_changed="setPlace">
                <template v-slot:input="slotProps">
                  <v-text-field outlined
                    prepend-inner-icon="place"
                    placeholder="Location Of Event"
                    ref="input"
                    v-on:listeners="slotProps.listeners"
                    v-on:attrs="slotProps.attrs">
                  </v-text-field>
                </template>
              </gmap-autocomplete>
            </div>
          </form>
          <MssButton @onclick="saveMe">Register Now</MssButton>
        </div>
        <!-- Login Meta-->
        <div class="login-meta-data text-center">
          <p class="mt-3 mb-0">
            Already have an account?<router-link to="/Login" class="ml-2">Login</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueTelInput } from 'vue-tel-input'
import { gmapApi } from 'vue2-google-maps'
const axios = require('axios')
export default {
  components: {
    VueTelInput
  },
  data () {
    return {
      fields: {
        name: '',
        address: '',
        mobile: '',
        email: '',
        role_id: '',
        password: '',
        latitude: '',
        longitude: ''
      },
      mylocation: '',
      center: { lat: 45.508, lng: -73.587 },
      termsConition: false,
      cpassword: '',
      isMobileValid: false,
      msg: []
    }
  },
  mounted () {
    // this.geolocate()
  },
  computed: {
    google: gmapApi
  },
  methods: {
    onInput ({ number, isValid, country }) {
      if (isValid) {
        this.isMobileValid = true
        this.fields.mobile = number.international
      } else {
        this.isMobileValid = false
        this.mobile = ''
      }
    },
    setPlace (place) {
      console.log(place.geometry.location)
      this.fields.address = place.formatted_address
      this.fields.latitude = place.geometry.location.lat()
      this.fields.longitude = place.geometry.location.lng()
    },
    getAddress (t) {
      this.mylocation = t
    },
    geolocate: function () {
      navigator.geolocation.getCurrentPosition((position) => {
        this.fields.latitude = position.coords.latitude
        this.fields.longitude = position.coords.longitude
        this.getAddressByLatLang(this.fields.latitude, this.fields.longitude)
      })
    },
    getAddressByLatLang (lat, lng) {
      var vi = this
      var url = 'https://api.opencagedata.com/geocode/v1/json?key=' + this.$root.OC_API + '&q=' + lat + '%2C' + lng + '&pretty=1'
      axios.get(url).then(function (response) {
        var data = response.data
        vi.fields.address = data.results[0].formatted
      })
    },
    saveMe () {
      if (this.fields.fullname === '') {
        this.$toasted.global.error({ message: 'Please enter FullName' })
      } else if (this.fields.email === '') {
        this.$toasted.global.error({ message: 'Please enter Email' })
      } else if (this.fields.mobile === '') {
        this.$toasted.global.error({ message: 'Please enter Valid Mobile' })
      } else if (this.fields.utype === '') {
        this.$toasted.global.error({ message: 'Please Select User Type' })
      } else if (this.fields.password === '') {
        this.$toasted.global.error({ message: 'Please enter password' })
      } else {
        $.ajax({
          type: 'POST',
          url: this.URL_ROOT + 'api/register',
          data: this.fields,
          success: (data)=>{
            if (data.status === 'success') {
                this.token = data.data.api_token
                this.role = data.data.role_id
                localStorage.setItem('user', data.data)
                localStorage.setItem('token', data.data.api_token)
                this.$router.go('/')
                this.$toasted.global.success({ message: 'Success Please wait...' })
            } else {
               $.each(response.data,(key,val)=>{
                    this.$toasted.global.error({ message: val })
                })
            }
          }
        })
      }
    }
  }
}
</script>
