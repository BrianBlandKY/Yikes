<template>
<Wrapper>
  <div class="about-container">
    <p>App Logo</p>
    <p>Description</p>
  </div>
</Wrapper>
</template>

<script>
import Wrapper from '@/framing/Wrapper.vue'

export default {
  name: 'About',
  components: {
    Wrapper
  }
}
</script>

<style lang="scss">
.about-container {
  flex-grow: 1;
  max-width: $container-max-width
}
</style>