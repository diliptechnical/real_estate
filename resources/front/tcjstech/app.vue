<template>
  <div>
  <Navbar/>
    <router-view/>
  <Footer />
  </div>
</template>
<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import $ from 'jquery'
import axios from 'axios'
// Component
    require('./assets/css/bootstrap.min.css')
    require('./assets/css/animate.min.css')
    require('./assets/css/bootstrap-submenu.css')
    require('./assets/css/bootstrap-select.min.css')
    require('./assets/css/leaflet.css')
    require('./assets/css/map.css')
    require('./assets/fonts/font-awesome/css/font-awesome.min.css')
    require('./assets/fonts/flaticon/font/flaticon.css')
    require('./assets/fonts/linearicons/style.css')
    require('./assets/css/jquery.mCustomScrollbar.css')
    // require('./assets/css/dropzone.css')
    require('./assets/css/magnific-popup.css')
    require('./assets/css/sidebar.css')
    require('./assets/css/style.css')
    require('./assets/css/skins/default.css')
    require('./assets/css/ie10-viewport-bug-workaround.css')
    // require('./assets/css/jurysoft.css')
  export default {
  name: 'Home',
  components: {
    Navbar,
    Footer,
  },
  data () {
    return {
      menus: [],
      hasImage: false,
      isLoading: true,
      images: [],
      delay: 1000,
      endVal: 120500,
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: ''
      }
    }
  },
  mounted () {
    
    this.myIpData()
    //  var self = this
    // axios.get(this.$root.URL_ROOT + 'gettoken').then(function (response) {
    //   console.log(response)
    //   self.csrftoken = response.data
    //   localStorage.setItem("csrftoken",self.csrftoken)
    // })
    // $.getJSON('image.json', function (data) {
    //   self.images = data
    //   self.hasImage = true
    // })
    // this.getConfig()
  },
  methods: {
    onClick (text) {
      alert(`You clicked ${text}!`)
    },
    onReady: function (instance, CountUp) {
      const that = this
      instance.update(that.endVal + 100)
    },
    async getConfig () {
      const response = await axios.get(this.$root.URL_ROOT + 'api.php?type=linksdetails')
      this.$store.commit('getConfig', response.data.data)
      // console.log(response.data.data)
    },
      myIpData () {
      var ip_address = JSON.parse(localStorage.getItem('ip_address'))

      if (ip_address == null) {
        var min = 100000
        var max = 999999
        var num = Math.floor(Math.random() * (max - min + 1)) + min
        localStorage.setItem('ip_address', JSON.stringify(num))
        // console.log("new ip");
        // console.log(num);
      } else {
        // console.log("old ip(local storage)")
        // console.log(ip_address)
      }
    }
  }
}
</script>

<style>

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 999; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-image: linear-gradient(
20deg
, #3084ff, #1dbdff);
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>