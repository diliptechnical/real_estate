<template>
  <div>
  <div id="myModal" class="modal">
  <!-- Modal content -->
   <div class="modal-dialog modal-smll" role="document">
        <div class="modal-content">
            <div class="modal-header text-center">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <h2 class="modal-title" style="color: #fff;" id="myModalLabel">Subscribe to our Premium.</h2>
                
                <p class="subs-amount"> {{month}} Month Plan {{amount}}/-</p>
            </div>
            <div class="modal-body">
                <div class="row">
                    <!-- <form action="#"> -->
                        <div class="form-group col-md-12">
                        <div class="input-group">
                            <!-- <span><i class="fa-calendar"></i></span> -->
                            <select v-model="month" class="form-control subscript-dropdown" >
                            <option value="1">1 Month</option>
                            <option value="3">3 Month</option>
                            <option value="6">6 Month</option>
                            <option value="12">1 Year</option>
                            </select>
                        </div>
                    </div>
                     <div class="form-group col-md-12">
                        <input type="button" @click="makePayment" style="    background: #fff059;
    border-radius: 20px;
    padding: 12px 0;
    font-size: 16px;" class="btn btn-primary btn-lg btn-block" value="Subscribe">
                    </div>
                    <!-- </form> -->
                </div>
            </div>
        </div>
    </div>
