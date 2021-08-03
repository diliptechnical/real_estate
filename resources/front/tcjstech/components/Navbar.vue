<template>
<div>
<div class="loading-now" v-if="loading">
   <!-- <img :src="$root.URL_ROOT+'uploads/Setting/'+linkdetail.image" alt="Stylexpo" style="width: 200px" class="img" /> -->
      <div class="loading"></div>
    </div>
   <!-- Top header start -->
<header class="top-header hidden-xs" id="top">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div class="list-inline">
                    <a href="tel:1-8X0-666-8X88"><i class="fa fa-phone"></i> {{linkdetail.Phone}} </a>
                    <a href="tel:info@themevessel.com"><i class="fa fa-envelope"></i> {{linkdetail.site_email}} </a>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <ul v-if="!uid" class="top-social-media pull-right">
                    <li>
                      <router-link :to="{name : 'login'}" class="sign-in"><i class="fa fa-sign-in"></i> Login</router-link>
                    </li>
                    <li>
                       <router-link :to="{name : 'signup'}" class="sign-in"><i class="fa fa-user"></i> Register</router-link>
                    </li>
                </ul>
                 <ul v-if="uid" class="top-social-media pull-right">
                    <li>
                      <router-link :to="{name : 'myaccount'}" class="sign-in">
                          <i class="fa fa-user"></i> {{detail.name}} </router-link>
                    </li>
                    <li>
                       <a @click="logout" class="sign-in"><i class="fa fa-sign-out"></i>Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</header>
<!-- Top header end -->
<!-- Main header start -->
<header class="main-header">
    <div class="container">
        <nav class="navbar navbar-default">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" @click="mobile" id="drawer" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <router-link :to="{name : 'Home'}" class="logo">
                    <img :src="$root.URL_ROOT+'uploads/Setting/'+linkdetail.site_logo" alt="logo">
                </router-link>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div :class="showmenu ? 'navbar-collapse collapse showme': 'navbar-collapse '" role="navigation" aria-expanded="true" id="app-navigation">
                <ul class="nav navbar-nav">
                    <li class="dropdown active">
                       <router-link :to="{name : 'Home'}">
                            Home
                        </router-link>
                    </li>
                     <li>
                        <router-link :to="{name : 'About'}">
                            About Us
                        </router-link>
                    </li>
                    <li class="dropdown">
                        <router-link :to="{name : 'Property'}">
                            Properties
                        </router-link>
                    </li>
                    <li class="dropdown mega-dropdown">
                        <router-link :to="{name : 'contact'}">
                            Contact us
                        </router-link>
                       
                    </li>
                </ul>
                <ul class="nav navbar-nav navbar-right rightside-navbar">
                   
                </ul>
            </div>
        </nav>
    </div>
</header>
<!-- Main header end -->

<!-- Sidenav start -->
<nav id="sidebar" class="nav-sidebar">
    <!-- Close btn-->
    <div id="dismiss">
        <i class="fa fa-close"></i>
    </div>
    <div class="sidebar-inner">
        <div class="sidebar-logo">
            <img src="../assets/img/logos/logo.png" alt="sidebarlogo">
        </div>
        <div class="get-in-touch">
            <h3 class="heading">Get in Touch</h3>
            <div class="sidebar-contact-info">
                <div class="icon">
                    <i class="fa fa-phone"></i>
                </div>
                <div class="body-info">
                    <a href="tel:0477-0477-8556-552">0477 8556 552</a>
                </div>
            </div>
            <div class="sidebar-contact-info">
                <div class="icon">
                    <i class="fa fa-envelope"></i>
                </div>
                <div class="body-info">
                    <a href="#">info@themevessel.com</a>
                </div>
            </div>
            <div class="sidebar-contact-info mb-0">
                <div class="icon">
                    <i class="fa fa-fax"></i>
                </div>
                <div class="body-info">
                    <a href="tel:0477-0477-8556-552">0266 8556 787</a>
                </div>
            </div>
        </div>
        <div class="get-social">
            <h3 class="heading">Get Social</h3>
            <a href="#" class="facebook-bg">
                <i class="fa fa-facebook"></i>
            </a>
            <a href="#" class="twitter-bg">
                <i class="fa fa-twitter"></i>
            </a>
            <a href="#" class="google-bg">
                <i class="fa fa-google"></i>
            </a>
            <a href="#" class="linkedin-bg">
                <i class="fa fa-linkedin"></i>
            </a>
        </div>
    </div>
</nav>
<!-- Sidenav end -->
 
</div>
</template>
<script>
import axios from 'axios'

export default {
  components: {

  },
  data () {
    return {
    loading: true,
      uid: localStorage.getItem("user"),
      detail: [],
      current: true,
      mobilesubmenu: false,
      isActive: false,
      linkdetail: [],
      showmenu: false
    }
  },
  mounted () {
    // this.menu(1)
    // this.linkDetails()
    // this.siteLogo()
    // this.checkApi()
    this.loading = true;
    this.linkDetails()
    this.userDetail()
  },
  methods: {
      
         logout() {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("latitude");
      localStorage.removeItem("longitude");
      this.$router.push({ name: 'login' })
      this.$router.go("/");
      localStorage.removeItem("isAdmin");
    },
    menu (id) {
      this.current = id
      this.isActive = false
    },
    mobile () {
      if (showmenu == false) {
        this.showmenu = true
      } else {
        this.showmenu = false
      }
    },
     async userDetail() {
      var ev = this;
      var uid = localStorage.getItem("user");
      const response = await axios.get(this.$root.URL_ROOT + "userDetails",{ params:{
           uid: uid
      }} );
      console.log(response);
      var data = response.data;
      if (response.status == 200) {
        ev.detail = data;
      }
    },
    linkDetails () {
       var self = this;
        axios.get(this.$root.URL_ROOT + "sitesetting").then(function (response) {
        // console.log('sitesetting',response);
        if(response.status==200){
        self.linkdetail = response.data;
        self.loading = false
        }
        });
    },
  
    // siteLogo () {
    //   var ev = this
    //   axios.get('https://7squarearchitecturalstudio.com/admin/api.php?type=logo').then(function (response) {
    //     // console.log(response.data)
    //     ev.logoSite = response.data
    //   })
    // },
    // submenu (id, mobilesubmenu) {
    //   this.current = id
    //   if (mobilesubmenu === false) {
    //     this.mobilesubmenu = true
    //   } else {
    //     this.mobilesubmenu = false
    //   }
    // }
  }
}
</script>
<style scoped>
.mob-btn{
  position: relative;
  top:-45px;
  padding-top:0px!important;
}
.triPoly_logo img{width:12vw;}
.main-header .main-menu .navigation>li>ul>li>a{ font-weight: bold;
text-align: left; }
.main-header .main-menu .navigation>li>ul>li{border-bottom:1px solid #000;}
.mobilesubmenu{display:block!important;}
.showme{
    display:block !important;
}
</style>
