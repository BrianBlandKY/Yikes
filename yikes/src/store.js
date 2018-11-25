import Vue from 'vue'
import Vuex from 'vuex'
import uuidv4 from 'uuid/v4'

Vue.use(Vuex)

const drawState = {
  state: {
    description: "A simple canvas to svg drawing tool.",
    editor: {
      clear: false
    },
    library: {
      default_img: `<svg id="mySvg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><g fill="white" stroke="green" stroke-width="5"><circle cx="40" cy="40" r="25" /><circle cx="60" cy="60" r="25" /></g></svg>`
    }
  },
  getters: {
    default_image(state, getters, rootState) {
      console.log('getter state', state, rootState);
      return 1;
    }
  }
}

const loggerState = {
  state: {
    history: []
  },
  getters: {
    sortedHistory(state) {
      // return the history 
      // sorted by date (desc)
      // limit 50?
      return state.history;
    }
  },
  mutations: {
  },
  actions: {
    log(context, { action, message}) {
      context.commit('logSave', { action, message });
    }
  }
}
// Cannot use Map/Set in Vuex Store. (not supported)

// Seed SVG Image
// console.log('default_img', drawState.state.library.default_img)
// console.log("draw", draw);

// convert to base64
// draw.library.set('default_img_base', btoa(default_img.getBytes()))
// console.log('default_img_base', draw.library.get('default_img_base'))

export default new Vuex.Store({
  modules: {
    draw: drawState,
    logger: loggerState
  },
  mutations: {
    logSave(state, { action, message }) {
      state.logger.history.push({ 
        key: uuidv4(),
        action: action, 
        message: message, 
        state: JSON.stringify(state.draw),
        stamp: Date.now()
      })
    }
  },
  actions: {
    someAction(context) {
      context.dispatch("log", { 
        action: "someAction", 
        message: "some message"
      });
    }
  }
})