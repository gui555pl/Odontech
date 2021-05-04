import axios from 'axios'

export const atendimento = {
  namespaced: true,
  state: {
    list: []
  },
  getters: {
    getAtendimentos: state => {
      return state.list
    }
  },
  actions: {
    async list({ commit }) {
      let result = []
      result = await axios.get('http://localhost:3000/listAtendimentos')
      commit('setList', result.data)
    }
  },
  mutations: {
    setList(state, list) {
      state.list = list
    }
  },
}