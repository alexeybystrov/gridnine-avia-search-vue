import Vue from 'vue'
import Vuex from 'vuex'
import flights from './modules/flights'
import sort from './modules/sort'
import filter from './modules/filter'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {
    flights,
    sort,
    filter,
  }
})