<template>
<Wrapper>
  <div class="log-master-container">
    <div class="log-entry-container">
      <div v-bind:key="record.id" v-for="record in orderedHistory" 
        v-bind:class="selectedClass(record)" 
        v-on:click="selectedRecord(record)">
          <div class="stamp-date">{{record.stampDate}}</div>
          <div class="stamp-time">{{record.stampTime}}</div>
          <div class="action">{{record.action}}</div>
          <div class="message">{{record.message}}</div>
      </div>
    </div>
    <div class="log-scope-container">
      <pre><code>{{scopedState}}</code></pre>
    </div>
  </div>
</Wrapper>
</template>

<script>
import { mapState } from 'vuex'
import Wrapper from '@/framing/Wrapper.vue'

export default {
  name: 'Logger',
  components: {
    Wrapper
  },
  computed: mapState({
    history: state => state.logger.history,
    orderedHistory: (state, store) => store["logger/orderedHistory"],
    scopedState: (state, store) => store['logger/scopedState']
  }),
  methods: {
    selectedClass: function(record){
      if (this.$store.state.logger.selectedId != null &&
      this.$store.state.logger.selectedId == record.id) {
        return "entry selected";
      } else {
        return "entry";
      }
    },
    selectedRecord: function(record){
      this.$store.dispatch("logger/select", { record });
    }
  }
}
</script>

<style lang="scss">
  @import '@/variables.scss';

  .log-master-container{
    font-family: 'Courier New', Courier, monospace;
    font-size: .8em;
    font-weight: 600;
    color: black;
    background-color: $context-background-color;

    display: flex;
    width: 1000px;
    flex-grow: 0;
    justify-content: flex-start;
    flex-direction: row;
    align-items: flex-start;
    cursor: pointer;
  }
  .log-entry-container {
    flex: 0 1 auto;
    position: relative;
    width: 600px;
    min-height: 100vh;
    overflow-y: scroll;
    overflow-x: scroll;
    
    .selected {
      background-color: red;
    }

    .entry {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      width: 100vw;

      .stamp-date, .stamp-time {
        width: 75px;
        margin-right: 2em;
      }
      .action {
        width: 75px;
        margin-right: 2em;
      }
      .message {
        // display: block;
        width: 400px;
      }
    }
  }
  .log-scope-container {
    flex: 0 1 auto;
    position: relative;
    width: 400px;
    height: 100vh;
  }

</style>
