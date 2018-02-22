import Vue from 'vue'
import Vuex from 'vuex'
import beers from '@/pages/beers/store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    beers,
  },
  strict: process.env.NODE_ENV !== 'production'
})
