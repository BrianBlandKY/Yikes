<template>
<Wrapper>
  <GlyphEditor />
</Wrapper>
</template>

<script>
import Wrapper from '@/framing/Wrapper.vue'
import GlyphEditor from '@/components/glyph/GlyphEditor.vue'

export default {
  name: 'Draw',
  components: {
    Wrapper,
    GlyphEditor
  }
}
</script>