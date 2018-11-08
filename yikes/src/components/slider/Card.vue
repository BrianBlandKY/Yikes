<template>
  <div>
    <Canvas v-bind:height="height" v-bind:width="width"  />
  </div>
</template>

<script>
import Canvas from '../canvas/Canvas.vue'
// There are some problems with vue, paper and canvas when it comes to window resize.
// For now, we'll tell electron to just reload the window when a resize occurs.
export default {
  name: 'Card',
  props: {
    featured: {
      type: Boolean,
      required: true
    }
  },
  data: function() {
    if (this.featured) {
      return {
        width: 620,
        height: 620
      }
    } else {
      return {
        width: 300,
        height: 300
      }
    }
  },
  components: {
    Canvas
  }
}
</script>

<style>
/* @import "App.css"; */
</style>
