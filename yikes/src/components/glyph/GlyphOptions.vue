<template>
 <div class="option-wrapper">
  <div class="option-container">
    <div :key="x.name" v-for="x in options" class="option-icon">
      <input type="button" v-bind:value="x.display" />
    </div>
  </div>
 </div>
</template>

<script>
const options = [
  { name: "undo", display: "undo" },
  { name: "redo", display: "redo" },
  { name: "clear", display: "clear" },
  { name: "clear3", display: "clear" },
]

export default {
  name: 'GlyphOptions',
  components: {
  },
  data: () => ({
    options: options
  }),
  methods: {
  }
}
</script>

<style lang="scss">
.option-wrapper {
  flex-grow: 0;
  position: relative;
  width: 50px;
}
.option-container { 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50px;
}
.option-icon {
  margin: 0;
  width: 48px;
  height: 48px;
  border: 1px solid white;
  text-align: center;
  vertical-align: middle;
}
</style>