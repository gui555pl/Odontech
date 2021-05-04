<template lang="pug">
  v-row
    v-col
      v-sheet.pa-5(min-height='calc(100vh - 100px)' rounded='lg')
        .text-h5.mb-5 Atendimentos
        v-row.pb-0
          v-col.pb-0(cols='auto' align-self='center')
            .text-subtitle- Procurar por:
        v-row
          v-col(cols='5' align-self='center')
            v-text-field(v-model='search.patient_name' label='Nome do Paciente' hide-details outlined rounded dense)
          v-col(cols='5' align-self='center')
            v-text-field(v-model='search.doctor_name' label='Nome do Dentista' hide-details outlined rounded dense)
          v-col(cols='auto' align-self='center')
            v-select(v-model='search.mes' :items='meses' label='Mês' hide-details outlined rounded dense)
          v-col(cols='auto' align-self='center')
            v-select(v-model='search.ano' :items='anos' label='Ano' hide-details outlined rounded dense)
          v-col(cols='1' align-self='center')
            v-btn(icon @click='filterAtendimento')
              v-icon mdi-filter-variant
        v-row
          v-virtual-scroll(
            :items="list"
            height="710"
            item-height="100"
          )
            template(v-slot:default="{ item }")
              v-list-item(@click='openProntuario()' :key='item.data')
                v-list-item-avatar(color='grey lighten-2')
                  v-icon mdi-account
                v-list-item-content
                  v-list-item-title Data: {{ item.data }}
                  v-list-item-title Dentista Responsável: {{ item.medico_responsavel }}
                  v-list-item-title Paciente: {{ item.nome_paciente }}
                  v-list-item-subtitle Tipo: {{ item.tipo }} 
              v-divider(:key='index')
</template>

<script>
// @ is an alias to /src
import Swal from 'sweetalert2'
export default {
  name: 'Atendimento',
  methods: {
    async filterAtendimento() {
      try{
        if(this.search.patient_name)
          await this.$store.dispatch('atendimento/filterByPatient', this.search.patient_name)
        if(this.search.doctor_name)
          await this.$store.dispatch('atendimento/filterByDoctor', this.search.doctor_name)
        // this.atendimentos = this.$store.getters['prontuario/getProntuarios']
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Nenhum prontuário encontrado'
        })
        console.error(err)
      }
    }
  },
  computed: {
    list() {
      return this.$store.getters['atendimento/getAtendimentos']
    }
  },
  async created() {
    try{
      await this.$store.dispatch('atendimento/list', this.search)
    } catch (err) {
      console.error(err)
    }
  },
  data() {
    return {
      search: {
        patient_name: undefined,
        doctor_name: undefined,
        mes: undefined,
        ano: undefined
      },
      atendimentos: [],
      meses: [
        {text: 'Janeiro', value: 1},
        {text: 'Fevereiro', value: 2},
        {text: 'Março', value: 3},
        {text: 'Abril', value: 4},
        {text: 'Maio', value: 5},
        {text: 'Junho', value: 6},
        {text: 'Julho', value: 7},
        {text: 'Agosto', value: 8},
        {text: 'Setembro', value: 9},
        {text: 'Outubro', value: 10},
        {text: 'Novembro', value: 11},
        {text: 'Dezembro', value: 12}
      ],
      anos: [
        2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008
      ]
    }
  }
}
</script>
