<template>
    <canvas 
      :id="canvasId" 
      style="background:red;" 
      v-bind:height="height" 
      v-bind:width="width"></canvas>
</template>

<script>
import uuidv4 from 'uuid/v4'

export default {
  name: 'Canvas',
  props: {
    height: {
      type: Number,
      required: true
    },
    width: {
      type: Number,
      required: true
    }
  },
  data: function() {
    return {
      canvasId: uuidv4(),
      isPressed: false
    }
  },
  methods: {
    getMousePos: function(canvas, evt) {
      var rect = canvas.getBoundingClientRect();
      return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
      };
    },
    draw: function() {
      if (this.$data.isPressed){
        // console.log("DRAWING");
      }
    },
    press: function() {
      this.$data.isPressed = true;
    },
    release: function() {
      this.$data.isPressed = false;
    },
    resizeCanvas: function() {
      // let canvas = document.getElementById(this.$data.canvasId);
      // Don't resize to window dimensions
      // Use parent dimensions
      // canvas.width = window.innerWidth;
      // canvas.height = window.innerHeight;
      // console.log('canvas resize', canvas.width, canvas.height);
    }
  },
  created: function() {

  },
  beforeDestroy: function() {

  },
  mounted: function() {
    var self = this;
    let canvas = document.getElementById(this.$data.canvasId);
    self.resizeCanvas();

    // resize
    window.addEventListener('resize', self.resizeCanvas, false);
    
    // mousemove
    canvas.addEventListener('mousemove', function(evt) {
      var pos = self.getMousePos(canvas, evt);
      self.draw(pos);
      //console.log("mousemove")
    }, false);
    
    // mousedown
    canvas.addEventListener('mousedown', function() { // event param
      self.press();
      // var pos = self.getMousePos(canvas, evt);
      // console.log("mousedown");
    }, false);
    
    // mouseup
    canvas.addEventListener('mouseup', function() { // event param
      self.release();
      // var pos = self.getMousePos(canvas, evt);
      // console.log("mouseup");
    }, false);
  },
  updated: function() {
    
  }
}
</script>

<style>
/* @import "App.css"; */
</style>
