<template lang="pug">
  v-row
    v-col(md=12 lg=6)
      v-sheet.pa-5(min-height='calc(100vh - 100px)' rounded='lg')
        .text-h5.mb-5 Prontuários
        v-row
          v-col(cols='auto' align-self='center')
            .text-subtitle- Procurar por:
          v-col(cols='auto' align-self='center')
            v-select(v-model='type' :items='["CPF", "Nome"]' filled hide-details style='width: 100px;')
          v-col(cols='auto' align-self='center')
            v-text-field(v-model='search' @keyup.enter='search()' :label='type' hide-details filled rounded dense)
        v-row
          v-virtual-scroll(
            :items="patients"
            height="710"
            item-height="72"
          )
            template(v-slot:default="{ item }")
              v-list-item(@click='openProntuario()' :key='item.cpf')
                v-list-item-avatar(color='grey lighten-2')
                  v-icon mdi-account
                v-list-item-content
                  v-list-item-title {{ item.name }}
                  v-list-item-subtitle {{ item.cpf }} 
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
  data() {
    return {
      type: 'CPF',
      search: null,
      patients: [
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
