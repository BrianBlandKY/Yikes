<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Wrapper',
  data: () => ({
  }),
  components: {
  }
}
</script>

<style lang="scss">
.wrapper {
  display: flex;
  position: relative;
  width: 95vw;
  margin-bottom: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: hidden;
  justify-content: flex-start;
  height: 100vh;
}
</style>