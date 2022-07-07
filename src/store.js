import Vue from 'vue'
import Vuex from 'vuex'
import debug from 'debug'

import { findIndex } from './util'

const log = debug('v3:store')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navTags: [],
    isNavMenuOpen: true
  },
  getters: {
    activeTag (state) {
      let tag = state.navTags.find((item) => {
        return item.active === true
      })
      return tag ? tag.index : ''
    },
    navTagIndexs (state) {
      return state.navTags.map((item) => {
        return item.name
      })
    }
  },
  mutations: {
    toggleMenuOpen (state, payload) {
      state.isNavMenuOpen = !state.isNavMenuOpen
    },
    addNavTags (state, view) {
      let index = findIndex(state.navTags, 'index', view.meta.index)

      state.navTags.forEach((item) => {
        item.active = false
      })

      if (index === -1) {
        state.navTags.push({
          index: view.meta.index,
          title: view.meta.title,
          name: view.name,
          active: true
        })
      } else {
        state.navTags[index].active = true
      }
    },
    removeOneNavTag (state, payload) {
      let index = state.navTags.findIndex((item) => {
        return item.index === payload.index
      })
      if (index === -1) {
        return
      }
      state.navTags.splice(index, 1)
    }
  },
  actions: {
    addNavTags ({ state, commit }, view) {
      commit('addNavTags', view)
    },
    removeOneNavTag ({ state, commit }, payload) {
      commit('removeOneNavTag', payload)
    }
  }
})
