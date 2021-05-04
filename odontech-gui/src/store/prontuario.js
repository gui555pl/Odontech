import axios from 'axios'

export const prontuario = {
  namespaced: true,
  state: {
    list: []
  },
  getters: {
    getProntuarios: state => {
      return state.list
    }
  },
  actions: {
    async list({ commit }, search) {
      let result = []
      if(search.cpf)
        result = await axios.get('http://localhost:3000/findProntuarioByCPF', {params: {cpf: search.cpf}})
      if(search.nome)
        result = await axios.get('http://localhost:3000/findProntuarioByName', {params: {name: search.nome}})
      console.log(result)
        commit('setList', result.data)
    }
  },
  mutations: {
    setList(state, list) {
      state.list = list
    }
  },
}