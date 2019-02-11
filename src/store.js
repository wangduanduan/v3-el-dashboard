import Vue from 'vue'
import Vuex from 'vuex'
import debug from 'debug'

const log = debug('v3:store')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navTags: []
  },
  mutations: {
    addNavTags (state, payload) {
      state.navTags.push(payload.name)
    },
    removeOneNavTag (state, index) {
      log('splice', index)
      state.navTags.splice(index, 1)
    }
  },
  actions: {
    addNavTags ({ state, commit }, payload) {
      if (!payload.name || state.navTags.includes(payload.name)) {
        return
      }
      commit('addNavTags', payload)
    },
    removeOneNavTag ({ state, commit }, payload) {
      let index = state.navTags.findIndex((item) => {
        return item === payload.name
      })
      if (index > -1) {
        commit('removeOneNavTag', index)
      }
    }
  }
})
