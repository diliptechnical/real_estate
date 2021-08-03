<template>
    <div>
<!-- Footer start -->
<footer class="main-footer clearfix">
    <div class="container">
        <!-- Footer info-->
        <div class="footer-info">
            <div class="row">
                <!-- About us -->
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div class="footer-item fi2">
                        <div class="main-title-2">
                            <h1>Contact Us</h1>
                        </div>
                        <p>
                            {{linkdetail.aboutus}}
                        </p>
                        <ul class="personal-info">
                            <li>
                                <i class="fa fa-map-marker"></i>
                                Address: {{linkdetail.address}}
                            </li>
                            <li>
                                <i class="fa fa-envelope"></i>
                                Email:<a :href="'mailto:'+linkdetail.site_email"> {{linkdetail.site_email}} </a>
                            </li>
                            <li>
                                <i class="fa fa-phone"></i>
                                Phone: <a :href="'tel:'+linkdetail.Phone"> {{linkdetail.Phone}} </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- Links -->
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div class="footer-item">
                        <div class="main-title-2">
                            <h1>Links</h1>
                        </div>
                        <ul class="links">
                            <li>
                                <router-link to="/">Home</router-link>
                            </li>
                            <li>
                                <router-link :to="{name : 'About'}" >About Us</router-link>
                            </li>
                            <li>
                                <router-link :to="{name : 'contact'}">Contact Us</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- Recent cars -->
                
                <!-- Subscribe -->
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div class="footer-item">
                        <div class="main-title-2">
                            <h1>Subscribe</h1>
                        </div>
                        <div class="newsletter clearfix">
                            <p>{{linkdetail.subscription}}</p>
                            <form action="#" method="post">
                                <div class="form-group mb-0">
                                    <input class="nsu-field" v-model="email" id="nsu-email-0" type="text" name="email" placeholder="Email Address" required="">
                                    <button type="button" @click="contact_submits" class="btn button-theme"><i class="fa fa-paper-plane"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
<!-- Footer end -->

<!-- Copy right start -->
<div class="copy-right">
    <div class="container">
        <div class="row clearfix">
            <div class="col-md-8 col-sm-12">
                <p>&copy;  2020 <a href="#" target="_blank"></a>. All Rights Reserved.</p>
            </div>
            <div class="col-md-4 col-sm-12">
                <ul class="social-list clearfix">
                    <li>
                        <a :href="linkdetail.facebook_link" class="facebook-bg">
                            <i class="fa fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a :href="linkdetail.twitter_link" class="twitter-bg">
                            <i class="fa fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a :href="linkdetail.linkedin_link" class="linkedin-bg">
                            <i class="fa fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a :href="linkdetail.google_link" class="google-bg">
                            <i class="fa fa-google-plus"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
<!-- Copy end right-->

<!-- Car Video Modal -->

    </div>
</template>
<script>
import axios from 'axios'
export default {
  components: {
  },
  data () {
    return {
      active: true,
      footerDatas: [],
      active_el: 164,
      showh: 164,
      linkdetail: [],
      name: 'New Subscription',
      email: '',
      mobile: '',
      subject: 'Subscribe',
      msg: '',
    }
  },
  mounted () {
   this.sitesettings()
  },
  methods: {
    activate: function (el) {
      this.active_el = el
      this.showh = el
    }, contact_submits(){
          var vi=this;
        if(this.email==''){
             this.$toasted.global.error({ message: 'Please Enter Your Email' })
        }else{
             axios
        .get(this.$root.URL_ROOT + "contactsubmit",{ params: {
          name: vi.name,
                        email: vi.email,
                        mobile: vi.mobile,
                        subject: vi.subject,
                        msg: vi.msg
        }})
        .then(function (response) {
                       var data=response.data
                       console.log(response)
                       if(data.status=='success'){
                         vi.$toasted.global.success({ message: 'Thank you for subscribe' }) 
                         vi.name="";
                         vi.email="";
                         vi.mobile='';
                       }else{
                       vi.$toasted.global.error({ message: data.msg })
                }
            })
        }
    },
   
       sitesettings(){
        var self = this;
        axios.get(this.$root.URL_ROOT + "sitesetting").then(function (response) {
        console.log('sitesetting',response);
        self.linkdetail = response.data;
        });
    },
    goToTop () {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  }
}
</script>
<style>
.fall{
  display:none;
}
.showh{
  display:block!important;
}
.tab{ width:25%!important; }
.tabcontent{width:100%!important;margin-bottom:0px;background: #e6e6e6;padding: 10px!important;}
.tabcontent a{color:#000;}
.mt-20{position: relative;bottom: -329px;}
</style>
