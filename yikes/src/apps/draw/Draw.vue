<template>
<Wrapper>
  <Region height="full" width="small" border="on">
    <GlyphCollection />
  </Region>
  <Region height="full" width="half" border="on">
    <GlyphEditor />
  </Region>
  <Region height="full" width="tiny" border="on">
    <GlyphOptions />
  </Region>
</Wrapper>
</template>

<script>
// @ is an alias to /src
import Wrapper from '@/framing/Wrapper.vue'
import Region from '@/framing/Region.vue'

import GlyphCollection from './GlyphCollection.vue'
import GlyphEditor from './GlyphEditor.vue'
import GlyphOptions from './GlyphOptions.vue'

export default {
  name: 'Draw',
  components: {
    Wrapper,
    Region,
    GlyphCollection,
    GlyphEditor,
    GlyphOptions
  }
}
</script>