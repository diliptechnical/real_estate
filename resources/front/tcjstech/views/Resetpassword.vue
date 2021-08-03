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
            <div class="my-address">
                    <div class="main-title-2">
                        <h1><span>Reset</span> Password</h1>
                    </div>

                    <form action="" method="GET">
                        <div class="form-group">
                            <input type="password" v-model="newPass" class="input-text" name="new-password" placeholder="New Password">
                        </div>
                        <div class="form-group">
                            <input type="password" v-model="cPass" class="input-text" name="confirm-new-password" placeholder="Confirm New Password">
                        </div>
                        <button class="btn-2 btn-defaults" type="button" @click="changepassword">
                            <span>Save Changes</span> <i class="arrow"></i>
                        </button>
                    </form>
                </div>
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
// import counter from '@/components/counter'
require('../assets/css/style.dev.css')
export default {
  components: {
    counter
  },
data () {
    return {
      email:'',
      password:'',
      newPass: '',
      cPass: ''

    }
  },

  mounted () {

  },
  methods: {
    changepassword(){
    var ev = this;
    var forgetuser = localStorage.getItem('forgetuser'); 
    if (this.newPass != this.cPass) {
        this.$toasted.global.error({ message: 'Password and Comfirm Password should be same' })
      }
    axios
        .get(this.$root.URL_ROOT + "resetpassword",{ params: {
          uid: forgetuser,
          newPass: ev.newPass,
          cPass: ev.cPass,
        }})
        .then(function (response) {
          console.log(response);
          if (response.status == 200) {
            ev.$toasted.global.success({
              message: "Your Password Updated successfully",
            });
          }else{
        ev.$toasted.global.error({ message: 'Password and Comfirm Password should be same' })
          }
        });

  },
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
        var data = response.data
        console.log(response)
       if (response.status === 200) {
          vi.token = data[0].access_token
          vi.role = data[0].isAdmin
          localStorage.setItem('user', data[0].id)
          localStorage.setItem('token', data[0].access_token)
          localStorage.setItem('isAdmin', data[0].role)
          vi.$router.go('/')
         vi.$toasted.global.success({ message: 'Success Please wait...' })
         window.location.href = 'myaccount';
        } else {
         vi.$toasted.global.error({ message: 'Invalid id or password' })
        }
      })
      return false
    }
  }
}
</script>
