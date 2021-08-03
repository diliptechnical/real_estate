<template>
  <div>
 
<div class="login-section">
    <div class="form-content-box">
        <!-- details -->
        <div class="details" v-if="isNotOtp">
            <div class="logo">
                <a href="index.html">
                    <img src="../assets/img/logos/logo.png" alt="logo">
                </a>
            </div>
            <div class="clearfix"></div>
            <h3>Reset Password</h3>
            <form action="https://storage.googleapis.com/theme-vessel-items/checking-sites/nest-html/HTML/main/index.html" method="GET">
                <div class="form-group">
                    <input type="email" v-model="email" name="email" class="input-text" placeholder="Email Address">
                </div>
                <div class="form-group">
                    <button type="button" @click="forgot" class="button-md button-theme btn-block btn-3">Send Mail</button>
                </div>
            </form>
        </div>
 <div class="details" v-if="isOtp">
            <div class="logo">
                <a href="index.html">
                    <img src="../assets/img/logos/logo.png" alt="logo">
                </a>
            </div>
            <div class="clearfix"></div>
            <h3>Reset Password</h3>
            <form action="https://storage.googleapis.com/theme-vessel-items/checking-sites/nest-html/HTML/main/index.html" method="GET">
                <div class="form-group">
                    <input type="text" v-model="otp" name="otp" class="input-text" placeholder="Enter your OTP">
                </div>
                <div class="form-group">
                    <button type="button" @click="resetpass" class="button-md button-theme btn-block btn-3">Send</button>
                </div>
            </form>
        </div>
        <div class="footer">
            <span>
                Don't have an account? <router-link :to="{name : 'signup'}" >Register here</router-link>
            </span>
        </div>
    </div>
</div>
  </div>
</template>
<script>
import axios from 'axios'
require('../assets/css/style.dev.css')
export default {
  components: {
    counter
  },
data () {
    return {
      email:'',
      password:'',
      isNotOtp: true,
      isOtp: false,
      otp:''
    }
  },
//     metaInfo () {
//     return {
//       //detail: [],
//       title: this.detail.meta_title,
//       meta: [
//         { name: 'description', content: this.detail.meta_description },
//         { name: 'keywords', content: this.detail.meta_keywords }
//       ]
//     }
//   },
  mounted () {

  },
  methods: {
      resetpass(){
          var self = this
           axios.get(this.$root.URL_ROOT + 'checkotp', {
  params: { 
         vcode: this.otp }}).then(function (response) {
             console.log(response.data)
             localStorage.setItem('forgetuser',response.data.id)
        //   self.$router.go('/ResetPassword')
         window.location.href = 'Resetpassword';
         })
      },
     forgot () {
      var vi = this
      const axios = require('axios')
      axios.get(this.$root.URL_ROOT + 'forgotpassword', {
  params: { 
         email: this.email }}).then(function (response) {
        var data = response.data
        console.log(response)
       if (response.status === 200) {
          vi.$toasted.global.success({ message: 'OTP Sent to your email id please wait...' })
          vi.isNotOtp = false
          vi.isOtp = true
        } else {
         vi.$toasted.global.error({ message: 'Invalid Email' })
        }
      })
      return false
    }
  }
}
</script>
