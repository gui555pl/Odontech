<template lang="pug">
  v-row
    v-col(md=12 lg=6)
      v-sheet.pa-5(min-height='calc(100vh - 100px)' rounded='lg')
        .text-h5.mb-5 Prontuários
        v-row.pb-0
          v-col.pb-0(cols='auto' align-self='center')
            .text-subtitle- Procurar por:
        v-row
          v-col(cols='5' align-self='center')
            v-text-field(v-model='search.cpf' label='CPF' hide-details outlined rounded dense)
          v-col(cols='1' align-self='center') ou
          v-col(cols='5' align-self='center')
            v-text-field(v-model='search.nome' label='Nome' hide-details outlined rounded dense)
          v-col(cols='1' align-self='center')
            v-btn(icon @click='findProntuarios')
              v-icon mdi-magnify
        v-row
          v-virtual-scroll(
            :items="prontuarios"
            height="710"
            item-height="72"
          )
            template(v-slot:default="{ item }")
              v-list-item(@click='openProntuario()' :key='item.cpf')
                v-list-item-avatar(color='grey lighten-2')
                  v-icon mdi-account
                v-list-item-content
                  v-list-item-title {{ item.paciente.nome }}
                  v-list-item-subtitle {{ item.paciente.cpf }} 
                v-list-item-action
                  v-icon(small)
                    | mdi-open-in-new
              v-divider(:key='index')

    v-col(md=12 lg=6)
      v-sheet(min-height='calc(100vh - 100px)' rounded='lg' style='position: relative;')
        div(style='position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);') Selecione um prontuário
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Prontuario',
  methods: {
    async findProntuarios() {
      await this.$store.dispatch('prontuario/list', this.search)
      this.prontuarios = [this.$store.getters['prontuario/getProntuarios']]
    }
  },
  data() {
    return {
      type: 'CPF',
      search: {cpf: undefined, nome: undefined},
      prontuarios: [
        {
          name: 'Oliveira',
          cpf: '123.456.789-10'
        },
        {
          name: 'Oliveira',
          cpf: '123.456.789-10'
        },
        {
          name: 'Oliveira',
          cpf: '123.456.789-10'
        },
        {
          name: 'Oliveira',
          cpf: '123.456.789-10'
        },
        {
          name: 'Oliveira',
          cpf: '123.456.789-10'
        },
        {
          name: 'Oliveira',
          cpf: '123.456.789-10'
        },
        {
          name: 'Oliveira',
          cpf: '123.456.789-10'
        },
        {
          name: 'Oliveira',
          cpf: '123.456.789-10'
        },
        {
          name: 'Oliveira',
          cpf: '123.456.789-10'
        },
        {
          name: 'Oliveira',
          cpf: '123.456.789-10'
        },
        {
          name: 'Oliveira',
          cpf: '123.456.789-10'
        },
        {
          name: 'Oliveira',
          cpf: '123.456.789-10'
        },
        {
          name: 'Oliveira',
          cpf: '123.456.789-10'
        },
        {
          name: 'Oliveira',
          cpf: '123.456.789-10'
        },
        {
          name: 'Oliveira',
          cpf: '123.456.789-10'
        }
      ]
    }
  }
}
</script>
