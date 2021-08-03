<template>
  <div class="services" v-if="isLoad">
    <div class="we_do"><h2></h2></div>
    <section class="gallery-section bg-theme">
      <div class="vertical"><router-link to="/">7Square</router-link><span class="destination">Our Services</span></div>
      <div class="container fpad  " >
        <h2 style="color:#fff;text-align:center;padding-bottom: 5px;"> {{ detail.parent }} </h2>
        <p align="justify" class="wow fadeInUp animated col-sm-12" style="padding-bottom: 15px;padding-left:0px;text-align:center;">
        {{detail.data.heading }}
          </p>
<div class="col-sm-3" v-for="(im,key) in detail.image" :key="key"><img class="img" :src="'https://7squarearchitecturalstudio.com/admin/uploads/pages/'+im.image"> </div>
</div></section>
<counter/>
  </div>
</template>
<script>
// import { store } from '@/store/store'
// import counter from './components/counter'
import axios from 'axios'
export default {
  props: ['id'],
  name: 'Detail',
  components: {
    counter
  },
  data () {
    return {
      isLoad: false,
      statedata: [],
      parent: [],
      details: [],
      ids: this.$route.params.id,
      detail: null
    }
  },
    metaInfo () {
    return {
      //detail: [],
      title: this.details.meta_title,
      meta: [
        { name: 'description', content: this.details.meta_description },
        { name: 'keywords', content: this.details.meta_keywords },
      ]
    }
  },
  mounted () {
    this.pageData()
  },
  watch: {
    '$route.params.id': function (id) {
      // console.log(this.$route.params.linkname)
      this.ids = this.$route.params.id
      this.pageData()
    }
  },
  methods: {
    async pageData () {
      var ev = this
      const response = await axios.post(this.$root.URL_ROOT + 'api.php?type=getDetail', { id: this.ids })
      // this.$store.commit('pageData', response.data)
      if (response.data) {
        this.isLoad = true
        this.detail = response.data
        ev.details = response.data.data
      }
      console.log('sssssssssssssssssssssssssssssssss')
       console.log(ev.details)
    }
  }
}
</script>
<style scoped>
.li-cls li{
    list-style: disc;
    color: #b4d94f;
    font-size: 16px;
}
.mg-top{
  margin-top: 20px;
}
.img{height:180px;border:1px solid #fff;margin-bottom:50px;}
</style>
