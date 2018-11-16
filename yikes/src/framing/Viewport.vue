<template>
  <div class="layout">
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Layout',
  data: () => ({
  }),
  components: {
  }
}
</script>

<style lang="scss">
.layout {
  flex: 1 1 auto;
  position: relative;
  z-index: auto;
}

.container {
  display: flex;
  position: absolute;
  width: 100vw;
  flex-direction: row;
  overflow: hidden;
  height: 100vh;
}
</style>