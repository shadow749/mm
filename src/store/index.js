import Vue from 'vue'
import Vuex from 'vuex'
import city from './city'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: { // 引入子模块
    city,
    user
  }
})
