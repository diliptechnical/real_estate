<template>
    <div class="form-group text-left mb-4">
        <label :for="id"><slot></slot></label>
        <input
        :class="tclass"
        class="form-control"
        :id="id" :name="name"
        v-model="vl"
        :type="type"
            :placeholder="placeholder"
        />
    </div>
</template>

<script>
export default {
  props: ['name', 'id', 'placeholder', 'tclass', 'type', 'label'],

  data () {
    return {
      vl: ''
    }
  },
  mounted () {

  },
  watch: {
    vl: function (vll) {
      this.vl = vll
    }
  },

  methods: {
    getVal () {
      this.$emit('input', this.vl)
    }

  }

}
</script>

<style scoped>
</style>