</div>
    <!-- Sub banner start -->
    <div class="sub-banner overview-bgi">
      <div class="overlay">
        <div class="container">
          <div class="breadcrumb-area">
            <h1>Properties Listing</h1>
            <ul class="breadcrumbs">
              <li><a href="/">Home</a></li>
              <li class="active">Properties Listing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- Sub Banner end -->

    <!-- Properties section body start -->
    <div class="properties-section-body content-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-8 col-xs-12 col-md-push-4">
            <!-- Option bar start -->
            <div class="option-bar">
              <div class="row">
                <div class="col-lg-6 col-md-5 col-sm-5 col-xs-2">
                  <h4>
                    <span class="heading-icon">
                      <i class="fa fa-th-list"></i>
                    </span>
                    <span class="hidden-xs">Properties List</span>
                  </h4>
                </div>
                <div class="col-lg-6 col-md-7 col-sm-7 col-xs-10">
                  <div class="sorting-options">
                    <select @change="allpropertys(NewToOld)" v-model="NewToOld" class="sorting">
                      <option value="1">New To Old</option>
                      <option value="2">Old To New</option>
                      <!-- <option>Properties (High To Low)</option>
                      <option>Properties (Low To High)</option> -->
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <!-- Option bar end -->

            <div class="clearfix"></div>
            <!-- Property start -->
            <div
              class="property fp2 clearfix wow fadeInUp delay-03s"
              v-for="allprop in allproperties"
              :key="allprop.id"
            >
              <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12 col-pad">
                <!-- Property img -->
                <div class="property-img">
                  <!-- <div class="property-tag button alt featured">Featured</div> -->
                  <!-- <div class="property-tag button sale">For Sale</div> -->
                  <div class="property-price">
                    INR{{ allprop.selling_cost }}
                  </div>
                  <img
                    :src="
                      $root.URL_ROOT + 'uploads/property/' + allprop.front_image
                    "
                    alt="fp-list"
                    class="img-responsive hp-1"
                  />
                  <!-- <div class="property-overlay">
                                <a href="properties-details.html" class="overlay-link">
                                    <i class="fa fa-link"></i>
                                </a>
                                <a class="overlay-link property-video" title="Lexus GS F">
                                    <i class="fa fa-video-camera"></i>
                                </a>
                                <div class="property-magnify-gallery">
                                    <a href="img/properties/properties-1.jpg" class="overlay-link">
                                        <i class="fa fa-expand"></i>
                                    </a>
                                    <a href="img/properties/properties-2.jpg" class="hidden"></a>
                                    <a href="img/properties/properties-3.jpg" class="hidden"></a>
                                </div>
                            </div> -->
                </div>
              </div>
              <div
                class="col-lg-7 col-md-7 col-sm-7 col-xs-12 property-content"
              >
                <div class="info">
                  <!-- title -->
                  <h1 class="title">
                    <router-link
                      :to="{
                        name: 'PropertyDetail',
                        params: { id: allprop.id },
                      }"
                    >
                      {{ allprop.name }}
                    </router-link>
                  </h1>
                  <!-- Property address -->
                  <h3 class="property-address">
                    <router-link :to="{ name: 'PropertyDetail' }">
                      <i class="fa fa-map-marker"></i> {{ allprop.location }},{{
                        allprop.city
                      }}
                    </router-link>
                  </h3>
                  <!-- Facilities List -->
                  <ul class="facilities-list clearfix">
                    <li>
                      <i
                        class="
                          flaticon-square-layouting-with-black-square-in-east-area
                        "
                      ></i>
                      <span> {{ allprop.area }} sq ft</span>
                    </li>
                    <li v-for="amen in allprop.amenity" :key="amen.id">
                      <!-- <i class="flaticon-bed"></i> -->
                      <img :src="@root.URL_ROOT+'uploads/icons/'+amen.image"
                      <span> {{amen.name}} </span>
                    </li>
                    
                  </ul>
                  <!-- Property footer -->
                </div>
                <div class="property-footer">
                  <!-- <span class="left">
                                <a href="#"><i class="fa fa-user"></i>Jhon Doe</a>
                            </span> -->
                  <span class="right">
                    <i class="fa fa-calendar"></i>1 Days ago
                  </span>
                </div>
              </div>
            </div>
            <!-- Property end -->

            <!-- Page navigation start -->
            <div class="text-center">
              <nav aria-label="Page navigation">
                <ul class="pagination">
                  <li>
                    <a
                      href="#" class="disabled"
                      aria-label="Previous"
                    >
                      <span aria-hidden="true" class="disabled">«</span>
                    </a>
                  </li>
                  <li class="active">
                    <a href="#"
                      >1 <span class="sr-only">(current)</span></a
                    >
                  </li>
                
                  <li>
                    <a href="#" class="disabled" aria-label="Next">
                      <span aria-hidden="true">»</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <!-- Page navigation end-->
          </div>
          <div class="col-lg-4 col-md-4 col-xs-12 col-md-pull-8">
            <!-- Sidebar start -->
            <div class="sidebar right">
              <!-- Search contents sidebar start -->
              <div class="sidebar-widget sidebar-widgets hidden-xs hidden-sm">
                <div class="main-title-2">
                  <button
                    :class="
                      normalfilter
                        ? 'btn btn-default filter-btn filter-active'
                        : 'btn btn-default filter-btn '
                    "
                    @click="showFilter(1)"
                  >
                    Filters
                  </button>
                  <button
                    :class="premiumfilter
                        ? 'btn btn-default filter-btn filter-active'
                        : 'btn btn-default filter-btn '"
                    @click="showFilter(2)"
                  >
                   <!--  -->
                    Premium Filters
                  </button>
                </div>
                <div v-if="normalfilter" class="">
                  <div class="control-group">
                    <h3 class="filter-heading">Property Type</h3>
                    <label class="control control--checkbox"
                      >Residential
                      <input type="checkbox" v-model="property_type" value="Residential"/>
                      <div class="control__indicator"></div>
                    </label>
                    <label class="control control--checkbox"
                      >Commercial
                      <input type="checkbox" v-model="property_type" value="Commercial" />
                      <div class="control__indicator"></div>
                    </label>
                    <label class="control control--checkbox"
                      >Other Property Types
                      <input type="checkbox" v-model="property_type" value="Other"  />
                      <div class="control__indicator"></div>
                    </label>
                  </div>
                  <div class="control-group">
                    <h3 class="filter-heading">Apartment Type</h3>
                    <div class="apartment-type">
                      <label class="control control--checkbox"
                      >1BHK
                      <input type="checkbox" v-model="apartment_type" value="1BHK" />
                      <div class="control__indicator"></div>
                    </label>
                     <label class="control control--checkbox"
                      >2BHK
                      <input type="checkbox" v-model="apartment_type" value="2BHK" />
                      <div class="control__indicator"></div>
                    </label>
                     <label class="control control--checkbox"
                      >3BHK
                      <input type="checkbox" v-model="apartment_type" value="3BHK" />
                      <div class="control__indicator"></div>
                    </label>
                     <label class="control control--checkbox"
                      >4BHK
                      <input type="checkbox" v-model="apartment_type" value="4BHK" />
                      <div class="control__indicator"></div>
                    </label>
                     <label class="control control--checkbox"
                      >5BHK
                      <input type="checkbox" v-model="apartment_type" value="5BHK" />
                      <div class="control__indicator"></div>
                    </label>
                      <!-- <input type="button" class="apartment-btn" v-model="apartment_type" value="1BHK"  @click="searchByFilter()">
                      <input type="button" class="apartment-btn" v-model="apartment_type" value="2BHK"  @click="searchByFilter()">
                      <input type="button" class="apartment-btn" v-model="apartment_type" value="3BHK"  @click="searchByFilter()">
                      <input type="button" class="apartment-btn" v-model="apartment_type" value="4BHK"  @click="searchByFilter()">
                      <input type="button" class="apartment-btn" v-model="apartment_type" value="5BHK"  @click="searchByFilter()"> -->
                    </div>
                  </div>
                  <div class="control-group">
                    <h3 class="filter-heading">Price range</h3>
                    <div class="price-range">
                      <template>
                        <div>
                          <VueSimpleRangeSlider
                            style="width: 260px"
                            :min="0"
                            :max="1000000"
                            :logarithmic="true"
                            v-model="range"
                            @onchange="searchByFilter()"
                            activeBarColor="#95c41f"
                          />
                        </div>
                        <div class="container">
                        <div class="row">
                          <span class="price-span col-sm-6"> {{range[0]}} INR </span>
                          <span class="price-span col-sm-6" style="float: right;"> {{range[1]}} INR</span>
                        </div>
                        </div>
                      </template>
                    </div>
                  </div>
                  <div class="control-group">
                    <h3 class="filter-heading">Property Status</h3>
                    <div class="property-status">
                      <label class="control control--checkbox"
                        >Under Construction
                        <input
                          type="radio"
                          name="property_status"
                          v-model="property_status"
                          value="0"
                          id="property_status"
                        />
                        <div class="control__indicator"></div>
                      </label>
                      <label class="control control--checkbox"
                        >Ready
                        <input
                          type="radio"
                          v-model="property_status"
                          value="1"
                          name="property_status"
                          id="property_status"
                        />
                        <div class="control__indicator"></div>
                      </label>
                    </div>
                  </div>
                </div>
                <div v-if="premiumfilter" class="">
                   <div class="control-group">
                    <h3 class="filter-heading">Built Up Area(sq. ft.)</h3>
                    <div class="price-range">
                      <template>
                        <div>
                          <VueSimpleRangeSlider
                            style="width: 250px"
                            :min="0"
                            :max="1000000"
                            :logarithmic="true"
                            v-model="built_up_area"
                            activeBarColor="#95c41f"
                          />
                        </div>
                      </template>
                    </div>
                  </div>
                  <div class="control-group">
                    <h3 class="filter-heading">Plot Area(sq. ft.)</h3>
                    <div class="price-range">
                      <template>
                        <div>
                          <VueSimpleRangeSlider
                            style="width: 250px"
                            :min="0"
                            :max="1000000"
                            :logarithmic="true"
                            v-model="area"
                            activeBarColor="#95c41f"
                          />
                        </div>
                      </template>
                    </div>
                  </div>
                  <div class="control-group">
                    <h3 class="filter-heading"> Floor Preference</h3>
                    <div class="property-status">
                      <label class="control control--checkbox"
                        >Only Ground
                        <input
                          type="radio"
                          name="property_status"
                          id="property_status"
                          v-model="floor_preference"
                        />
                        <div class="control__indicator"></div>
                      </label>
                      <label class="control control--checkbox"
                        >Not On Ground
                        <input
                          type="radio"
                          name="property_status"
                          id="property_status"
                          v-model="floor_preference"
                        />
                        <div class="control__indicator"></div>
                      </label>
                    </div>
                  </div>
