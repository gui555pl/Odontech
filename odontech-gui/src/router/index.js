import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

import Agendamento from '../views/Agendamento'
import Atendimento from '../views/Atendimento'
import Prontuario from '../views/Prontuario'
import Login from '../views/Login'

Vue.use(VueRouter)

const routes = [
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.path !== '/login') || to.path === '/') {
    if (store.getters['loginInformation/hasActiveUser'] === false) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})


export default router
