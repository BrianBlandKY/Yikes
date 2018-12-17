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

export default {
  name: 'Yikes',
  computed: {
    filteredViews: () => _.filter(views, function(o) { return o.path != "/" })
  },
  components: {
    Root,
    Viewport,
    Nav,
    Renderer
  }
}
</script>

<style lang="scss">
@import '@/variables.scss';

// Do we need to import normalize.css?
body {
  margin: 0;
  padding: 0;
  color: $accent-light;

  font-family: $font-family;

  a, a:visited {
    color: $accent-light;;
  }

  p {
    margin: 20px 0;
    text-align: center;
  }
}
</style>