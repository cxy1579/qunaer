import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentCity: localStorage.getItem('city') || '泰州',
    letter: '',
  },
  mutations: {
    changeCity(state,city) {
      state.currentCity = city
    },
    changeLetter(state,letter) {
      state.letter = letter
    }
  }
})
