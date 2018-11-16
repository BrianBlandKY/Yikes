<template>
<div>
  <p>Glyph Collection </p>
  <input type="button" value="New Glyph" />
  <div>
    <template v-for="glyph in $store.state.draw.collection">
      <div v-bind:key="glyph.name">
        <b>{{glyph.name}}</b>
      </div>
    </template>
  </div>
</div>
</template>

<script>
/*
  Glyph Collection
  Features:
    - Create New Glyph
    - Load Previous Glyph
*/
export default {
  name: 'GlyphCollection',
  components: {
  }
}
</script>