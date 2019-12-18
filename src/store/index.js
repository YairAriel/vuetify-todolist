import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [
      {
        name: "run 3km",
        checked: false
      },
      {
        name: "learn vue js",
        checked: false
      }
    ]
  },
  mutations: {
    itemAdded(state, newListItem) {
      state.list.unshift(newListItem);
    }
  },
  actions: {
  },
  modules: {
  }
})
