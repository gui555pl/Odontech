import Vue from 'vue'
import VueRouter from 'vue-router'
import Agendamento from '../views/Agendamento'
import Atendimento from '../views/Atendimento'
import Prontuario from '../views/Prontuario'
import Login from '../views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/agendamento',
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
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
