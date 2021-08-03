<template>
     <div class="partners-block">
      <div class="container">
        <div class="col-lg-12">
          <h3>Brands & Partners  </h3>
        </div>
      </div>
      <div class="partners-block-inner">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="carousel our-partners slide" id="ourPartners">
                <div class="carousel-inner">
                  
                          <carousel :autoplay="true" :items="4" :nav="false" v-if="showPartner">

                  <div class="item active" v-for="testimonial in testimonialData" :key="testimonial.id">
                    <div class="partner-box">
                      <a href="#">
                        <img
                          :src="$root.URL_ROOT+'uploads/agent/'+testimonial.image"
                          alt="partner"
                        />
                      </a>
                    </div>
                  </div>
                          </carousel>
                </div>
                <a
                  class="left carousel-control"
                  href="#ourPartners"
                  data-slide="prev"
                  ><i class="fa fa-chevron-left icon-prev"></i
                ></a>
                <a
                  class="right carousel-control"
                  href="#ourPartners"
                  data-slide="next"
                  ><i class="fa fa-chevron-right icon-next"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import carousel from "vue-owl-carousel";

export default {
  components: {
    carousel
  },
 
  data() {
    return {
      testimonialData: [],
      showPartner: false
    };
  },
 
  mounted() {
    this.testimonial()
  },
 
  methods: {
     testimonial(){
var self = this;
    axios.get(this.$root.URL_ROOT + "partnerData").then(function (response) {
      // console.log('partnerData',response);
      if(response.status==200){
self.showPartner = true
self.testimonialData = response.data;

      }
    })
    },
  }
}
</script>
