<template>
  <div class="canvas-wrapper">
    <div v-if="loaded">
      <canvas :id="canvasId" height="900" width="600"></canvas>
    </div>
    <div v-else>
      <input type="button" value="New Glyph" />
    </div>
    <img id="myImg" />
    <!-- <span v-html="default_img">
    </span> -->
  </div>
</template>

<script>
import uuidv4 from 'uuid/v4'

export default {
  name: 'Canvas',
  props: {
  },
  data: function() {
    return {
      canvasId: uuidv4(),
      isPressed: false,
      loaded: true,
      prevPos: null,
      default_img: this.$store.state.draw.library.default_img
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
    getCanvas(){
      return document.getElementById(this.$data.canvasId);
    },
    draw: function(pos) {
      if (!this.$data.isPressed){
        this.$data.prevPos = null;
        return
      }
      if (this.$data.prevPos != null){
        // DRAW
        let canvas = this.getCanvas();
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 3;
        ctx.moveTo(this.$data.prevPos.x, this.$data.prevPos.y);
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
      } 
      this.$data.prevPos = pos;
    },
    press: function() {
      this.$data.isPressed = true;
    },
    release: function() {
      this.$data.isPressed = false;
    }
    // resizeCanvas: function() {
    //   let canvas = document.getElementById(this.$data.canvasId);
    //   console.log('cavas', canvas);
    //   // Don't resize to window dimensions
    //   // Use parent dimensions
    //   // canvas.style.width = "100%";
    //   // canvas.style.height = "100";
    //   canvas.width = canvas.offsetWidth;
    //   canvas.height = canvas.offsetHeight;
    //   console.log('canvas resize', canvas.width, canvas.height);
    // }
  },
  created: function() {

  },
  beforeDestroy: function() {

  },
  mounted: function() {
    var self = this;
    let canvas = self.getCanvas();

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

    // var svg = document.getElementById("mySvg");
    // console.log('svg', svg);
    // var xml = new XMLSerializer().serializeToString(svg);

    // make it base64
    // var svg64 = btoa(xml);
    // var b64Start = 'data:image/svg+xml;base64,';

    // prepend a "header"
    // var image64 = b64Start + svg64;
      
    // var img = document.getElementById("myImg");
    // img.onload = function() {
    //   canvas.getContext('2d').drawImage(img, 0, 0);
    //   console.log("draw something", canvas, img);
    // }
    // // img.src = image64;
    // img.height = 200;
    // img.width = 200;
    // img.src = "default.svg";
  },
  updated: function() {
    // What triggers this?
  }
}
</script>

<style lang="scss">
@import '@/variables.scss';

.canvas-wrapper {
  position: relative;
  display: block;
  width: 600px;
  background-color: $context-background-color;
}
</style>