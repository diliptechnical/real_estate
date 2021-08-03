<template>
  <div class="text-mute small">
    <span @click="returnSelected(item)" v-for="item in 5" :key="item" class="fa text-infos " :class="ratings<item ? 'fa-star-o' : 'fa-star'"></span>
     &nbsp;<slot></slot>
    <template v-if="editable && ratings>0">{{ratings}} Rating</template>
  </div>
</template>
<script>
export default {
  props: {
    total: {
      required: true
    },
    obtain: {
      required: true
    },
    editable: {
      required: false,
      default: false
    }
  },
  data(){
    return {
        totalObtain : this.obtain
    }
  },
  mounted() {
    setTimeout(() => {
        this.totalObtain = this.obtain
    }, 1000);

  },
  methods: {
    returnSelected (item) {
      this.$emit('input', item)
      if (this.editable) this.totalObtain = item
    }
  },
  computed: {
    ratings: function () {
      if(this.totalObtain==0)
          return 0;
      return (5 * this.totalObtain) / this.total
    }
  }
}
</script>
<style scoped>
span{
    display: inline-block;
    font-size: 20px;
    margin-right: 2px;
}
  .text-infos {
    color: #f7a9af!important;
}
</style>
