<template>
<Wrapper>
  <div class="basic-container">
    <div v-bind:key="record.key" v-for="record in history">
      <p>{{record.message}}</p>
    </div>
    <p>Logger</p>
    <input type="button" value="Dispatch override example" v-on:click="override" />
  </div>
</Wrapper>
</template>

<script>
// @ is an alias to /src
import Wrapper from '@/framing/Wrapper.vue'

export default {
  name: 'Logger',
  components: {
    Wrapper
  },
  data: function() {
    return {
      history: this.$store.state.logger.history
    }
  },
  methods: {
    override: function(){
      this.$store.dispatch("someAction");
    }
  }
}
</script>