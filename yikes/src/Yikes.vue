<template>
<Root>
  <Viewport>
    <Nav v-bind:views="filteredViews" />
    <Renderer />
  </Viewport>
</Root>
</template>

<script>
import _ from 'lodash'
import { views } from '@/views.js'
import Root from '@/framing/Root.vue'
import Viewport from '@/framing/Viewport.vue'
import Renderer from '@/framing/Renderer.vue'
import Nav from '@/components/Nav.vue'

let filteredViews = _.filter(views, function(o) { return o.path != "/" })

export default {
  name: 'Yikes',
  data: () => ({
    filteredViews
  }),
  components: {
    Root,
    Viewport,
    Nav,
    Renderer
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Federant|Indie+Flower|Pacifico|Righteous|Spicy+Rice');

// Do we need to import normalize.css?
body {
  margin: 0;
  padding: 0;
  color: white;
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  // font-family: 'Source Sans Pro', sans-serif;
  // font-family: 'KoHo', sans-serif;
  // font-family: 'Indie Flower', cursive;
  // font-family: 'Indie Flower', cursive;
  // font-family: 'Spicy Rice', cursive;
  // font-family: 'Pacifico', cursive; 
  // font-family: 'Federant', cursive; 
  font-family: 'Righteous', cursive;

  a, a:visited {
    color: white;
  }

  p {
    margin: 20px 0;
    text-align: center;
  }
}
</style>