<template>
  <div>

<!-- Sub banner start -->
<div class="sub-banner overview-bgi">
    <div class="overlay">
        <div class="container">
            <div class="breadcrumb-area">
                <h1>My Profile</h1>
                <ul class="breadcrumbs">
                    <li><a href="/">Home</a></li>
                    <li class="active">My Profile</li>
                </ul>
            </div>
        </div>
    </div>
</div>
<!-- Sub Banner end -->

<!-- My profile start -->
<div class="content-areas my-profile">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-12">
                <!-- User account box start -->
                <div class="user-account-box">
                    <div class="header clearfix">
                        <!-- <div class="edit-profile-photo">
                            <div class="change-photo-btn">
                                <div class="photoUpload">
                                    <span><i class="fa fa-upload"></i> Upload Photo</span>
                                    <input type="file" class="upload">
                                </div>
                            </div>
                        </div> -->
                        <h3> {{detail.name}} </h3>
                        <p> {{detail.email}} </p>
                    </div>
                    <div class="content">
                        <ul>
                            <li>
                                <a @click="open_dashboard('step-1')" :class="dashboard_box == 'step-1' ? 'active' : ''" >
                                    <i class="flaticon-social"></i>Profile
                                </a>
                            </li>
                            <li>
                                <a @click="open_dashboard('step-3')" :class="dashboard_box == 'step-3' ? 'active' : ''">
                                    <i class="fa fa-heart"></i>Favorited Properties
                                </a>
                            </li>
                            <li>
                                <a @click="open_dashboard('step-2')" :class="dashboard_box == 'step-2' ? 'active' : ''">
                                    <i class="flaticon-security"></i>Change Password
                                </a>
                            </li>
                            <li>
                                <a @click="logout">
                                    <i class="flaticon-sign-out-option"></i>Log Out
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- User account box end -->
            </div>
            <div class="col-lg-8 col-md-8 col-sm-12" v-if="dashboard_box == 'step-1'">
                <!-- My address start-->
                <div class="my-address">
                    <div class="main-title-2">
                        <h1>My Account</h1>
                    </div>
                    <form action="" method="GET">
                        <div class="form-group">
                            <label>Your Name</label>
                            <input type="text" v-model="detail.name" class="input-text" name="your name" >
                        </div>
                        
                        <div class="form-group">
                            <label>Phone</label>
                            <input type="text" v-model="detail.mobile" class="input-text" name="phone" >
                        </div>
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" v-model="detail.email" class="input-text" name="email" >
                        </div>
                        <div class="form-group">
                            <label>About Me</label>
                            <textarea class="input-text" v-model="detail.aboutme" name="message" :placeholder="detail.aboutme"></textarea>
                        </div>
                        <button type="button" class="btn-2 btn-defaults" @click="saveMe">
                            <span>Save Changes</span> 
                        </button>
                    </form>
                </div>
                <!-- My address end -->
            </div>
            <div class="col-lg-8 col-md-8 col-sm-12" v-if="dashboard_box == 'step-2'">
                <!-- My address start -->
                <div class="my-address">
                    <div class="main-title-2">
                        <h1><span>Change</span> Password</h1>
                    </div>

                    <form action="" method="GET">
                        <div class="form-group">
                            <label>Current Password</label>
                            <input type="password" v-model="oldPass" class="input-text" name="current password" placeholder="Current Password">
                        </div>
                        <div class="form-group">
                            <label>New Password</label>
                            <input type="password" v-model="newPass" class="input-text" name="new-password" placeholder="New Password">
                        </div>
                        <div class="form-group">
                            <label>Confirm New Password</label>
                            <input type="password" v-model="cPass" class="input-text" name="confirm-new-password" placeholder="Confirm New Password">
                        </div>
                        <button class="btn-2 btn-defaults" type="button" @click="changepassword">
                            <span>Save Changes</span> <i class="arrow"></i>
                        </button>
                    </form>
                </div>
                <!-- My address end -->
            </div>
            <div class="col-lg-8 col-md-8 col-sm-12 side-bg" v-if="dashboard_box == 'step-3'">
                <div class="main-title-2">
                    <h1><span>Favorited</span> properties</h1>
                </div>
                <!-- table start -->
                <table class="manage-table responsive-table">
                    <tbody>
                    <tr v-for="allprod in Allproducts" :key="allprod.id">
                        <td class="title-container">
                            <img :src="$root.URL_ROOT+'uploads/property/'+allprod.front_image" alt="properties" class="img-responsive">
                            <div class="title">
                                <h4><a href="#"> {{allprod.name}} </a></h4>
                                <span><i class="fa fa-map-marker"></i> {{allprod.location}},{{allprod.state}},{{allprod.city}} </span>
                            </div>
                        </td>
                        <td class="action">
                            <!-- <a href="#"><i class="fa fa-pencil"></i> Edit</a> -->
                            <router-link :to="{name : 'PropertyDetail' , params: { id: allprod.id }}"><i class="fa  fa-eye-slash"></i> Details</router-link>
                            <!-- <a href="#" class="delete"><i class="fa fa-remove"></i> Delete</a> -->
                        </td>
                    </tr>
                    </tbody>
                </table>
                <!-- table end -->
            </div>
        </div>
    </div>