<div class="control-group">
                    <h3 class="filter-heading">Property Age</h3>
                    <div class="property-status">
                      <label class="control control--checkbox"
                        > < 1
                        <input
                          type="radio"
                          v-model="property_age"
                          name="property_age"
                          id="property_age"
                        />
                        <div class="control__indicator"></div>
                      </label>
                      <label class="control control--checkbox"
                        > < 3
                        <input
                          type="radio"
                          v-model="property_age"

                          name="property_age"
                          id="property_age"
                        />
                        <div class="control__indicator"></div>
                      </label>
                       <label class="control control--checkbox"
                        > < 5
                        <input
                          type="radio"
                          v-model="property_age"

                          name="property_age"
                          id="property_age"
                        />
                        <div class="control__indicator"></div>
                      </label>
                       <label class="control control--checkbox"
                        > < 10
                        <input
                          type="radio"
                          v-model="property_age"

                          name="property_age"
                          id="property_age"
                        />
                        <div class="control__indicator"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Properties section body end -->

    <!-- Partners block start -->
   <Partner/>
   
    <!-- Partners block end -->
  </div>
</template>
<script>
import axios from "axios";
import counter from "../components/counter";
import Partner from "../components/Partner";
require("../assets/css/style.dev.css");
import VueSimpleRangeSlider from 'vue-simple-range-slider';
import 'vue-simple-range-slider/dist/vueSimpleRangeSlider.css'
export default {
  components: {
    counter,
    Partner,
    VueSimpleRangeSlider
  },
  data() {
    return {
      premiumfilter: false,
      normalfilter: false,
      range: [1, 10000000],
      number: 10,
      detail: [],
      name: "",
      email: "",
      mobile: "",
      address: "",
      msg: "",
      apartment_type: [],
      property_type: [],
      property_status: null,
      linkname: this.$route.params.name,
      allproperties: [],
      name: "",
      email: "",
      mobile: "",
      address: "",
      msg: "",
      NewToOld: 1,
      property_age: '',
      area: [1,100000],
      floor_preference: '',
      built_up_area: [1,10000],
      month: 1,
      amount: 299,
      noSubs: 0,
      check_sub:localStorage.getItem('subscription'),
      countlog:1,
      countsubs:1,
      uid: localStorage.getItem('user')

    };
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
  mounted() {
    this.includeStripe('checkout.razorpay.com/v1/checkout.js');
    // Get the modal
var modal = document.getElementById("myModal");
if(this.check_sub>0){
  this.check_sub = true
}else{
  this.check_sub = false
}


var subscription = localStorage.getItem('subscription')
if(subscription==null || subscription==''){
  this.check_sub = false
}else if(subscription>0){
  this.check_sub = true
}
// Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// btn.onclick = function() { 
//         modal.style.display = "block";
//   // modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
    this.showFilter(1)
    if (this.$route.params.name == "search") {
      this.searching();
    } else {
      this.allpropertys(1);
    }
    
  },
  watch: {
    apartment_type: function (oldVal, newVal) {
      if (oldVal != newVal) {
        this.searchByFilter();
      }
    },
    property_type: function (oldVal, newVal) {
      if (oldVal != newVal) {
        this.searchByFilter();
      }
    },
    property_status: function (oldVal, newVal) {
      if (oldVal != newVal) {
        this.searchByFilter();
      }
    },
     built_up_area: function (oldVal, newVal) {
      if (oldVal != newVal) {
        this.searchPremiumFilter();
        this.countlog = 2
        this.countsubs = 2
var modal = document.getElementById("myModal");
        if(modal.style.display == "none"){
        this.countsubs = 1
        }
      }
    },
     floor_preference: function (oldVal, newVal) {
      if (oldVal != newVal) {
        this.searchPremiumFilter();
        this.countlog = 2
        this.countsubs = 2
var modal = document.getElementById("myModal");

 if(modal.style.display == "none"){
        this.countsubs = 1
        }

      }
    },
     area: function (oldVal, newVal) {
      if (oldVal != newVal) {
        this.searchPremiumFilter();
        this.countlog = 2
        this.countsubs = 2
var modal = document.getElementById("myModal");

 if(modal.style.display == "none"){
        this.countsubs = 1
        }

      }
    },
     property_age: function (oldVal, newVal) {
      if (oldVal != newVal) {
        this.searchPremiumFilter();
        this.countlog = 2
        this.countsubs = 2
var modal = document.getElementById("myModal");

 if(modal.style.display == "none"){
        this.countsubs = 1
        }
      }
    },
    month: function(oldVal, newVal){
      if(this.month==1){
        this.amount = 299; 
      }else if(this.month==3){
        this.amount = 599; 
      }
      else if(this.month==6){
        this.amount = 899; 
      }else if(this.month==12){
        this.amount = 999; 
      }
    }
  },
  methods: {
    
    includeStripe( URL, callback ){
        let documentTag = document, tag = 'script',
            object = documentTag.createElement(tag),
            scriptTag = documentTag.getElementsByTagName(tag)[0];
        object.src = 'https://' + URL;
        if (callback) { object.addEventListener('load', function (e) { callback(null, e); }, false); }
        scriptTag.parentNode.insertBefore(object, scriptTag);
    },
    makePayment: function (ev) {
            var ev = this
            var amount = parseFloat(this.amount)
            console.log(amount);
            var rzp1 = new Razorpay({
                key: 'rzp_test_MBSCGzeRjYUhaT',
                amount: amount * 100,
                //name: this.name,
                currency: "INR",
                //Uncomment if you are using handler function
                "handler": function (response) {
                    console.log(response);
                    ev.pay_id = response.razorpay_payment_id
                    ev.subscription(response);
                },
                
                //callback_url: 'http://13.126.183.214/razorpay/checkstatus/?orderid='+this.order_id,
                prefill: {
                    //name: this.name,//this.$store.state.profile.fname,
                    //email: this.email,//this.$store.state.profile.email,
                    //contact: '',
                },
                notes: {
                    address: this.address, //this.$store.state.profile.address
                },
                theme: {
                    color: "#00FFFF"
                },
                //order_id: 1,
                redirect: false
            });
            rzp1.open();
        },
        // save_payment(){},
    subscription(paymentdata){
       var self = this;
       var uid = localStorage.getItem('user');
      axios.get(this.$root.URL_ROOT + "usersubscription",{params:{
          uid:uid,
          amount:self.amount,
          month:self.month,
          payment:paymentdata
      }}).then(function (response) {
        console.log(response);
        var data = response.data
        if(data.status=='success'){
         self.$toasted.global.success({ message: 'Success Please wait...' });
          var modal = document.getElementById("myModal");
          modal.style.display = "none";
          localStorage.setItem('subscription',data.data)
          self.check_sub=true
        }
        // self.allproperties = response.data;
      });
    },
     searchPremiumFilter(){
       var vi = this;
       if(this.uid==null || this.uid==""){
           if(vi.countlog == 1){
              vi.$toasted.global.error({ message: 'Please login for subscribe...' });
              vi.$router.push({ name: 'login' })
           }
       }else if(this.check_sub==false){
           if(vi.countsubs == 1){
             var modal = document.getElementById("myModal");
             modal.style.display = "block";
          vi.$toasted.global.error({ message: 'Please subscribe...' }); 
           }        
       }else{
      axios.get(this.$root.URL_ROOT + "premiumfilter", {
          params: {
            floor_preference: vi.floor_preference,
            property_age: vi.property_age,
            area: vi.area,
            built_up_area: vi.built_up_area
          },
        })
        .then(function (response) {
          console.log("premiumData", response);
          vi.allproperties = response.data;
        });
      }
    },
    allpropertys(id) {
      var self = this;
      axios.get(this.$root.URL_ROOT + "allproperty",{params:{
          val:id
      }}).then(function (response) {
        console.log(response);
        self.allproperties = response.data;
      });
    },
      amenitydata(data){
          return JSON.parse(data);
      },
       showFilter(id){
          if(id==1){
          this.normalfilter = true 
          this.premiumfilter = false
          }else{
          this.premiumfilter = true
          this.normalfilter = false
          }
      },
    searchByFilter() {
      var vi = this;
      axios
        .get(this.$root.URL_ROOT + "searchfilter", {
          params: {
            apartment_type: vi.apartment_type,
            property_type: vi.property_type,
            property_status: vi.property_status,
            range: vi.range,
          },
        })
        .then(function (response) {
          console.log("filterData", response);
          vi.allproperties = response.data;
        });
    },
    allpropertys(id) {
      var self = this;
      axios.get(this.$root.URL_ROOT + "allproperty",{params:{
          val:id
      }}).then(function (response) {
        console.log(response);
        self.allproperties = response.data;
      });
    },
    oldproduct(){
        var self = this;
        axios.get(this.$root.URL_ROOT + "oldallproperty").then(function (response) {
        console.log(response);
        self.allproperties = response.data;
        });
    },
    searching() {
      const axios = require("axios");
      var self = this;
      var name = this.$route.params.key;
      axios
        .get(this.$root.URL_ROOT + "searchproduct/" + name)
        .then(function (response) {
          console.log("Searching", response);
          var data = response.data;
          self.allproperties = data;
        });
    },
  },
};
</script>

<style>
.control-group {
    display: inline-block;
    vertical-align: top;
    background: #fff;
    text-align: left;
    box-shadow: 0 1px 2px rgb(0 0 0 / 10%);
    padding: 0px 10px 10px 10px;
    width: 94%;
    height: auto;
    margin: 10px;
}
.control {
    display: block;
    position: relative;
    padding-left: 30px;
    margin-bottom: 15px;
    cursor: pointer;
    font-size: 18px;
}
label {
    cursor: default;
}

.control input {
    position: absolute;
    z-index: -1;
    opacity: 0;
}
[type=checkbox], [type=radio] {
    box-sizing: border-box;
    padding: 0;
}
button, input {
}
button, input, optgroup, select, textarea {
    font-family: sans-serif;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
}
button, hr, input {
    overflow: visible;
}
user agent stylesheet
input[type="checkbox" i] {
    background-color: initial;
    cursor: default;
    appearance: auto;
    box-sizing: border-box;
    margin: 3px 3px 3px 4px;
    padding: initial;
    border: initial;
}
user agent stylesheet
input {
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: auto;
    background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
    -webkit-rtl-ordering: logical;
    cursor: text;
    margin: 0em;
    font: 400 13.3333px Arial;
    padding: 1px 2px;
    border-width: 2px;
    border-style: inset;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
    border-image: initial;
}
.control {
    display: block;
    position: relative;
    padding-left: 30px;
    margin-bottom: 15px;
    cursor: pointer;
    font-size: 18px;
}
label {
    cursor: default;
}
.control input:checked ~ .control__indicator {
    background: #95c41f;
}
.control__indicator {
    position: absolute;
    top: 2px;
    left: 0;
    height: 20px;
    width: 20px;
    background: #e6e6e6;
}
.control input:checked ~ .control__indicator:after {
    display: block;
}
.control--checkbox .control__indicator:after {
    left: 8px;
    top: 4px;
    width: 3px;
    height: 8px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(
45deg
);
}
.control__indicator:after {
    content: '';
    position: absolute;
    display: none;
}
.filter-heading{
    color: #969696;
    font-size: 18px;
}
.apartment-type{
    column-count: 3;
}
.apartment-btn{
    background: #fff;
    border: 1px solid #e6e6e6;
    padding: 5px;
    text-align: center;
    width: auto;
    margin-bottom: 10px;
}
.price-range{
    margin: 20px 0;
}
.simple-range-slider .simple-range-slider-bg-bar{
        margin: 60px 10px 20px 10px !important;
}
.property-status{
    column-count: 1;
}

.sidebar-widgets {
    padding: 0 0 0 0 !important;
    margin-bottom: 0 !important;
}
.filter-btn{
    width: 50%;
    border-radius: 0;
    padding: 12px 20px !important;
    font-weight: bold;
}
.filter-active{
    width: 50%;
    background: #95c41f;
    border-radius: 0;
    color: #fff;
    box-shadow: 0px 2px 4px #b9b9b9;
    padding: 12px 20px !important;
    font-weight: bold;
}
.filter-active:hover{
   width: 50%;
    background: #95c41f;
    border-radius: 0;
    color: #fff;
    box-shadow: 0px 2px 4px #b9b9b9;
    padding: 12px 20px !important;
    font-weight: bold;
}
.btn-default.focus, .btn-default:focus{
   width: 50%;
    background: #95c41f;
    border-radius: 0;
    color: #fff;
    box-shadow: 0px 2px 4px #b9b9b9;
    padding: 12px 20px !important;
    font-weight: bold;
}
.price-span{
  border: 1px solid #fafafa;
  padding: 10px;
}
a.disabled {
  pointer-events: none;
}
.subscript-dropdown{
      width: 400px !important;
    border-radius: 10px;
    height: 45px;
}
.subs-amount{
      color: #fff;
    font-weight: bold;
    font-size: 22px;
    padding: 10px;
}
</style>