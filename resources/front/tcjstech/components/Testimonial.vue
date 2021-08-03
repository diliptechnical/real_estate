<template>
     <div class="testimonials-3 overview-bgi mb-70">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <div id="ourPartners3" class="carousel slide" data-ride="carousel">
              <h1>Our Testimonial  </h1>
              <!-- Wrapper for slides -->
              <div class="carousel-inner wow fadeInUp delay-04s" role="listbox"> 
                          <carousel :autoplay="true" :items="1" :nav="false" v-if="showTestimonial">
                <div class="item content clearfix active" v-for="testimonial in testimonialData" :key="testimonial.id">
                  <div class="testimonials-inner">
                    <div class="user">
                      <a href="#">
                        <img
                          class="media-object"
                          :src="$root.URL_ROOT+'uploads/testimonial/'+testimonial.image"
                          alt="user"
                        />
                      </a>
                    </div>
                    <div class="testimonial-info">
                      <h3> {{testimonial.name}} </h3>
                      <p> {{testimonial.post}} </p>
                      <p v-html="testimonial.content">
                      </p>
                    </div>
                  </div>
                </div>
                          </carousel>
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
      showTestimonial: false
    };
  },
 
  mounted() {
    this.testimonial()
  },
 
  methods: {
     testimonial(){
var self = this;
    axios.get(this.$root.URL_ROOT + "testimonialData").then(function (response) {
      // console.log(response);
      if(response.status==200){
        self.showTestimonial = true
      self.testimonialData = response.data;
      }
    })
    },
  }
}
</script>
