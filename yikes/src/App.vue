<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.panel {
  margin: 5px;
  background: white;
  border: 1px solid black;
}

.app-font {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
  
.app-colors {
  color: #2c3e50;
}

.app-flex-container {
  display: flex;
  position: absolute;
  width: 100%;
  flex-direction: row;
  overflow: hidden;
}
.view-body {
  position: relative;
  width: 80%;
  flex-grow: 2;
}
</style>
