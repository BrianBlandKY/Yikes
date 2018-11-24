<template>
  <div class="editor-container">
    <Canvas />
    <GlyphOptions />
  </div>
</template>

<script>
import Canvas from '@/components/Canvas.vue'
import GlyphOptions from './GlyphOptions.vue'

export default {
  name: 'GlyphEditor',
  components: {
    Canvas,
    GlyphOptions
  }
}
</script>

<style lang="scss">
.editor-container {
  display: flex;
  position: relative;
  width: 650px;
  margin-bottom: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: hidden;
  justify-content: flex-start;
  height: 100vh;
}
</style>