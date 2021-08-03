<template>
  <div>
 
<div class="login-section">
    <div class="form-content-box">
        <!-- details -->
        <div class="details">
            <div class="logo">
                <a href="index.html">
                    <img src="../assets/img/logos/logo.png" alt="logo">
                </a>
            </div>
            <div class="clearfix"></div>
            <h3>Sign into your account</h3>
            <form action="https://storage.googleapis.com/theme-vessel-items/checking-sites/nest-html/HTML/main/index.html" method="GET">
                <div class="form-group">
                    <input type="email" v-model="email" name="email" class="input-text" placeholder="Email Address">
                </div>
                <div class="form-group">
                    <input type="password" v-model="password" name="Password" class="input-text" placeholder="Password">
                </div>
                <div class="checkbox">
                    <div class="ez-checkbox pull-left">
                        <label>
                            <input type="checkbox" class="ez-hide">
                            Remember me
                        </label>
                    </div>
                    <router-link :to="{name : 'forgot'}"  class="link-not-important pull-right">Forgot Password</router-link>
                    <div class="clearfix"></div>
                </div>
                <div class="form-group">
                    <button type="button" @click="login" class="button-md button-theme btn-block btn-3">login</button>
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
window.scrollTop(0);
  },
  methods: {
     login () {
      //  var accessToken = localStorage.getItem("csrftoken");
      var vi = this
//       const headers = {
//   'Accept': 'application/json',
//   'Authorization':  'Bearer '+accessToken,
// }
      const axios = require('axios')
      axios.get(this.$root.URL_ROOT + 'userlogin', {
  params: { 
         username: this.email, password: this.password }}).then(function (response) {
        var data = response.data.data
        console.log(response)
       if (response.data.status === 'success') {
          vi.token = data.access_token
          vi.role = data.isAdmin
          localStorage.setItem('user', data.id)
          localStorage.setItem('token', data.access_token)
          localStorage.setItem('isAdmin', data.role)
          localStorage.setItem('subscription', response.data.subscription)
          vi.$router.go('/')
         vi.$toasted.global.success({ message: 'Success Please wait...' })
         window.location.href = 'myaccount';
        } else {
         vi.$toasted.global.error({ message: 'Invalid id or password' })
        }
      })
      // return false
    }
  }
}
</script>
