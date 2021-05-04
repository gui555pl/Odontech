import Vue from 'vue'
import Vuex from 'vuex'
import { loginInformation } from './loginInformation'
import { prontuario } from './prontuario'
import { atendimento } from './atendimento'
Vue.use(Vuex)

import axios from 'axios'

import VuexPersistence from 'vuex-persist'
const vuexPersistent = new VuexPersistence({
    storage: window.localStorage,
    modules: ['loginInformation']
  })


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
    agendamento,
    prontuario,
    atendimento
  }
})