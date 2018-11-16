<template>
  <div class="renderer">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Renderer',
  data: () => ({
  }),
  components: {
  }
}
</script>

<style lang="scss">
.renderer {
  position: relative;
  flex-grow: 1;
  // overflow-y: auto;
}
</style>