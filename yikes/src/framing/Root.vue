<template>
  <div class="frame">
    <slot></slot>
  </div>
</template>


<script>
export default {
  name: 'Root',
  data: () => ({
  }),
  components: {
  }
}
</script>

<style lang="scss">
/*
  Root frame should be the immediate sibling of the body.
  Stretches to the viewport with flex columns
*/
.frame { 
  background-color: #202225;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: absolute;
}
</style>