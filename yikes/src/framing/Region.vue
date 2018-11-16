<template>
  <div v-bind:class="regionSize">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Region',
  props: {
    height: {
      required: false,
      default: 'none',
      validator: function (value) {
        return ['none', 'full'].indexOf(value) !== -1
      }
    },
    width: {
      required: false,
      default: 'stretch',
      validator: function (value) {
        return ['tiny', 'small', 'medium','half', 'large', 'stretch'].indexOf(value) !== -1
      }
    },
    border: {
      required: false,
      default: 'off'
    }
  },
  computed: {
    // region sizing height and width
    regionSize: function() {
      return `region ${this.height} ${this.width} ${this.regionInternal}`
    },
    // internal styling
    regionInternal: function() {
      return `region-space ${this.border}`
    }
  }
}
</script>

<style lang="scss">
.region {
  flex-grow: 0;
  position: relative;

  &.tiny{
    width: 50px;
  }

  &.small{
    width: 150px;
  }

  &.medium{
    width: 450px;
  }

  &.half {
    width: 600px;
  }

  &.stretch {
    flex-grow: 1;
    min-width: 400px;
  }

  &.eigth {
    height: 12vh;
  }

  &.quarter {
    height: 25vh;
  }

  &.full {
    height: 100vh;
  }
}
.region-space {
  margin: 0 2px;
  &.on {
    border: 1px solid white;
  }
}
</style>