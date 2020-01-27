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
  getters: {
    list(state) {
      return state.list;
    }
  },
  mutations: {
    itemAdded(state, newListItem) {
      state.list.push(newListItem);
    },
    toggleListItem(state, index) {
      state.list[index].checked = !state.list[index].checked;
    },
    deleteItem(state, index) {
      state.list.splice(index, 1);
    },
    editListItem(state, itemToEdit) {
      state.list[itemToEdit.index].name = itemToEdit.name; 
    }
  },
  actions: {
  },
  modules: {
  }
})
