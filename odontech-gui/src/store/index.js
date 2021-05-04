import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import axios from 'axios'

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
        email: 'dentista@email.com',
        type: 'dentista',
        image: 'https://image.freepik.com/free-vector/doctor-character-background_1270-84.jpg'
      },
      {
        email: 'recepcionista@email.com',
        type: 'recepcionista',
        image: 'https://www.vacker360.com/wp-content/uploads/2020/07/front-desk-receptionist-duties.jpg'
      },
    ]
  },
  getters: {
    getUsers: state => {
      return state.users
    },
    hasActiveUser: state => {
      return typeof state.activeUser.type === typeof '' && typeof state.activeUser.email === typeof ''
    },
    activeUser: state => {
      return state.activeUser
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

const agendamento = {
  namespaced: true,
  state: {
    events: []
  },
  getters: {
    getAgendamentos: state => {
      console.log('aaa')
      return state.events
    }
  },
  actions: {
    async list({ commit }) {
      let result = []
      result = await axios.get('http://localhost:3000/listAgendamento')
      commit('setList', result.data)
    },
    async addAgendamento({ commit }, event) {
      let result = []
      result = await axios.post('http://localhost:3000/addAgendamento', { event })
      commit('setList', result.data)
    }
  },
  mutations: {
    setList(state, list) {
      state.events = list
    }
  }
}

export default new Vuex.Store({
  plugins: [vuexPersistent.plugin],
  modules: {
    loginInformation,
    agendamento
  }
})