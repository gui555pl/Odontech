import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Agendamento from '../views/Agendamento'
import Atendimento from '../views/Atendimento'
import Prontuario from '../views/Prontuario'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '',
    component: Home
  },
  {
    path: '/agendamento',
    name: 'Agendamento',
    component: Agendamento
  },
  {
    path: '/atendimento',
    name: 'Atendimento',
    component: Atendimento
  },
  {
    path: '/Prontuario',
    name: 'Prontuário',
    component: Prontuario
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
