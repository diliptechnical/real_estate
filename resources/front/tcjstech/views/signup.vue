<template>
  <div>
 <div class="login-section">
    <div class="form-content-box">
        <!-- details -->
        <div class="details">
            <div class="logo">
                <a href="/">
                    <img src="../assets/img/logos/logo.png" alt="logo">
                </a>
            </div>
            <div class="clearfix"></div>
            <h3>Create an account</h3>
            <form action="#" method="GET">
                <div class="form-group">
                    <input type="text" name="fullname" v-model="fields.fullname" class="input-text" placeholder="Full Name">
                </div>
                <div class="form-group">
                    <input type="number" name="mobile" v-model="fields.mobile" class="input-text" placeholder="Mobile Number">
                </div>
                <div class="form-group">
                    <input type="email" name="email" v-model="fields.email" class="input-text" placeholder="Email Address">
                </div>
                <div class="form-group">
                    <input type="password" v-model="fields.password" name="password" class="input-text" placeholder="Password">
                </div>
                <div class="form-group">
                    <input type="password" v-model="fields.cpassword" name="confirm_Password" class="input-text" placeholder="Confirm Password">
                </div>
                <div class="form-group">
                    <button type="button" @click="saveMe" class="button-md button-theme btn-block btn-3">Signup</button>
                </div>
            </form>
           
        </div>
        <div class="footer">
            <span>
                Already a member? <router-link :to="{name : 'login'}">Login here</router-link>
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
        fields:{
            fullname:'',
            email:'',
            mobile:'',
            password: '',
            cpassword: ''
        }
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
saveMe () {
      if (this.fields.fullname === '') {
        this.$toasted.global.error({ message: 'Please enter FullName' })
      } else if (this.fields.email === '') {
        this.$toasted.global.error({ message: 'Please enter Email' })
      } else if (this.fields.mobile === '') {
        this.$toasted.global.error({ message: 'Please enter Valid Mobile' })
      } else if (this.fields.password === '') {
        this.$toasted.global.error({ message: 'Please Select User Type' })
      } else if (this.fields.cpassword != this.fields.password) {
        this.$toasted.global.error({ message: 'Password and Comfirm Password should be same' })
      } else {
        $.ajax({
          type: 'GET',
          url: this.$root.URL_ROOT + 'userregistration',
          data: this.fields,
          success: (data)=>{
            console.log(data.data)
            if (data.status === 'success') {
                localStorage.setItem('user',data.data.id)
                localStorage.setItem('token',data.data.api_token)
                this.$router.go('/myaccount')
                this.$toasted.global.success({ message: 'Success Please wait...' })
                window.location.href = 'myaccount';
            } else {
                    this.$toasted.global.error({ message: data })
              
            }
          }
        })
      }
    }

  }
}
</script>