</div>
<!-- My profile end -->

<!-- Partners block start -->
       <Partner :ourPartners="ourPartners"/>
<!-- Partners block end -->

  </div>
</template>
<script>
import axios from 'axios'
import Partner from "../components/Partner";
// import counter from '../components/counter'
require('../assets/css/style.dev.css')
export default {
  components: {
    counter,
    Partner
  },
data () {
    return {
        Allproducts: [],
        uid: localStorage.getItem("user"),
        detail: [],
        dashboard_box: "step-1",
        fields:{
            fullname:'',
            email:'',
            mobile:'',
            password: '',
            cpassword: ''
        },
        oldPass: '',
        newPass: '',
        cPass: '',
        ourPartners: []

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
      this.userDetail()
      this.getWishlist()
      
  },
methods: {
     open_dashboard(vl) {
      this.dashboard_box = vl;
    },
     getWishlist() {
      const axios = require("axios");
      var self = this;
            var ip_address = JSON.parse(localStorage.getItem('ip_address'))
            var user_session = JSON.parse(localStorage.getItem('user'))
            var uid = ''
            if (user_session != null) {
                uid = user_session
            } else {
                uid = null
            }
      axios
        .get(this.$root.URL_ROOT + "getWhishlistProduct", {params:{
          uid: uid, ip_address: ip_address
        }})
        .then(function(response) {
          console.log(response)
          var data = response.data;
          self.Allproducts = data;
        });
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
    saveMe() {
      var ev = this;
      axios
        .get(this.$root.URL_ROOT + "savemydetail",{ params: {
          id: ev.detail.id,
          name: ev.detail.name,
          mobile: ev.detail.mobile,
          email: ev.detail.email,
          aboutme: ev.detail.aboutme,
        }})
        .then(function (response) {
          console.log(response);
          if (response.status == 200) {
            ev.$toasted.global.success({
              message: "Your Details Updated successfully",
            });
          }
        });
    },
     logout() {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("latitude");
      localStorage.removeItem("longitude");
      this.$router.go("/");
      localStorage.removeItem("isAdmin");
    },
    changepassword(){
    var ev = this;
    if (this.newPass != this.cPass) {
        this.$toasted.global.error({ message: 'Password and Comfirm Password should be same' })
      }
    axios
        .get(this.$root.URL_ROOT + "changeuserpass",{ params: {
          uid: ev.uid,
          oldPass: ev.oldPass,
          newPass: ev.newPass,
          cPass: ev.cPass,
        }})
        .then(function (response) {
          console.log(response);
          if (response.data.status == 'success') {
            ev.$toasted.global.success({
              message: "Your Details Updated successfully",
            });
          }else{
        ev.$toasted.global.error({ message: 'Password and Comfirm Password should be same' })
          }
        });
    }

  }
}
</script>
<style>
.side-bg{
    background: #fff;
    padding: 20px;
}
</style>