import { createStore } from "vuex";
// import state from './state.js'
// import * as actions from './actions'
// import * as mutations from './mutations'

const store = createStore({
  state: {
    test: "hello world"
  },
  getters: {},
  actions: {},
  mutations: {},
})

export default store