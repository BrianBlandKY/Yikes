<template>
<Wrapper>
  <!--
    <Region height="full" width="small" border="on">
      <GlyphCollection />
    </Region> 
  -->
  <GlyphEditor />
</Wrapper>
</template>

<script>
// @ is an alias to /src
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