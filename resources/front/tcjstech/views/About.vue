<template>
  <div>
 
<!-- Sub banner start -->
<div class="sub-banner overview-bgi">
    <div class="overlay">
        <div class="container">
            <div class="breadcrumb-area">
                <h1>About Us</h1>
                <ul class="breadcrumbs">
                    <li><a href="#">Home</a></li>
                    <li class="active"> {{detail.linkname}} </li>
                </ul>
            </div>
        </div>
    </div>
</div>
<!-- Sub Banner end -->

<!-- About city estate start -->
<div class="about-city-estate mb-100">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div class="inside-properties pds-2">
                    <iframe class="modalIframe" :src="detail.video" allowfullscreen></iframe>
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div class="about-text">
                    <h3> {{detail.heading}} </h3>
                    <p v-html="detail.pbody"></p>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- About city estate end -->

<!-- Our service start -->

<!-- Our service end -->

<!-- Testimonial 3 section start-->
<Testimonial/>
<!-- Testimonial 3 end -->



<!-- Partners block start -->
<Partner/>
<!-- Partners block end -->

  </div>
</template>
<script>
import axios from 'axios'
import Partner from '../components/Partner'
import Testimonial from '../components/Testimonial'
import counter from '../components/counter'
export default {
  components: {
    counter,
    Partner,
    Testimonial
  },
  data () {
    return {
      linkname: this.$route.params.name,
      detail: []
    }
  },
    metaInfo () {
    return {
      //detail: [],
      title: this.detail.meta_title,
      meta: [
        { name: 'description', content: this.detail.meta_description },
        { name: 'keywords', content: this.detail.meta_keywords }
      ]
    }
  },
  mounted () {
    // this.linkData()
    this.pageDatas()
  },
  methods: {
    async pageDatas () {
      var ev = this
      const response = await axios.get(this.$root.URL_ROOT + 'aboutus')
      // this.$store.commit('pageData', response.data)
      ev.detail = response.data
      console.log(response)
    }
  }
}
</script>
<style scoped>
.mg-top{
  margin-top: 20px;
}
</style>
