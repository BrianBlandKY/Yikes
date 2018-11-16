<template>
    <div class="nav">
      <div class="icon-container">
        <div :key="x.name" v-for="x in apps" class="nav-icon">
          <router-link v-bind:to="x.path">{{x.display}}</router-link>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    apps: {
      type: Array,
      required: true
    }
  },
  data: () => ({
  }),
  components: {
  }
}
</script>

<style lang="scss">
.nav {
  flex-grow: 0;
  min-width: 85px;
  width: 85px;
}

.icon-container { 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.nav-icon {
  margin: 5px 0;
  width: 60px;
  height: 60px;
  border: 1px solid white;
  text-align: center;
  vertical-align: middle;
}
</style>