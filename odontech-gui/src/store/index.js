import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import VuexPersistence from 'vuex-persist'
const vuexPersistent = new VuexPersistence({
    storage: window.localStorage,
    modules: ['loginInformation']
  })

const loginInformation = {
  namespaced: true,
  state: {
    activeUser: {},
    users: [
      {
        email: 'denstista@email.com',
        type: 'dentista'
      },
      {
        email: 'recepcionista@email.com',
        type: 'recepcionista'
      },
    ]
  },
  getters: {
    getUsers: state => {
      return state.users
    },
    hasActiveUser: state => {
      return typeof state.activeUser.type === typeof '' && typeof state.activeUser.email === typeof ''
    }
  },
  actions: {
    changeUser({ commit }, user) {
      commit('updateUser', user)
    }
  },
  mutations: {
    updateUser(state, user) {
      state.activeUser = user
    }
  },
}

export default new Vuex.Store({
  plugins: [vuexPersistent.plugin],
  modules: {
    loginInformation
  }
})