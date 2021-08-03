<template>
    <div>
        <div v-if="title" class="header-area" id="headerArea">
            <div class="container h-100 d-flex align-items-center justify-content-between">
                <!-- Back Button-->
                <div class="back-button"><a href="#" @click="$router.go(-1)"><i class="lni lni-chevron-left"></i></a></div>
                <!-- Page Title-->
                <div class="page-heading">
                <h6 class="mb-0">{{title}}</h6>
                </div>
                <!-- Search Form-->
                <div class="search-form"><a href="#" @click="logout"><i class="lni lni-power-switch"></i></a></div>
            </div>
        </div>
        <div v-else class="header-area" id="headerArea">
            <div class="container h-100 d-flex align-items-center justify-content-between">
                <!-- Navbar Toggler-->
                <div class="navbar--toggler" id="newstenNavbarToggler" @click="openNav" >
                <span></span><span></span><span></span><span></span>
                </div>
                <!-- Logo-->
                <div class="logo-wrapper"><img :src="PATH_ASSETS+'img/core-img/logo.png'" alt=""></div>
                <!-- Search Form-->
                <div class="search-form"><a ><i class="fa fa-search"></i></a></div>
            </div>
        </div>
        <!-- Sidenav Black Overlay-->
        <div :class="opennavbar==true ? 'sidenav-black-overlay active':'sidenav-black-overlay '" @click="closeNav"></div>
        <!-- Side Nav Wrapper-->
        <div :class="opennavbar==true ? 'sidenav-wrapper nav-active' : 'sidenav-wrapper'" id="sidenavWrapper">
        <!-- Time - Weather-->
        <div class="time-date-weather-wrapper text-center pt-5 pb-0" :style="'background-image: url(\''+PATH_ASSETS+'img/bg-img/1.jpg\')'">
            <div class="weather-update mb-4">
                <img :src="PATH_ASSETS+'img/bg-img/2.jpg'" style="width:150px; height:150px" class="rounded-circle" alt="">
            </div>
            <div class="time-date">
            <div id="dashboardDate"></div>

            </div>
        </div>
        <!-- Sidenav Nav-->
        <ul class="sidenav-nav">
            <li><a @click="alertbox" ><i class="lni lni-user"></i>My Profile</a></li>
            <li><a @click="alertbox" ><i class="lni lni-files"></i>My Policy</a></li>
            <li><a @click="alertbox" ><i class="lni lni-wallet"></i>Wallet</a></li>
            <li><a @click="alertbox" ><i class="lni lni-grid-alt"></i>All Transections</a></li>
            <li><a @click="alertbox" ><i class="lni lni-hand"></i>All Inquiry</a></li>
            <li><a @click="alertbox" ><i class="lni lni-cog"></i>Settings</a></li>
            <li><a @click="logout" ><i class="lni lni-power-switch"></i>Logout</a></li>
        </ul>
        <!-- Go Back Button-->
        <div class="go-home-btn" id="goHomeBtn" @click="closeNav"><i class="lni lni-arrow-left"></i></div>
        </div>

    </div>
</template>
<script>
export default {
  props: ['title'],
  components: {
  },
  data () {
    return {
      opennavbar: false
    }
  },

  mounted () {
    // this.geolocate()
  },
  watch: {
    opennavbar: function (vl) {
      this.opennavbar = vl
    }
  },
  methods: {
    openNav () {
      this.opennavbar = true
      console.log(this.opennavbar)
    },
    closeNav () {
      this.opennavbar = false
    },
    alertbox () {
      this.opennavbar = false
      this.$toasted.global.success({ message: 'coming soon....' })
    },

  }

}
</script>
