import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import errorLog from './modules/errorLog'
import permission from './modules/permission'
import tagsView from './modules/tagsView'
import orderPcbView from './modules/orderPcb'
import user from './modules/user'
import getters from './getters'
import * as actions from './actions'

Vue.use(Vuex)

const mutations = {
  orderPcb(state, data) {
    state.orderPcb = data
  }
}

const store = new Vuex.Store({
  modules: {
    app,
    errorLog,
    permission,
    tagsView,
    user,
    orderPcbView
  },
  getters,
  mutations,
  actions
})

export default store
