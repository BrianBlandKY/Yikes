<template>
  <div class="canvas-wrapper">
    <canvas :id="canvasId" height="900" width="600"></canvas>
  </div>
</template>

<script>
import uuidv4 from 'uuid/v4'

export default {
  name: 'StatelessCanvas',
  props: {
    elements: {
      type: Array,
      required: false
    }
  },
  data: function() {
    return {
      canvasId: uuidv4(),
      isPressed: false,
      prevPos: null
    }
  },
  methods: {
    getCanvas(){
      return document.getElementById(this.$data.canvasId)
    },
    getMousePos: function(canvas, evt) {
      var rect = canvas.getBoundingClientRect();
      return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
      }
    },
    prepBoard(){
      let canvas = this.getCanvas()
      var ctx = canvas.getContext('2d')

      // Grey border (tesseract)
      ctx.lineWidth="20"
      ctx.strokeStyle="grey"
      ctx.rect(10,10,580,860)
      ctx.stroke()

      // White filling (tesseract)
      ctx.fillStyle='#FFF';
      ctx.fillRect(10,10,580,860); 

      // Sample text (convert to 300 DPI and it works!)
      // ctx.fillStyle='#000';
      // ctx.font = "30px Arial";
      // ctx.fillText("Hello World", 10,50); 
    },
    drawLine: function(pointA, pointB) {
      let canvas = this.getCanvas()
      var ctx = canvas.getContext('2d')
      ctx.strokeStyle = 'blue'
      ctx.lineWidth = 5
      ctx.beginPath()
      ctx.moveTo(pointA.x, pointA.y)
      ctx.lineTo(pointB.x, pointB.y)
      ctx.stroke()
    },
    draw: function(pos) {
      if (!this.$data.isPressed){
        this.$data.prevPos = null
        return
      }
      if (this.$data.prevPos == null){
        this.$data.prevPos = pos
        return
      }

      // only draw/emit based on distance from previous point
      // This was an attempt to limit the amount of drawing commands.
      // It turns out to be slower than the default behavior (distance calculations)
      // let p1 = this.$data.prevPos
      // let p2 = pos
      // let power = function(a,b){
      //   if (a == b){
      //     return 0
      //   } else {
      //     return (b-a)^2
      //   }
      // }
      // let distance = Math.sqrt(power(p2.x, p1.x) + power(p2.y, p1.y))
      // if (distance < 10) {
      //   return
      // }

      // DRAW
      this.drawLine(this.$data.prevPos, pos)

      // send actions
      this.$emit('draw', { 
        type: "path",
        s: {
          x: this.$data.prevPos.x, 
          y: this.$data.prevPos.y
        },
        e: {
          x: pos.x, 
          y: pos.y
        }
      })
      this.$data.prevPos = pos
    },
    press: function() {
      this.$data.isPressed = true
    },
    release: function() {
      this.$data.isPressed = false
    }
  },
  created: function() {

  },
  beforeDestroy: function() {

  },
  mounted: function() {
    var self = this
    let canvas = self.getCanvas()

    // How do these events behave with layers?
    // Does the last most layer have single focus?
    // Are all layers events fired simultaneously?

    // mousemove
    canvas.addEventListener('mousemove', function(evt) {
      var pos = self.getMousePos(canvas, evt)
      self.draw(pos)
      //console.log("mousemove")
    }, false)
    
    // mousedown
    canvas.addEventListener('mousedown', function() { // event param
      self.press()
    }, false)
    
    // mouseup
    canvas.addEventListener('mouseup', function() { // event param
      self.release()
      // var pos = self.getMousePos(canvas, evt);
      // console.log("mouseup");
    }, false)

    // Draw Outlines
    this.prepBoard()

    if (this.$props.elements.length > 0){
      this.$props.elements.forEach(element => {
        this.drawLine(element.s, element.e)
      })
    }
  }
}
</script>

<style lang="scss">
@import '@/variables.scss';

.canvas-wrapper {
  flex: 0 1 auto;
  position: relative;
  display: block;
  width: 600px;
  background-color: white;
  canvas {
    background-color: $context-background-color;
  }
}
</style>