<template>
    <div class="flex-slider">
        <!-- For each card.. -->
        <div :key="x" v-for="x in cardCount">
            <div v-if="x==1" class="panel box-slider max">
                <Card :featured=true />
            </div>
            <div v-else class="panel box-slider tile">
                <Card :featured=false />
            </div>
        </div>
    </div>
</template>

<script>
import Card from './Card.vue'
export default {
  name: 'Slider',
  data: () => ({
      cardCount: 27
  }),
  components: {
      Card
  }
}
</script>

<style lang="scss">
    @import "Slider.scss";
</style>