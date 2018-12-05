import Vue from 'vue'
import Vuex from 'vuex'
import uuidv4 from 'uuid/v4'
import {logDateFormat} from '@/utils/date'
import _ from 'lodash'

Vue.use(Vuex)

const drawState = {
  namespaced: true,
  state: {
    description: "A simple canvas to svg drawing tool.",
    editor: {
      clear: false
    },
    library: {
      default_img: `<svg id="mySvg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><g fill="white" stroke="green" stroke-width="5"><circle cx="40" cy="40" r="25" /><circle cx="60" cy="60" r="25" /></g></svg>`
    }
  }
}

const loggerState = {
  namespaced: true,
  state: {
    history: [],
    selectedId: null
  },
  getters: {
    orderedHistory: (state) => {
      return _.orderBy(state.history, ['stampRaw'], ['desc']);
    },
    scopedState: (state) => {
      if (state.selectedId){
        let entry = state.history.filter((x) => x.id == state.selectedId)
        return entry[0].data;
      } else {
        return "";
      }
    }
  },
  mutations: {
    select(state, { record }) {
      let entry = state.history.filter((x) => x.id == record.id)
      state.selectedId = entry[0].id
    },
    save(state, { action, message, data }) {
      let stamp = new Date(Date.now())
      let record = { 
        id: uuidv4(),
        action: action, 
        message: message, 
        data: data,
        stampRaw: stamp,
        stampDate: logDateFormat(stamp).date,
        stampTime: logDateFormat(stamp).time
      }
      state.history.push(record);
    }
  },
  actions: {
    select(context, { record }){
      context.commit('select', { record });
    },
    log(context, { action, message, data}) {
      context.commit('save', { action, message, data});
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
  },
  actions: {
    someAction(context) {
      context.dispatch("logger/log", { 
        action: "someAction", 
        message: "some message"
      });
    }
  }
})