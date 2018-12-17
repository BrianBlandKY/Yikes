import Vue from 'vue'
import Vuex from 'vuex'
import uuidv4 from 'uuid/v4'
import {logDateFormat} from '@/utils/date'
import _ from 'lodash'

import { LOGGER_SELECT, LOGGER_SAVE, LOGGER_CYCLE, DRAW_SAVE } from '@/mutations'

Vue.use(Vuex)

const drawState = {
  namespaced: true,
  state: {
    description: "A simple canvas to svg drawing tool.",
    editor: {
      clear: false,
      elements: []
    },
    library: {
      default_img: `<svg id="mySvg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><g fill="white" stroke="green" stroke-width="5"><circle cx="40" cy="40" r="25" /><circle cx="60" cy="60" r="25" /></g></svg>`
    }
  },
  mutations: {
    [DRAW_SAVE](state, { event }){
      state.editor.elements.push(event)
    }
  },
  actions: {
    save(context, { event }){
      context.commit(DRAW_SAVE, { event })
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
    scopedState: (state) => {
      if (state.selectedId){
        let entry = state.history.filter((x) => x.id == state.selectedId)
        return entry[0].data
      } else {
        return ""
      }
    }
  },
  mutations: {
    [LOGGER_SELECT](state, { record }) {
      let entry = state.history.filter((x) => x.id == record.id)
      state.selectedId = entry[0].id
    },
    [LOGGER_SAVE](state, { action, message, data }) {
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
      state.history.push(record)
    },
    [LOGGER_CYCLE](state, { status }){
      if (!state.selectedId){
        return
      }
      let currentId = _.findIndex(state.history, function(o) { return o.id == state.selectedId })
      let idx = 0
      if (status) {
        idx = ((currentId-1 < 0) ? state.history.length-1  : currentId-1)
      } else {
        idx = ((currentId+1 >= state.history.length) ? 0 : currentId+1)
      }
      state.selectedId = state.history[idx].id
    }
  },
  actions: {
    select(context, { record }){
      context.commit(LOGGER_SELECT, { record })
    },
    log(context, { action, message, data}) {
      context.commit(LOGGER_SAVE, { action, message, data})
    },
    cycle(context, { status }){
      context.commit(LOGGER_CYCLE, { status })
    }
  }
}
// Cannot use Map/Set in Vuex Store. (not supported)

// Seed SVG Image
// console.log('default_img', drawState.state.library.default_img)
// console.log("draw", draw)

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
    // someAction(context) {
    //   context.dispatch("logger/log", { 
    //     action: "someAction", 
    //     message: "some message"
    //   })
    // }
  }
})