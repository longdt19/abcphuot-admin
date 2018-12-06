import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import getters from './getters'
import {STORE_KEY} from '../constants'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app
  },
  getters,
  plugins: [createPersistedState({
    key: STORE_KEY,
    reducer (state) {
      return {
        Common: state.Common
      }
    }
  })]
})

export default store
