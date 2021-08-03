<template>
<section class="facts-section" style="background-image:url(images/image-2.jpg);">
<div class="auto-container">
<div class="row clearfix">
<div class="factcounter-column col-lg-12 col-md-12 col-sm-12 col-xs-12">
<div class="fact-counter">
<div class="row clearfix">
<article class="column counter-column col-md-4 col-sm-4 col-xs-12 wow fadeIn" data-wow-duration="0ms">
<div class="inner-box">
<div class="count-outer">
<template>
  <div class="iCountUp">
    <ICountUp
      :delay="delay"
      :endVal="1000"
      :options="options"
      @ready="onReady"
    />+
  </div>
</template>
</div>
<div class="counter-title">Finished Projects</div>
</div>
</article>
<article class="column counter-column col-md-4 col-sm-4 col-xs-12 wow fadeIn" data-wow-duration="0ms">
<div class="inner-box">
<div class="count-outer"><template>
  <div class="iCountUp">
    <ICountUp
      :delay="delay"
      :endVal="1000"
      :options="options"
      @ready="onReady"
    />+
  </div>
</template></div>
<div class="counter-title">Happy Customers</div>
</div>
</article>
<article class="column counter-column col-md-4 col-sm-4 col-xs-12 wow fadeIn " data-wow-duration="0ms">
<div class="inner-box">
<div class="count-outer">
<template>
  <div class="iCountUp">
    <ICountUp
      :delay="delay"
      :endVal="9"
      :options="options"
      @ready="onReadys"
    />
  </div>
</template>
</div>
<div class="counter-title">Locations</div>
</div>
                            </article>
                         </div>
                    </div>
               </div>
            </div>
        </div>
    </section>
</template>
<script type="text/babel">
// import ICountUp from 'vue-countup-v2'
export default {
  name: 'demo',
  components: {
    // ICountUp
  },
  data () {
    return {
      delay: 1000,
      endVal: 900,
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
  methods: {
    onReady: function (instance, CountUp) {
      const that = this
      instance.update(that.endVal + 100)
    },
    onReadys: function (instance, CountUp) {
      const that = this
      instance.update(that.endVal - 891)
    }
  }
}
</script>
<style scoped>
  .iCountUp {
    font-size: 4rem;
    margin: 0;
    color: #c3ec54;
  }
</style>
