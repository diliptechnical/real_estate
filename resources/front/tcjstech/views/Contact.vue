<template>
  <div>    
<!-- Sub banner start -->
<div class="sub-banner overview-bgi">
    <div class="overlay">
        <div class="container">
            <div class="breadcrumb-area">
                <h1>Contact Us</h1>
                <ul class="breadcrumbs">
                    <li><a href="/">Home</a></li>
                    <li class="active">Contact Us</li>
                </ul>
            </div>
        </div>
    </div>
</div>
<!-- Sub Banner end -->

<!-- Contact body start -->
<div class="contact-1 content-area-7">
    <div class="container">
        <div class="main-title">
            <h1>Contact Us</h1>
        </div>
        <div class="row">
            <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                <!-- Contact form start -->
                <div class="contact-form">
                    <form id="contact_form" action="#" method="GET" enctype="multipart/form-data">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div class="form-group fullname">
                                    <input type="text" v-model="name" name="full-name" class="input-text" placeholder="Full Name">
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div class="form-group enter-email">
                                    <input type="email" name="email" v-model="email" class="input-text" placeholder="Enter email">
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div class="form-group subject">
                                    <input type="text" name="subject" v-model="subject" class="input-text" placeholder="Subject">
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div class="form-group number">
                                    <input type="text" name="phone" v-model="mobile" class="input-text" placeholder="Phone Number">
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 clearfix">
                                <div class="form-group message">
                                    <textarea class="input-text" name="message" v-model="msg" placeholder="Write message"></textarea>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-6 col-sm-12 col-xs-12">
                                <div class="form-group send-btn mb-0">
                                    <button type="button" @click="contact_submits" class="button-md button-theme btn-3">Send Message</button>
                                </div>
                            </div>
                        </div>
                    </form>     
                </div>
                <!-- Contact form end -->
            </div>
            <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                <!-- Contact details start -->
                <div class="contact-details">
                    <div class="main-title-2">
                        <h3>Our Address</h3>
                    </div>
                    <div class="media">
                        <div class="media-left">
                            <i class="fa fa-map-marker"></i>
                        </div>
                        <div class="media-body">
                            <h4>Office Address</h4>
                            <p>20/F Green Road, Dhanmondi, Dhaka</p>
                        </div>
                    </div>
                    <div class="media">
                        <div class="media-left">
                            <i class="fa fa-phone"></i>
                        </div>
                        <div class="media-body">
                            <h4>Phone Number</h4>
                            <p>
                                <a href="tel:0477-0477-8556-552">Office: 0477 8556 552</a>
                            </p>
                        </div>
                    </div>
                    <div class="media">
                        <div class="media-left">
                            <i class="fa fa-envelope"></i>
                        </div>
                        <div class="media-body">
                            <h4>Email Address</h4>
                            <p>
                                <a href="mailto:info@themevessel.com">info@themevessel.com</a>
                            </p>
                        </div>
                    </div>
                    
                </div>
                <!-- Contact details end -->
            </div>
        </div>
    </div>
</div>
<!-- Contact body end -->

<!-- Google map start -->
<!-- <div class="section">
    <div class="map">
        <div id="map" class="contact-map"></div>
    </div>
</div> -->
<!-- Google map end -->

  </div>
</template>
<script>
import axios from 'axios'
// import counter from './components/counter'
require('../assets/css/style.dev.css')
export default {
  components: {
    // counter
  },
data () {
    return {
      linkname: this.$route.params.name,
      detail: [],
      name:'',
      email:'',
      mobile:'',
      subject: '',
      msg: ''
    }
  },
  //   metaInfo () {
  //   return {
  //     //detail: [],
  //     title: this.detail.meta_title,
  //     meta: [
  //       { name: 'description', content: this.detail.meta_description },
  //       { name: 'keywords', content: this.detail.meta_keywords }
  //     ]
  //   }
  // },
  mounted () {
    // this.linkData()
    this.pageDatas()
  },
  methods: {
    async pageDatas () {
      var ev = this
      const response = await axios.post(this.$root.URL_ROOT + 'api.php?type=pageDatas', { linkname: 'contact' })
      // this.$store.commit('pageData', response.data)
      ev.detail = response.data.data
      // console.log(response.data.data)
    },
     contact_submits(){
          var vi=this;
        if(this.msg==''){
             this.$toasted.global.error({ message: 'Please Write Some massage' })
        }else if(this.name==''){
             this.$toasted.global.error({ message: 'Please enter name' })
        }else if(this.subject==''){
             this.$toasted.global.error({ message: 'Please write Subject' })
        }else if(this.email==""){
             this.$toasted.global.error({ message: 'Please enter email' })
        }else if(this.mobile==""){
             this.$toasted.global.error({ message: 'Please enter mobile number' })
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
                         vi.$toasted.global.success({ message: data.msg }) 
                         vi.name="";
                         vi.email="";
                         vi.mobile='';
                       }else{
                       vi.$toasted.global.error({ message: data.msg })
                }
            })
        }
    }
  }
}
</script>
