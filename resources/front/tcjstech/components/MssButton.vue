<template>
    <button class="btn btn-primary btn-lg w-100" :class="bclass" @click="$emit('onclick')">
    <slot></slot>
    </button>
</template>
<script>
export default {
  props: ['id', 'bclass', 'txt'],
  data () {
    return {

    }
  },
  mounted () {
  }
}
</script>
