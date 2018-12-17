<template>
  <div class="editor-container">
    <!-- I think each layer is a different canvas -->
    <StatelessCanvas v-on:draw="draw" v-bind:elements="elements" />
    <GlyphOptions />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import StatelessCanvas from '@/components/StatelessCanvas.vue'
import GlyphOptions from './GlyphOptions.vue'

export default {
  name: 'GlyphEditor',
  components: {
    StatelessCanvas,
    GlyphOptions
  },
  computed: mapState({
    elements: (state) => state.draw.editor.elements
  }),
  methods: {
    draw(event){
      this.$store.dispatch("draw/save", { event })
    }
  }
}
</script>

<style lang="scss">
.editor-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 100vh;
  width: 1000px;
  position: relative;
  flex-wrap: no-wrap;
  overflow: hidden;
}
</style>