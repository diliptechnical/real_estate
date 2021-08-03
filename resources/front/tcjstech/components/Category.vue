<template>
  <div class="home">
   <!-- <loading :active.sync="isLoading" :can-cancel="false"></loading>@finishLoading="finishLoading"-->
        <section class="gallery-section" style="padding-top:30px;background:#000;">
      <div class="container">
        <h2 align="center" class="text-center" v-if="link">
        <span class="main-heading"> To experience the world-class quality and promising structures through our services Architectural
          </span> 
          <br class="visible-xs" />
          <span class="main-text">
          SCALE MODEL MAKING, 3D ARCHITECTURAL VISUALIZATION AND BROCHURE DESIGNING
        </span></h2>
      </div>
      <div class="masonry-gallery col-carousel">
      <div class="filters text-center">
      <ul class="filter-tabs filter-btns clearfix" id="list">
        <template v-for="name in images">
          <li :key="name.id" >
          <router-link :to="'/category/'+name.linkname" :style="link != name.linkname ? 'color:#fff' : ''" class="actives">
            {{ name.name }} 
            </router-link>
          </li>
        </template>
        <!--<li data-role="button" class="liyoutube" @click="filter_video">BROCHURE DESIGN</li>
      --></ul>
    </div>
      <PhotoGrid v-if="hasImage" :images="images" :link="link"></PhotoGrid>
      </div>
    </section>
  </div>
</template>
<script>
import PhotoGrid from '@/components/PhotoGrid'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    PhotoGrid
  // VueContext
  },
  data () {
    return {
      hasImage: false,
      isLoading: true,
      images: [],
      detail: [],
      isActives: false,
      link: this.$route.params.name
    }
  },
    metaInfo () {
    return {
      //detail: [],
      title: this.detail.meta_title,
      meta: [
        { name: 'description', content: this.detail.meta_description },
        { name: 'keywords', content: this.detail.meta_keywords },
      ]
    }
  },
  mounted () {
    this.catData()
    this.cActive()
    // this.pageDatas()
    if(this.link == null){
      this.link = 'SCALEMODALMAKING'
    }
  },
  watch: {
    '$route.params.name': function (name) {
      // console.log(this.$route.params.linkname)
      this.link = this.$route.params.name
      // this.pageDatas()
    }
  },
  methods: {
    cActive (){
      // alert(this.link)
      this.isActives = this.link
      // this.isActives = true
    },
    catData () {
      var self = this
      axios.get(this.$root.URL_ROOT + 'api.php?type=category').then(function (response) {
        // console.log('ddd')
        // console.log(response.data.data)
        self.images = response.data.data
        self.hasImage = true
        // $.getJSON('image.json', function (data) {
        //  self.images = data
        //  self.hasImage = true
        // console.log('singhdilip')
       // console.log(self.images)
      })
    },
    async pageDatas () {
      var ev = this
      const response = await axios.post(this.$root.URL_ROOT + 'api.php?type=metaCat', { linkname: this.link })
      // this.$store.commit('pageData', response.data)
      ev.detail = response.data.data
      // console.log('ddddddddddddddddddddddddddddddddddddddddddd')
      // console.log(response.data.data)
    }
  }
}
</script>
<style scoped>
.main-heading{font-size:18px;}
.main-text{font-weight: bold;    display: block;
    font-size: 25px;}
</style>>