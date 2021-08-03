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
          <img class="login-img" :src="PATH_ASSETS+'img/bg-img/12.png'" alt="" />
          <h3 class="mb-0">Welcome Back!</h3>
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
            <MssText name="username" v-model="username" placeholder="Username or email"><i class="lni lni-user"></i></MssText>
            <MssText type="password" name="password" v-model="password" placeholder="Password"><i class="lni lni-lock"></i></MssText>
          </form>
          <MssButton @onclick="login">Login</MssButton>
        </div>
        <!-- Login Meta-->
        <div class="login-meta-data text-center">
          <p class="mb-0">
            Didn't have an account?<router-link to="/register" class="ml-2">Register</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from ''
// import '../assets/scripts/custom'
export default {
  components: {},
  data () {
    return {
      username: '',
      password: '',
      role: '',
      token: localStorage.getItem('token'),
      msg: []
    }
  },
  methods: {
    login () {
      // alert("uid "+this.username+"--pass "+this.password);
      if (this.username === '') {
        this.$toasted.global.error({ message: 'Please enter Email' })
      } else if (this.password === '') {
        this.$toasted.global.error({ message: 'Please enter password' })
      } else {
        // headers: this.$root.auth,
        $.ajax({
            type: 'POST',
            url: this.URL_ROOT + 'api/login',
            data: {
                email: this.username,
                password: this.password
            },
            success: (data)=>{
                if (data.status === 'success') {
                    this.token = data.data.api_token
                    this.role = data.data.role_id
                    localStorage.setItem('user', btoa(JSON.stringify(data.data)))
                    localStorage.setItem('token', btoa(data.data.api_token))
                    this.$router.go('/')
                    this.$toasted.global.success({ message: 'Success Please wait...' })
                } else {
                    $.each(data.data,(key,val)=>{
                        this.$toasted.global.error({ message: val })
                    })
                }
            }
        })
      }
      return false
    }
  }
}
</script>
