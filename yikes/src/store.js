import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    draw: {
      description: "A simple canvas to svg drawing tool.",
      collection: [
        { name:"g1"},
        { name:"g2"},
        { name:"g3"}
      ]
    }
  },
  mutations: {

  },
  actions: {

  }
})
