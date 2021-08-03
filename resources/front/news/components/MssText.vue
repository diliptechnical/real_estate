<template>
    <div class="form-group text-left mb-4">
        <label :for="id"><slot></slot></label>
        <input
        :class="tclass"
        class="form-control"
        :id="id" :name="name"
        v-model="vl"
        :type="type ? type : 'text'"
            :placeholder="placeholder"
        />
    </div>
</template>

<script>
export default {
  props: ['name', 'id', 'placeholder', 'tclass', 'type', 'label'],
  name: 'MssText',
  data () {
    return {
      vl: ''
    }
  },
  watch: {
    vl: function (vll) {
      this.vl = vll
      this.$emit('input', this.vl)
    }
  }
}
</script>

<style scoped>
</style>
